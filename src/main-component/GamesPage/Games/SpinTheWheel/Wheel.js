import React from 'react';

import './styles.css';
import { addGrabGems } from '../../../../helpers/addGrabGems';
import { canSpin, detectCurrentSpin } from '../../../../helpers/wheel';

export default class Wheel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: null,
      limit: false,
    };
    this.selectItem = this.selectItem.bind(this);
  }

  async selectItem() {
    const allowSpin = await canSpin();
    if (allowSpin) {
      if (this.state.selectedItem === null) {
        const selectedItem = Math.floor(
          Math.random() * this.props.items.length
        );
        addGrabGems(this.props.items[selectedItem] ?? 0);
        detectCurrentSpin();
        this.setState({ selectedItem });
      } else {
        this.setState({ selectedItem: null });
        setTimeout(this.selectItem, 500);
      }
    } else {
      this.setState({
        selectedItem: null,
        limit: true,
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
    console.log(this.state.selectedItem);

    return (
      <>
        <div className="wheel-container">
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
        {this.state.selectedItem ? (
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
