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

// const photosUrl = 'https://jsonplaceholder.typicode.com/photos'

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1>Djulia Weddings</h1>
      </header>
    );
  }
}

class Gallery extends React.Component {
  state = {
    image_urls: [],
  }

  render() {
    // axios.get(photosUrl).then((response) => {
    //   const urls = response.data.slice(0,10).map(x => x.url)
    //   this.setState({image_urls: urls})
    // });

    const array = ['1', '2', '3', '4', '5', '6']
    // const images = this.state.image_urls.map(url => {
    //   return <img key={url} src={url} className="Img" className="Img-gallery" alt={url}/>
    // });
    const images = array.map(name => {
      return <img key={name} src={require(`./images/${name}/1.jpg`).default} className="Img" className="Img-gallery" alt={"wedding dress "+name}/>
    });
    return (
      <div>
        {/* <Button view={this.state.view} handleClick={this.handleClick.bind(this)}/> */}
        <Link to="/"><button>Список</button></Link>
        <div className="row">
          <div className="Gallery-header">
              <h2>Наша галерея</h2>
          </div>
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
        <Carousel.Item interval={1000} key={name}>
          <img src={require(`./images/${name}/1.jpg`).default} className="Img-list" alt={"wedding dress "+name}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
    return (
      <div style={{ display: 'block', width: 700, padding: 30 }}>
        {/* <Button view={this.state.view} handleClick={this.handleClick.bind(this)}/> */}
        <Link to="/gallery"><button>Галерея</button></Link>
        <div className="row">
          <div className="Gallery-header">
              <h2>Наш список</h2>
          </div>
          <Carousel>
            {images}
          </Carousel>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Header />
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
