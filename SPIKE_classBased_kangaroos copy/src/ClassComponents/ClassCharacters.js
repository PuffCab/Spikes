import React, { Component } from "react";

export class ClassCharacters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      error: true,
      url: "https://rickandmortyapi.com/api/character",
      pageNumber: 1,
    };
    this.nextPage = this.nextPage.bind(this);
  }

  async fetchData() {
    try {
      const response = await fetch(this.state.url);
      const data = await response.json();
      console.log("data", data);
      this.setState({ characters: data.results, error: false });
    } catch (error) {
      console.log("error", error);
      this.setState({ error: true });
    }
  }

  nextPage() {
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  }
  componentDidMount() {
    console.log("component did mount");
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("pageNumber:", this.state.pageNumber);
    console.log("%ccomponent did update", "color:orange");
    console.log("prevState", prevState);
  }
  render() {
    return (
      <div>
        <h2>Characters</h2>
        <h2>Page number:{this.state.pageNumber}</h2>
        <button onClick={this.nextPage}>Next</button>
        {this.state.error && <h1>The world is gonna end!!</h1>}

        {this.state.characters.map((character) => {
          return <img src={character.image} key={character.id} />;
        })}
      </div>
    );
  }
}

export default ClassCharacters;
