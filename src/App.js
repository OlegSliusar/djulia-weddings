import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
  render() {
    const array = ['1', '2', '3', '4', '5', '6']
    const images = array.map(name => {
      return <img key={name} src={require(`./images/${name}/1.jpg`).default} className="Img" className="Img-gallery" alt={"wedding dress "+name}/>
    });
    return (
      <div>
        {/* <Button view={this.state.view} handleClick={this.handleClick.bind(this)}/> */}
        <Link to="/list"><button>Список</button></Link>
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
      return <img key={name} src={require(`./images/${name}/1.jpg`).default} className="Img" className="Img-list" alt={"wedding dress "+name}/>
    });
    return (
      <div>
        {/* <Button view={this.state.view} handleClick={this.handleClick.bind(this)}/> */}
        <Link to="/gallery"><button>Галерея</button></Link>
        <div className="row">
          <div className="Gallery-header">
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
      <Router>
        <Switch>
          <Route path="/gallery">
              <Gallery />
          </Route>
          <Route path="/list">
            <List />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
