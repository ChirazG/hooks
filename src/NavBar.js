import React, {useState} from 'react';
import './App.css';
import {Button, Form, Navbar, FormControl, Nav, Modal} from 'react-bootstrap';
import Search from "./Search";
import AddModal from "./AddModal";


const NavBar=({search, setRate, newRate,addMovie})=> {

return (
<>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Movies</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav>
    <Form inline>
      <Search search={search} setRate={setRate} newRate={newRate}></Search>
      <AddModal   addMovie={addMovie}/>
    </Form>
  </Navbar>
</>
  );
}

export default NavBar;