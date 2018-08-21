import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="Card"
           key={this.props.code}
           onClick={this.props.onClick}>
        <div class="Card-imageWrap">
          <img src={this.props.thumbnail} alt="썸네일" className="Card-image"/>
        </div>
      </div>
    );
  }
}

export default Card;
