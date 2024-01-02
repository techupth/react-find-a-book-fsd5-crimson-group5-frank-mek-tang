import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState([]);
  const [inputText, setInputText] = useState("react");

  const inputMessage = (event) => {
    const result = event.target.vale;
    setInputText(result);
  };

  const getText = async (inputText) => {
    const result = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${inputText}`
    );
    // console.log(result);
    setText(result.data.items);
  };
  console.log(text);

  useEffect(() => {
    getText(inputText);
  }, [inputText]);

  return (
    <div className="App">
      <h1>Find a Book</h1>
      <input type="text" onChange={inputMessage} value={inputText} />
      <div>
        {text.map((item, index) => {
          return (
            <div key={index}>
              <ul>
                <li>{item.volumeInfo.title}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
