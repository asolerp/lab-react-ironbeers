import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Beers.css";

export default class Beers extends Component {
  constructor() {
    super();
    this.state = {
      listOfBeers: []
    };
  }

  getAllBeers = () => {
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/all`)
      .then(responseFromApi => {
        this.setState({
          listOfBeers: responseFromApi.data
        });
      });
  };

  componentDidMount() {
    this.getAllBeers();
  }

  render() {
    console.log(this.state.listOfBeers);

    return (
      <div>
        {this.state.listOfBeers.map(beer => (
          <Link to={`/beers/${beer._id}`}>
          <ListGroup key={beer.id} className="beer-section">
            <div className="image-section">
              <ListGroupItem>

                <img src={beer.image_url} />
              </ListGroupItem>
            </div>
            <div className="description-section">
              <ListGroupItem>
                <h1>{beer.name}</h1>
              </ListGroupItem>
              <ListGroupItem>
                <h>{beer.tagline}</h>
              </ListGroupItem>
              <ListGroupItem>
                <p>Created by: {beer.name}</p>
              </ListGroupItem>
            </div>
          </ListGroup>
          </Link>
        ))}
      </div>
    );
  }
}
