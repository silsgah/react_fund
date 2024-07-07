import Avatar from "./Avatar";
import Gallery from "./Gallery";
import {Profile} from "./Gallery";
import PackingList from "./Demo";
import Brown from "./Brown";

//JSX SYNTAX-JAVASCRIPT AND HMTL
const today = new Date();

function formatDate(date){
  return new Intl.DateTimeFormat(
    'en-US',
    {weekday: 'long'}
  ).format(date);
}
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];
function List(){
  const listems = people.map((x, i) => 
   <li>
   {i}  {x}
  </li>
  );
  return <ul>{listems}</ul>
}
export default function App(props){
  const name = "Picture Gallery";
  const img = "https://i.imgur.com/1bX5QH6.jpg";
  const img2 = "https://i.imgur.com/1bX5QH7.jpg";
  
 return (
  <>
  <PackingList />
  <List />
  <Brown />
  {/* <Avatar {...props}/>
  <Avatar person={img2} size={100}/> */}
  {/* <h1>{name} of me for {formatDate(today)}</h1>
  <Gallery />
  <Profile /> */}
   </>
 )
}

