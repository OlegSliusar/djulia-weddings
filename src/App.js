import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1>Djulia Weddings</h1>
      </header>
    );
  }
}

class Slider extends React.Component {
  render() {
    const array = ['1', '2', '3', '4', '5', '6']
    const images_slide = array.map(name => {
      return(
        <Carousel.Item interval={1000} key={name}>
          <img src={require(`./images/${name}/1.jpg`).default} className="Img-slide" alt={"wedding dress "+name}/>
          <Carousel.Caption>
            <h3>Весільня сукня {name}</h3>
            <p>Опис</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
    return(
      <div>
        <Carousel variant="dark">
        {images_slide}
        </Carousel>
      </div>
    )
  }
}

class Gallery extends React.Component {
  render() {
    const array = ['1', '2', '3', '4', '5', '6']

    const images = array.map(name => {
      return <img key={name} src={require(`./images/${name}/1.jpg`).default} className="Img-gallery" alt={"wedding dress "+name}/>
    });

    return (
      <div>
        <Link to="/"><button>Список</button></Link>
        <div className="Gallery-header">
            <h2>Наша галерея</h2>
        </div>
        <div className="row-3">
          {images}
        </div>
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    const array = ['1', '2', '3', '4', '5', '6']
    const images = array.map(name => {
      return(
        <img src={require(`./images/${name}/1.jpg`).default} className="Img-list" alt={"wedding dress "+name}/>
      );
    });
    return (
      <div>
        <Link to="/gallery"><button>Галерея</button></Link>
        <div>
          <div className="List-header">
              <h2>Наш список</h2>
          </div>
          {images}
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <Router>
        <Switch>
          <Route path="/gallery">
              <Gallery />
          </Route>
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
