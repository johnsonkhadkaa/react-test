import React from 'react'
import {Navbar } from 'react-bootstrap'

const Headers = () => {
  return (
    <header>
        <Navbar expand='lg' collapseOnSelect>
            <container>
                <Navbar.Brand href ='/'  Eloksewa Nepal></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'/>
            </container>
        </Navbar>
    </header>
  )
}

export default Headers