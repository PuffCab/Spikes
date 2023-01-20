import React, { Component } from "react";

export class ClassCharacters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      loading: true,
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
      this.setState({ characters: data.results });
      console.log("data", data.results);
    } catch (error) {
      console.log("error", error);
      this.setState({ error: "something went wrong" });
    }
  }

  changeFoo() {
    this.setState({ foo: !this.state.foo });
  }
  componentDidMount() {
    console.log("component is initialized");
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Foo value:", this.state.foo);
    console.log("prevProps", prevProps);
    console.log("prevState :>> ", prevState.foo);
  }

  render() {
    return (
      <div>
        <div>Class - Characters</div>
        <button onClick={this.changeFoo}>Change Foo </button>
        {this.state.characters.map((character, index) => {
          return <img key={character.id} src={character.image} alt="" />;
        })}
      </div>
    );
  }
}

export default ClassCharacters;
