import { useState } from 'react';
import './App.css';

function App() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    message: ""
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value })
  }

  const postData = async (e) => {
    e.preventDefault();


    const { name, email, mobile, address, message } = user;
    if (name && email && mobile && address && message) {
      const res = await fetch("https://react-form-d0741-default-rtdb.firebaseio.com/login-page-authorization.json", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          mobile,
          address,
          message,
        })
      })
      if (res) {
        setUser({
          name: "",
          email: "",
          mobile: "",
          address: "",
          message: ""
        });
        alert("Data Stored Successfuly")
      }
    }
    else {
      alert("plaese fill the Data")
    }
  } 
  


  // console.log(user);
  return (
    <div className="App">
      <div className="Contact__Us">
        <div className="body">
          <h2>CONTACT US</h2>

          {/* Form Start from  here */}

          <form action="" method="POST" className="body">
            <label>Your Name Here</label>
            <input
              autoComplete="off"
              type="text"
              name="name"
              value={user.name}
              onChange={getUserData}
              required
            />
            <label >Email Here</label>
            <input
              autoComplete="off"
              type="text"
              name="email"
              value={user.email}
              onChange={getUserData}
              required
            /><br /><br />
            <label >Enter Mobile No.</label>
            <input
              autoComplete="off"
              type="number"
              name="mobile"
              value={user.mobile}
              onChange={getUserData}
              required
            />
            <label >Address Here </label>
            <input
              autoComplete="off"
              type="text"
              name="address"
              value={user.address}
              onChange={getUserData}
              required
            /><br /><br />
            <label>Messages &nbsp;</label>
            <textarea
              name="message"
              value={user.message}
              required
              onChange={getUserData}>
            </textarea><br />
            <button className="btn" onClick={postData}>Submit</button>
          </form>

        </div>
        <p>For any Question Contact our 24/7 call center<a href="/" >+91123455678</a></p>
      </div>
    </div>
  );
}

export default App;
