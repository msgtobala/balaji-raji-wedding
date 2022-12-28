import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';

import { galleryImage as Images } from '../../constants/images';
import { db } from '../../services/firebase';

const instagram = [
  {
    insImg: Images.CuteWe,
    link: 'https://www.instagram.com/p/CjupWBdJmIV/',
  },
  {
    insImg: Images.CuteWeStanding,
    link: 'https://www.instagram.com/p/CmBs62FJGT7/',
  },
  {
    insImg: Images.MarryMe,
    link: 'https://www.instagram.com/p/ClVMwunvLU0/I',
  },
  {
    insImg: Images.HandHolding,
    link: 'https://www.instagram.com/p/Cigv_SoJdCp/',
  },
  {
    insImg: Images.OurCuteLooks,
    link: 'https://www.instagram.com/p/CjnoyVNPIbH/',
  },
  {
    insImg: Images.WeEngaged,
    link: 'https://www.instagram.com/p/Cj3FnQdpv5T/',
  },
];

const Sidebar = (props) => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState(0);

  const openInstagram = (link) => {
    window.open(link);
  };

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  useEffect(() => {
    const query = collection(db, 'users');
    const unsubscribe = onSnapshot(query, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setPlayers(data.length);
    });
    return unsubscribe;
  }, []);

  return (
    <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
      <div className="blog-sidebar">
        <div className="widget category-widget">
          <h3>Meal Preferences</h3>
          <ul>
            <li>
              <Link onClick={ClickHandler} to="/wedding-details">
                Chicken Soup <span>5</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} to="/wedding-details">
                Motton Kabab <span>7</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} to="/wedding-details">
                Chicken BBQ <span>3</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} to="/wedding-details">
                Mix Salad<span>6</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} to="/wedding-details">
                Beef Ribs <span>2</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} to="/wedding-details">
                Fish BBQ <span>8</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="wpo-newsletter-widget widget">
          <h3>Games</h3>
          <p>Join {players} other Players to win awesome prizes!</p>
          <form className="form">
            <button type="submit" onClick={() => navigate('/games')}>
              Play Game
            </button>
          </form>
        </div>
        <div className="widget wpo-instagram-widget">
          <div className="widget-title">
            <h3>Instagram & Posts</h3>
          </div>
          <ul className="d-flex">
            {instagram.map((item, ins) => (
              <li
                key={ins}
                style={{ cursor: 'pointer' }}
                onClick={() => openInstagram(item.link)}
              >
                <img src={item.insImg} alt={ins} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
