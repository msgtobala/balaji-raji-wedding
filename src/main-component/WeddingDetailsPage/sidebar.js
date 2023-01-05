import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, onSnapshot } from 'firebase/firestore';

import { websiteImages as Images } from '../../constants/images';
import { db } from '../../services/firebase';

const instagram = [
  {
    insImg: Images.gallery4,
    link: 'https://www.instagram.com/p/CjupWBdJmIV/',
  },
  {
    insImg: Images.gallery9,
    link: 'https://www.instagram.com/p/CmBs62FJGT7/',
  },
  {
    insImg: Images.gallery2,
    link: 'https://www.instagram.com/p/ClVMwunvLU0/I',
  },
  {
    insImg: Images.gallery1,
    link: 'https://www.instagram.com/p/Cigv_SoJdCp/',
  },
  {
    insImg: Images.gallery10,
    link: 'https://www.instagram.com/p/CjnoyVNPIbH/',
  },
  {
    insImg: Images.gallery11,
    link: 'https://www.instagram.com/p/Cj3FnQdpv5T/',
  },
];

const Sidebar = (props) => {
  const navigate = useNavigate();
  const [players, setPlayers] = useState(0);

  const openInstagram = (link) => {
    window.open(link);
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
                <img src={item.insImg} alt={ins} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
