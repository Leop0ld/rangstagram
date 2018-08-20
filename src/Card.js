import React, { Component } from 'react';

class Card extends Component {
  handleClick(code) {
    console.log(code);
  }

  render() {
    return (
      <div className="Card"
           key={this.props.code}
           onClick={this.handleClick(this.props.code)}>
        <img src={this.props.thumbnail} alt="썸네일"/>
      </div>
    );
  }
}

export default Card;
