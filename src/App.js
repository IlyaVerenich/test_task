import { useState } from "react";
import "./App.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const [letter, setLetter] = useState(null)
  const getLetter = (value) => {
    setLetter(value);
  }
  return (
    <div className="App">
      <Header getLetter={(value) => getLetter(value)}/>
      <Content letter={letter}/>
      <Footer />
    </div>
  );
}

export default App;
