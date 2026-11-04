import { useState } from "react";

function FoodOrderForm() {
  //Define useStates for form inputs
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [order, setOrder] = useState('');

  //handleSubmit function
  function handleSubmit(e) {
    e.preventDefault();
    alert('Order Successful \nYour order was ' + order + '.\nPlease show your confirmation number for pickup.');
  };

  //Return form
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:
        <input id="name" 
          value={name} 
          name="name" 
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </label> 
      <br /> 
      <label htmlFor="phone">Phone:
        <input id="phone" 
          value={phone} 
          name="phone" 
          type="number"
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <br />   
      <label htmlFor="address">Address:
        <input id="address" 
          value={address} 
          name="address" 
          type="text"
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <br /> 
      <label htmlFor="order">Order:
        <input id="order" 
          value={order} 
          name="order" 
          type="text"
          onChange={(e) => setOrder(e.target.value)}
        />
      </label>
      <br /> 
    <button type="submit">Submit Order</button>  
    </form>
  )
}

export default FoodOrderForm;
