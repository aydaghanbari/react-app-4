import React from "react";
import './app.css';
import ReactDom from "react-dom";

function App () {
    const students = [{id:1, name:"Ayda"}, {id:2, name:"Hanieh"}, {id:3, name:"Parisa"},{id:4, name:"Neda"}];
    const student = students.map(s=> <p key={s.id}>{s.name}</p>);
    return (
      <div>
          <h1>studens:</h1>
          {student}</div>
    );
}









export default App;