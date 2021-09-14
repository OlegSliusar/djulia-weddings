import './App.css';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <h1>Djulia Weddings</h1>
      </header>
    );
  }
}

function Button(props) {
  return(
      <button>
        {props.value}
      </button>
  );
}

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    // const value = "no value";
    this.state = {
      view: "no",
    };

    if (props.value === 1) {
      this.state.view = 'Grid';
    } else {
      this.state.view = 'List';
    }

    // this.setState((state, props) => ({
    //   value: props.value
    // }));
  }

  render() {
    const array = ['1', '2', '3', '4', '5', '6']
    const images = array.map(name => {
      return <img key={name} src={require(`./images/${name}/1.jpg`).default} className="Img-responsive" alt={"wedding dress "+name}/>
    });
    // console.log(images[0]);
    return (
      <div className="container">
        <Button value={this.state.view}/>
        <div className="row">
          <div className="Gallery-header">
              <h2>Наша галерея</h2>
          </div>
          <div className="Gallery">
            { images }
          </div>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Header />
      <Gallery value={1}/>
    </div>
  );
}

export default App;
