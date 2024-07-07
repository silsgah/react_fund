function Item({ name, isPacked }) {
    //Tenary operator condition = ? if false  :
    //and operator &&
    return (
        <li>
         {/* {isPacked ? name + '✔' : name} */}
         {name} {isPacked && '✔'}
        </li>
    )
}
  
  export default function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }
  