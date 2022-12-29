import React, { useState, useEffect } from 'react';

import GameNavigation from '../GameNavigation';
import './styles.css';

const AssessUsGame = () => {
  const questions = [
    {
      questionText: 'QN1',
      answerOptions: [
        { answerText: 'ANS1', isCorrect: false, grabGems: 0 },
        { answerText: 'ANS2', isCorrect: false, grabGems: 0 },
        { answerText: 'ANS3', isCorrect: true, grabGems: 0 },
        { answerText: 'ANS4', isCorrect: false, grabGems: 0 },
      ],
    },
    {
      questionText: 'QN2',
      answerOptions: [
        { answerText: 'ANS1', isCorrect: false, grabGems: 0 },
        { answerText: 'ANS2', isCorrect: true, grabGems: 0 },
        { answerText: 'ANS3', isCorrect: false, grabGems: 0 },
        { answerText: 'ANS4', isCorrect: false, grabGems: 0 },
      ],
    },
    {
      questionText: 'QN3',
      answerOptions: [
        { answerText: 'ANS1', isCorrect: true, grabGems: 0 },
        { answerText: 'ANS2', isCorrect: false, grabGems: 0 },
        { answerText: 'ANS3', isCorrect: false, grabGems: 0 },
        { answerText: 'ANS4', isCorrect: false, grabGems: 0 },
      ],
    },
    {
      questionText: 'QN4',
      answerOptions: [
        { answerText: '1', isCorrect: false, grabGems: 0 },
        { answerText: '4', isCorrect: false, grabGems: 0 },
        { answerText: '6', isCorrect: false, grabGems: 0 },
        { answerText: '7', isCorrect: true, grabGems: 0 },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    document.body.style.background = '#7cc6fe';
    // #fae19d
  }, []);

  useEffect(() => {
    return () => {
      document.body.style.background = 'unset';
    };
  }, []);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="container">
      <div className="game-space assess-us-game-space">
        <div className="assess-us-game-space">
          <div className="assess-us-game-container">
            {showScore ? (
              <div className="assess-us-game-score-section">
                You scored {score} out of {questions.length}
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
                </div>
                <div className="answer-section">
                  {questions[currentQuestion].answerOptions.map(
                    (answerOption) => (
                      <button
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
