import React, { Component } from "react";
import "./Belajar.css";

class Belajar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [
        { name: "Mangga", weight: "420gm" },
        { name: "Apel", weight: "20gm" },
        { name: "Jeruk", weight: "120gm" },
      ],
    };
  }

  klikhandler = () => {
    //     console.log("Hello Hard Learning");
    //     alert("Welcome World");
    //     this.state.fruits[0] = ' susan';
    this.setState({
      fruits: [
        { name: "Susan", weight: "420gm" },
        { name: "Apple", weight: "20gm" },
        { name: "Nokia", weight: "120gm" },
      ],
    });
  };

  render() {
    const style = {
      backgroundColor: "skyblue",
      font: "inherit",
      border: "2px solid pink",
      padding: "10px",
      cursor: "pointer",
    };

    return (
      <div>
        <button style={style} onClick={this.klikhandler}>
          klik
        </button>
        <h1 className="Card"> Fruit Name Is {this.state.fruits[0].name}</h1>
        <h1 className="Card"> Fruit Name Is {this.state.fruits[1].name}</h1>
        <h1 className="Card"> Fruit Name Is {this.state.fruits[2].name}</h1>
      </div>
    );
  }
}

export default Belajar;
