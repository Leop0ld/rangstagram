import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        instagramCodeList: [
          "BkuMs6fANLP", "BkIJPnqhuVG",
          "BjcYk7MBQEy", "BjMOVgqBnVT", "Bi9JmsZBhW5", "BhgCLJyB2GM",
          "BhWb_Dehbk3", "BhT3vPghRo9", "BhLvzqQAooI", "BhIHmN0gxyv",
          "Bg5vLYyA0Ta", "Bg0mceqgi5O", "BgxOSYPAHWF", "Bgcn4cPBghs",
          "Bf-idIAAEps", "Bf79CnCgyNE", "Bfunt8bgHrd", "Bfs9gVHgZXv",
          "BfcihadgV34", "BfOWAfUAX6b", "BfK5sK4gR8Q", "BfITUYdAd1-",
          "BfEzGZhgTR6", "Bez6EbBAIzp", "BexIUM5AM6o", "BexHgyggr4i",
          "BedR-6oguJr", "BeXE_0UAcJk", "BeXElikg280", "BeXEPajgyfX",
          "BeW7tssgL2G", "BeWbma5gUP3", "BeWbREdgZ5W", "BeVkOCAAls2",
          "BeVj15DgjMu", "BeVjiTHASI6", "BeVjBIkgYkw", "BeU5PHSAnd9",
          "BeU2DBSg9eW", "BeU1l5Dg-41", "BeUoD5SA3lC", "BeUmaJ1AkWk",
        ]
    };
  }
  getInstagramImageURL(code) {
    return "https://www.instagram.com/p/" + code + "/media/?size=m";
  }
  render() {
    return (
      <div className="CardList">
        {
          this.state.instagramCodeList.map((code) => {
            return (<Card key={code}
                          code={code}
                          thumbnail={this.getInstagramImageURL(code)}/>);
          })
        }
      </div>
    );
  }
}

export default CardList;
