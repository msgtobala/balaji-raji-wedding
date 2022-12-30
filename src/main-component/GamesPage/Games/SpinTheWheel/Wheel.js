import React, { createRef } from 'react';
import { onSnapshot, doc } from 'firebase/firestore';

import { db } from '../../../../services/firebase';
import './styles.css';
import { addGrabGems } from '../../../../helpers/addGrabGems';
import { canSpin, detectCurrentSpin } from '../../../../helpers/wheel';
import SpinWheelSound from '../../../../audios/spin-wheel.wav';

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      limit: false,
      earnedGrabGems: null,
      spinsLeftToday: null,
    };
    this.selectItem = this.selectItem.bind(this);
    this.unsubscribe = null;
    this.audioRef = createRef(null);
  }

  componentDidMount() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      const query = doc(db, 'users', user.mobile);
      this.unsubscribe = onSnapshot(query, (querySnapshot) => {
        const data = querySnapshot.data();
        if (data) {
          const currentTimeStamp = new Date().toDateString();
          const lastTimeStamp = data.lastSpin.toDate().toDateString();
          if (currentTimeStamp === lastTimeStamp) {
            this.setState({
              spinsLeftToday: 0,
            });
            return;
          }
          this.setState({ spinsLeftToday: data.spinsLeftToday });
        }
      });
    }
  }

  componentWillUnmount() {
    this.unsubscribe = null;
  }

  async selectItem() {
    this.setState({ earnedGrabGems: null });
    const allowSpin = await canSpin();
    if (allowSpin) {
      if (this.audioRef.current) {
        this.audioRef.current.play();
      }
      if (this.state.selectedItem === null) {
        const selectedItem = Math.floor(
          Math.random() * this.props.items.length
        );
        addGrabGems(this.props.items[selectedItem] ?? 0);
        detectCurrentSpin();
        this.setState({ selectedItem });
        setTimeout(() => {
          this.setState({ earnedGrabGems: selectedItem });
        }, 4000);
      } else {
        this.setState({ selectedItem: null });
        setTimeout(this.selectItem, 500);
      }
    } else {
      this.setState({
        selectedItem: null,
        limit: true,
        earnedGrabGems: null,
      });
    }
  }

  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;

    const wheelVars = {
      '--nb-item': items.length,
      '--selected-item': selectedItem,
    };
    const spinning = selectedItem !== null ? 'spinning' : '';

    return (
      <>
        {this.state.spinsLeftToday !== null && (
          <p style={{ fontSize: '22px', textAlign: 'center' }}>
            Spins left today: {this.state.spinsLeftToday}/5
          </p>
        )}
        <div className="wheel-container">
          <audio style={{ display: 'none' }} ref={this.audioRef}>
            <source src={SpinWheelSound} type="audio/mp3" />
          </audio>
          <div
            className={`wheel ${spinning}`}
            style={wheelVars}
            onClick={this.selectItem}
          >
            {items.map((item, index) => (
              <div
                className="wheel-item"
                key={index}
                style={{ '--item-nb': index }}
              >
                {item} Grab Gems
              </div>
            ))}
          </div>
        </div>
        {this.state.earnedGrabGems ? (
          <p
            style={{ textAlign: 'center', fontSize: '20px', marginTop: '20px' }}
          >
            Earned {this.props.items[this.state.selectedItem]} Grab Gems
          </p>
        ) : (
          <></>
        )}
        {this.state.limit ? (
          <p className="memory-game-note">
            Reached Today's Spin Limit, Try Tomorrow
          </p>
        ) : (
          <p className="memory-game-note">
            Spin the wheel to gain respective Grab Gems
          </p>
        )}
      </>
    );
  }
}
