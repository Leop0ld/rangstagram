import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  getInstagramPostURL(code) {
    return `https://www.instagram.com/p/${code}`
  }
  render() {
    return (
      <a className="Card"
           key={this.props.code}
           href={this.getInstagramPostURL(this.props.code)}
           target="_blank"
           onClick={this.props.onClick}>
        <div class="Card-imageWrap">
          <img src={this.props.thumbnail} alt="썸네일" className="Card-image"/>
        </div>
      </a>
    );
  }
}

export default Card;
