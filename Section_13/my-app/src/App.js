import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";

class App extends React.Component {
  // state = {
  //   age: "",
  //   // details: "",
  //   // emailError: "",
  //   // passError: "",

  //   // email: "",
  //   // city: "",
  // };

  // Changedata = (e) => {
  //   let val = e.target.name; // Username , Phonenumber , Email, City
  //   let valueku = e.target.value; // Getting Value
  //   this.setState({ [val]: valueku }); //Value Set on the state
  // };

  // formSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(this.state.username);
  // };

  // state = {
  //   name: "",
  // };

  // Changedata = (e) => {
  //   let val = e.target.value;
  //   this.setState({ name: val });
  // };

  // formSubmit = (e) => {
  //   e.preventDefault();
  //   // if (this.validate()) {
  //   //   alert("Form Submit Done");
  //   // }
  //   // console.log(this.state.email, this.state.password);
  // };

  // validate() {
  //   if (!this.state.email > 0 && !this.state.password > 0) {
  //     this.setState({ emailError: "Email and Password Required" });
  //   } else if (!this.state.email > 0) {
  //     this.setState({ emailError: "Email Required" });
  //   } else if (!this.state.password > 0) {
  //     this.setState({ passError: "Password Required" });
  //   } else {
  //     return true;
  //   }
  // }

  render() {
    // const names = ["AA", "BB", "CC", "DD", "EE"];
    // const name = [
    //   { name: "Sulthan", age: 17, grade: 4.0 },
    //   { name: "Sabilillah", age: 27, grade: 3.0 },
    //   { name: "Hehooh", age: 37, grade: 3.5 },
    // ];
    // const items = name.map((item, idx) => {
    //   return (
    //     <li class="list-item" key={idx}>
    //       {/* {idx}-{item} */}
    //       Name : {item.name} , Age : {item.age}, Grade : {item.grade}
    //       <button class="btn btn-sm btn-info">Edit</button>{" "}
    //       <button class="btn btn-sm btn-danger">Delete</button>
    //     </li>
    //   );
    // });

    return (
      <div className="App">
        <h1> This Us Our Home Component</h1>
        <h2>awawas dasd cccccasd</h2>
        {/* <ul class="list">{items}</ul> */}

        {/* <h1>{this.state.email} </h1>
        <h1>{this.state.password} </h1> */}
        {/* <h1>{this.state.email} </h1>
        <h1>{this.state.city} </h1> */}

        {/* <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb> */}
        {/* <Button variant="primary">Primary</Button>{" "}
          <Button variant="secondary">Secondary</Button>{" "}
          <Button variant="success">Success</Button>{" "}
          <Button variant="warning">Warning</Button>{" "}
          <Button variant="danger">Danger</Button>{" "}
          <Button variant="info">Info</Button>{" "}
          <Button variant="light">Light</Button>{" "}
          <Button variant="dark">Dark</Button>{" "}
          <Button variant="link">Link</Button> */}
        {/* <form onSubmit={this.formSubmit}>
            <div class="form-group" style={{ marginLeft: 200 }}>
              <label>Your Age : </label>
              <select
                onChange={(event) => {
                  this.setState({ age: event.target.value });
                }}
              >
                <option value="" selected disabled>
                  Select Your Age{" "}
                </option>
                <option value="15 - 20">15 - 20</option>
                <option value="21 - 30">21 - 30</option>
                <option value="31 - 40">31 - 40</option>
              </select>
              <h6>My Age : {this.state.age}</h6>
              {/* <br></br>
              <input
                type="email"
                name="email"
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
              ></input>
              <br></br> */}
        {/* <strong style={{ color: "Purple" }}>
                {this.state.emailError}
              </strong> */}
        {/* <br></br>
              <label>Details : </label>
              <br></br>
              <textarea
                onChange={(event) => {
                  this.setState({ details: event.target.value });
                }}
              >
                Write on Here
              </textarea>
              <h6>{this.state.details}</h6> */}
        {/* <input
                type="password"
                name="password"
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
              ></input>
              <br></br>
              <strong style={{ color: "Purple" }}>
                {this.state.emailError}
              </strong> */}
        {/* <br></br> */}
        {/* <input
                type="text"
                name="email"
                onChange={this.Changedata}
              ></input>
              <br></br>
              <input type="text" name="city" onChange={this.Changedata}></input>
              <br></br> */}
        {/* <button type="submit">Submit</button> */}
        {/* </div>
          </form> */}
      </div>
    );
  }
}
// import logo from "./logo.svg";
// import "./App.css";
// import Learn from "./components/Hello";
// import Belajar from "./components/Belajar";
// import Check from "./components/Check";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Belajar></Belajar>
//       </header>
//     </div>
//   );
// }

export default App;
