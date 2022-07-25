import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import Projetos from "./pages/Projetos.js"
import Home from "./pages/Home.js"




const GlobalStyle = createGlobalStyle`
*
{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }
  body{
    display:flex;
    justify-content:center;
    background-color: #1C1C1C;}
  
  `

  const Inicio = styled.div`
  height: 8vh;
  width: 95vw;
  list-style: none;
  display:flex;
  justify-content: space-between;
  aling-items: center;  
  margin-top: 1vh;
  color: #ffff;
  @media(max-width: 630px){
    
  }
  `
const Menu = styled.ul`
  width: 30vw;
  align-items: center;
  display:flex;
  justify-content: space-evenly;
  font-family: "Lucida Console", "Courier New", monospace;
  color: blue;

`
const Titulo = styled.h1`
font-family: "Lucida Console", "Courier New", monospace;
width: 10vw;
margin-top: 2vh;
`





export default function App() {



  return (
    <Router>
  
      <GlobalStyle/>
       
        <Inicio>
          <Titulo>Meu Blog</Titulo>
          <Menu>
            <Link to="/">Home</Link>
            <Link to="/projetos">Projetos</Link> 
          </Menu>
        </Inicio>
      
      

      <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/projetos" element={<Projetos/>}/>
      </Routes>

    </Router>

  );
}

  



