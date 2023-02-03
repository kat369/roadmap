import logo from "./logo.svg";
import "./App.css";
import Roadmap from "./Roadmap";
import { useState } from "react";

function App() {
  const data = [
    {
      topic: "Basics of HTML",
    },
    {
      topic: "Basics of HTML forms",
    },
    {
      topic: "Basics of HTML tags",
    },
    {
      topic: "Basics of CSS",
    },
    {
      topic: "Basics of CSS properties",
    },
    {
      topic: "Basics of CSS Boxmodel",
    },
    {
      topic: "Basics of CSS flex box",
    },
    {
      topic: "Basics of CSS grid system",
    },
    {
      topic: "Basics of Javascript functions",
    },
    {
      topic: "Basics of Javascript Rest API",
    },
    {
      topic: "Basics of Javascript promises",
    },
    {
      topic: "Basics of Javascript fetch",
    },
    {
      topic: "Basics of Javascript async&await",
    },
    {
      topic: "Basics of React",
    },
    {
      topic: "Basics of React Hooks",
    },
    {
      topic: "Basics of React components",
    },
    {
      topic: "Basics of React usestate",
    },
    {
      topic: "Basics of React useEffect",
    },
    {
      topic: "Basics of React useContext",
    },
    {
      topic: "Basics of React Redux",
    },
  ];

  const [content, setcontent] = useState("Click classes to view content");
  return (
    <div className="container card">
      <div className="row">
        <div className="col-8">
          <div>{content}</div>
        </div>
        <div className="col-4 content">
          {data.map((val, index) => {
            return <Roadmap val={val} index={index} setcontent={setcontent} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
