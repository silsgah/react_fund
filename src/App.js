
import './App.css';
import data from './data.json';

// eslint-disable-next-line
const Mycomponent = ({pokeman}) => (
  <tr>
    <td>{pokeman.name.english}</td>
    <td>{pokeman.type.join(",")}sample</td>
  </tr>
);
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
          {data.slice(0,20).map((poke) => (
            <Mycomponent pokeman={poke} key={poke.id} />
          ))}
        </tbody>
       </table>
    </div>
  );
}

export default App;
