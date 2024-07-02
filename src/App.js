
import { useEffect, useState } from 'react';
import './App.css';
// import data from './data.json';

// eslint-disable-next-line
const Mycomponent = ({pokeman, onselect}) => (
  <tr>
    <td>{pokeman.name.english}</td>
    <td>{pokeman.type.join(",")}sample</td>
    <td>
      <button 
      onClick={()=>onselect(pokeman)}
      >Select</button>
    </td>
  </tr>
);
const PokemanInfo = ({name, base}) => (
  <div>
    <h1>{name.english}</h1>
    <table>
      {Object.keys(base).map((key)=>(
      <tr key={key}>
        <td>{key}</td>
        <td>{base[key]}</td>
      </tr>
      ))}
    </table>
  </div>
);
export default function App() {
  const [filter, filterSet] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [pokeman, Setpokeman] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:3000/client/data.json")
    .then((res) => res.json())
    .then((data) => Setpokeman(data))
  },[]);
  return (
    <div 
      style={{
      margin:"auto",
      paddingTop: '1rem',
      width:800
      }}>
       <h1 className='title'>Search</h1>
       <div
       style={{
        display: "grid",
        gridTemplateColumns: "70% 30%",
        gridColumnGap: "1rem"
       }}>
        <div>
        <input 
       onChange={(evt)=>{filterSet(evt.target.value)}}
       value={filter}
       />
       <table width="100%">
        <thead>
            <tr>
              <th>Bulbasaur</th>
              <th>Grass</th>
            </tr>
        </thead>
        <tbody>
          {pokeman
          .filter((datafil)=> datafil.name.english.toLowerCase().includes(filter.toLowerCase()))
          .slice(0,20).map((poke) => (
            <Mycomponent pokeman={poke} key={poke.id} onselect={(pokeman) =>setSelectedItem(pokeman)}/>
          ))}
        </tbody>
       </table>
        </div>
        {selectedItem  && <PokemanInfo {...selectedItem} />}
       </div>
    
    </div>
  );
}
