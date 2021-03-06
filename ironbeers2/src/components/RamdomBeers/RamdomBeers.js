import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from "react-bootstrap";
import axios from "axios";

export default class RamdomBeers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beer: '',
    };
  }

  componentWillMount() {
    this.getRandomBeer();
  }

  getRandomBeer = () => {
    axios
      .get(`https://ironbeer-api.herokuapp.com/beers/random`)
      .then(responseFromApi => {
        const beer = responseFromApi.data[0];
        this.setState({ beer });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {

    return (
      <ListGroup>
        <ListGroupItem>
          <img src={this.state.beer.image_url} />
        </ListGroupItem>
        <ListGroupItem>
          <div className="title-section">
            <div className="first-title">
              <h1>{this.state.beer.name}</h1>
              <p>{this.state.beer.tagline}</p>
            </div>
            <div className="second-title">
              <p>{this.state.beer.attenuation_level}</p>
              <p>{this.state.beer.first_brewed}</p>
            </div>
          </div>
        </ListGroupItem>
        <ListGroupItem>
          <div className='description-beer'>
            <p>{this.state.beer.description}</p>
          </div>
          <p>{this.state.beer.contributed_by}</p>
        </ListGroupItem>
      </ListGroup>
    )
  }
}
