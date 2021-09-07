// import logo from './logo.svg';
import './App.css';

function Gallery() {
  const array = ['1', '2', '3', '4', '5', '6']
  const images = array.map(name => {
    return <img key={name} src={require(`./images/${name}/1.jpg`).default} className="Img-responsive" alt={"wedding dress "+name}/>
  });
  console.log(images[0]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <h2>Наша галерея</h2>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          { images }
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Djulia Weddings</h1>
      </header>
      <Gallery />
    </div>
  );
}

export default App;
