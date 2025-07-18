import React from "react";
import "./style.css";

export default class Counter extends React.Component {
  state = {
    movies: [
      {
        id: 1,
        name: "It - Chapter One",
        director: "Andy Muschietti",
      },
      {
        id: 2,
        name: "X-Men",
        director: "Bryan Singer",
      },
      {
        id: 3,
        name: "Green Mile",
        director: "Frank Darabont",
      },
    ],
  };

  render() {
    return (
      <div>
        <hr />
        <div style={{ marginTop: "10px" }}>
          {this.state.movies.map((mov) => (
            <div key={mov.id}>
              <h2>{mov.name}</h2>
              <h5>{mov.director}</h5>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
