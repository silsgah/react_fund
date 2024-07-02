import { useEffect, useState } from 'react';
import './App.css';
//import data from './data/data.json';

function App() {
 const [pokeman, Setpokem] = useState([]);
 
  useEffect(() =>{
   fetch("http://localhost:3000/data.json")
   .then((res) => res.json())
   .then((data) => Setpokem(data));
  },[]);
  return (
    <div style={{
      margin:"auto",
      paddgingTop: '1rem',
      width:800
    }}>
     <table width="100%">
      <thead>
        <tr>
          <th>Column</th>
          <th>Column</th>
        </tr>
      </thead>
      <tbody>
        {pokeman.map((indiviArray) =>(
          <tr>
          <td>{indiviArray.name.english}</td>
          <td>{indiviArray.type.join(",")}</td>
        </tr>
        ))}
      </tbody>
     </table>
    </div>
  );
}

export default App;
