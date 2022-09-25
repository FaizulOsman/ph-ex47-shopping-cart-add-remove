import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { addToDb, deleteFormDb, deleteShoppingCart, removeFromDb, removeToDb } from './utilities/fakedb';


function App() {
  const [state, setstate] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setstate(data))
  }, [])

  return (
    <div className="App" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '10px' }}>
      {
        state.map(data => <DisplayData data={data} key={data.id}></DisplayData>)
      }
    </div>
  );
}

const addToCart = (data) => {
  addToDb(data)
}
const removeFromCart = (data) => {
  removeFromDb(data)
}
const deleteCart = (data) => {
  deleteFormDb(data)
}
const deleteAll = () => {
  deleteShoppingCart()
}
function DisplayData({ data }) {
  return (
    <div style={{ border: '2px solid tomato', paddingBottom: '10px' }}>
      <h5>Id: {data.id}</h5>
      <h4>Name: {data.name}</h4>
      <h6>Email: {data.email}</h6>
      <button onClick={() => addToCart(data)}>Add to cart</button>
      <button onClick={() => removeFromCart(data)}>Remove from cart</button>
      <button onClick={() => deleteCart(data)}>Delete</button>
      <button onClick={() => deleteAll(data)}>Delete all</button>
    </div>
  )
}




export default App;
