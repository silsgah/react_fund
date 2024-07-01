
import './App.css';
import data from './data.json';

function App() {
  return (
    <div 
      style={{
      margin:"auto",
      paddingTop: '1rem',
      width:800
      }}>
       <h1 className='title'>Search</h1>
       <table width="100%">
        <thead>
            <tr>
              <th>Bulbasaur</th>
              <th>Grass</th>
            </tr>
        </thead>
        <tbody>
          {data.slice(0,20).map((poke) =>(
            <tr keys={poke.id}>
            <td>{poke.name.english}</td>
            <td>{poke.type.join(",")}sample</td>
          </tr>

          ))}
        </tbody>
       </table>
    </div>
  );
}

export default App;
