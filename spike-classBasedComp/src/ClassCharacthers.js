import React, { Component } from "react";

export class ClassCharacthers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://rickandmortyapi.com/api/character/",
      characters: [],
      error: null,
      test: false,
    };
    this.changeTest = this.changeTest.bind(this);
  }
  async fetchData() {
    try {
      const response = await fetch(this.state.url);
      const results = await response.json();
      console.log(results);
      this.setState({ characters: results.results });
    } catch (error) {
      this.setState({ error: error });
      console.log(error);
    }
  }
  changeTest() {
    this.setState({ test: !this.state.test });
  }
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("prevState :>> ", prevState.test);
    // console.log(this.state.test);
  }

  render() {
    return (
      <div>
        <div>Class based Component</div>
        <button onClick={this.changeTest}>Change Test</button>
        <div>
          {this.state.characters.map((character) => {
            return <img src={character.image} alt="" key={character.name} />;
          })}
        </div>
      </div>
    );
  }
}

export default ClassCharacthers;
