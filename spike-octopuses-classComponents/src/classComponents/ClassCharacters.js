import React, { Component } from "react";

export class ClassCharacters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      url: "https://rickandmortyapi.com/api/character",
      error: null,
      foo: true,
    };
    this.changeFoo = this.changeFoo.bind(this);
  }

  async fetchData() {
    try {
      const response = await fetch(this.state.url);
      const data = await response.json();
      console.log("data", data);
      this.setState({ characters: data.results });
      console.log(this.state.characters);
    } catch (error) {
      this.setState({ error: error });
    }
  }
  changeFoo() {
    this.setState({ foo: !this.state.foo });
    console.log("button Clicked");
  }
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("state changed", this.state.foo);
    console.log("prevProps, prevState", prevProps, prevState);
  }
  componentWillUnmount() {}

  render() {
    return (
      <div>
        <h2>Characters</h2>
        <button onClick={this.changeFoo}>Change Foo</button>
        {this.state.characters.map((character) => {
          return <img src={character.image} alt="" key={character.name} />;
        })}
      </div>
    );
  }
}

export default ClassCharacters;
