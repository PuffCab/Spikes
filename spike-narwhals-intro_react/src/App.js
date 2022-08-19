
import './App.css';
import Component from './Component';
import Contact from './Contact';
import Home from './home/Home';
import Navbar from './Navbar';


function App() {

const myStyle = {
  fontSize : "50px",
  backgroundColor: "yellow"
}

  return (
    <div className="App"  >
      <h2 className="new-style">Hello React World</h2>
      <p style={{backgroundColor: "blue", fontWeight:"bold"}}>my inline style</p>
      <p style={myStyle}>with styling object</p>

     
      {/* <hr />
      <Home/>
      <hr />
      <Contact /> */}

      <Component />
    </div>
  );
}

export default App;
