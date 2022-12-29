import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';

import GameNavigation from '../GameNavigation';
import { addGrabGems } from '../../../../helpers/addGrabGems';
import { setMaxQuiz } from '../../../../helpers/quiz';
import { db } from '../../../../services/firebase';
import './styles.css';

const AssessUsGame = () => {
  const questions = [
    {
      id: 1,
      questionText: 'When did bride and groom met for the first time?',
      answerOptions: [
        { answerText: 'May 14', isCorrect: false, grabGems: 0 },
        { answerText: 'May 15', isCorrect: true, grabGems: 1 },
        { answerText: 'June 14', isCorrect: false, grabGems: 0 },
        { answerText: 'August 14', isCorrect: false, grabems: 0 },
      ],
    },
    {
      id: 2,
      questionText: 'What occasion will be held on Jan 25th at 7:00PM?',
      answerOptions: [
        { answerText: 'Engagement', isCorrect: false, grabGems: 0 },
        { answerText: 'Gifts distribution', isCorrect: false, grabGems: 0 },
        { answerText: 'Snacks', isCorrect: false, grabGems: 0 },
        { answerText: 'Reception', isCorrect: true, grabGems: 1 },
      ],
    },
    {
      id: 3,
      questionText: 'What is the first gift to Bride from the Groom?',
      answerOptions: [
        { answerText: 'Bouquet', isCorrect: true, grabGems: 1 },
        { answerText: 'Ring', isCorrect: false, grabGems: 0 },
        { answerText: 'Gadget', isCorrect: false, grabGems: 0 },
        { answerText: 'Dress', isCorrect: false, grabGems: 0 },
      ],
    },
    {
      id: 4,
      questionText: 'How many versions of landing page in the site?',
      hint: 'Reload the home page to find it',
      answerOptions: [
        { answerText: '1', isCorrect: false, grabGems: 0 },
        { answerText: '4', isCorrect: false, grabGems: 0 },
        { answerText: '6', isCorrect: false, grabGems: 0 },
        { answerText: '7', isCorrect: true, grabGems: 1 },
      ],
    },
    {
      id: 5,
      questionText: 'What is the song played in the website?',
      hint: 'Reload the home page to find it',
      answerOptions: [
        { answerText: '1', isCorrect: false, grabGems: 0 },
        { answerText: '4', isCorrect: false, grabGems: 0 },
        { answerText: '6', isCorrect: false, grabGems: 0 },
        { answerText: '7', isCorrect: true, grabGems: 1 },
      ],
    },
    {
      id: 6,
      questionText: 'What is the color of the Wedding Invitation?',
      answerOptions: [
        { answerText: 'Blue', isCorrect: false, grabGems: 0 },
        { answerText: 'Green', isCorrect: false, grabGems: 0 },
        { answerText: 'Purple', isCorrect: false, grabGems: 0 },
        { answerText: 'Both 1 & 3', isCorrect: true, grabGems: 1 },
      ],
    },
    {
      id: 7,
      questionText: 'How many games we have in our website?',
      hint: 'Go to Games section',
      answerOptions: [
        { answerText: '8', isCorrect: false, grabGems: 0 },
        { answerText: '10', isCorrect: true, grabGems: 1 },
        { answerText: '9', isCorrect: false, grabGems: 0 },
        { answerText: '11', isCorrect: false, grabGems: 0 },
      ],
    },
    {
      id: 8,
      questionText:
        "What is the color of bride's and groom's dress in the background of Engagement invitation website/video?",
      hint: 'Click Engagement section from navigation',
      answerOptions: [
        { answerText: 'Blue', isCorrect: false, grabGems: 0 },
        { answerText: 'Green', isCorrect: false, grabGems: 0 },
        { answerText: 'Purple', isCorrect: false, grabGems: 0 },
        { answerText: 'Black', isCorrect: true, grabGems: 1 },
      ],
    },
    {
      id: 9,
      questionText: 'When is the watch live is getting started?',
      answerOptions: [
        { answerText: '25th Jan', isCorrect: true, grabGems: 1 },
        { answerText: '26th Jan', isCorrect: false, grabGems: 0 },
        { answerText: '24th Jan', isCorrect: false, grabGems: 0 },
        { answerText: '27th Jan', isCorrect: false, grabGems: 0 },
      ],
    },
    {
      id: 10,
      questionText: 'What is the name of Marriage Hall?',
      answerOptions: [
        { answerText: 'Sakthi Mahal', isCorrect: false, grabGems: 0 },
        { answerText: 'ASP Mahal', isCorrect: false, grabGems: 0 },
        { answerText: 'MKS Mahal', isCorrect: true, grabGems: 1 },
        { answerText: 'Amman Hall', isCorrect: false, grabGems: 0 },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [maxQuized, setMaxQuized] = useState(false);

  useEffect(() => {
    document.body.style.background = '#7cc6fe';
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.background = 'unset';
    };
  }, []);

  useEffect(() => {
    toggleMaxQuiz();
  }, [score]);

  const toggleMaxQuiz = async () => {
    if (score === 10) {
      await setMaxQuiz();
    }
  };

  const completeQuiz = async () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      const query = doc(db, 'users', user.mobile);
      const userData = await getDoc(query);
      if (userData && userData.exists()) {
        const data = userData.data();
        if (data.maxQuiz === false) {
          await addGrabGems(score);
        } else {
          setMaxQuized(true);
        }
      }
    }
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      completeQuiz();
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <div className="container">
      <div className="game-space assess-us-game-space">
        <div className="assess-us-game-space">
          <div className="assess-us-game-container">
            {showScore ? (
              <div className="assess-us-game-score-section">
                You got {score} grab gem(s)
                <button className="quiz-button" onClick={restartGame}>
                  Restart Quiz
                </button>
                {maxQuized && 'You have already completed the quiz'}
              </div>
            ) : (
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/
                    {questions.length}
                  </div>
                  <div className="question-text">
                    {questions[currentQuestion].questionText}
                  </div>
                  {questions[currentQuestion].hint && (
                    <p className="question-hint">
                      Hint: {questions[currentQuestion].hint}
                    </p>
                  )}
                </div>
                <div className="answer-section">
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption, index) => (
                      <button
                        key={index}
                        className="quiz-button"
                        onClick={() =>
                          handleAnswerOptionClick(answerOption.isCorrect)
                        }
                      >
                        {answerOption.answerText}
                      </button>
                    )
                  )}
                </div>
              </>
            )}
          </div>
          <GameNavigation />
        </div>
      </div>
    </div>
  );
};

export default AssessUsGame;
