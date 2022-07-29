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
    background-color: #696969;}
  
  `

  const Inicio = styled.div`
  background-color: #D3D3D3;
  height: 8vh;
  width: 100vw;
  list-style: none;
  display:flex;
  justify-content: space-between;
  aling-items: center;  
  margin-top: 0vh;
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
  

`
const Titulo = styled.h1`
width: 10vw;
margin-top: 1vh;
margin-left: 2vw;
color: black;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 23px;  

`;



export default function App() {



  return (
    <Router>
  
      <GlobalStyle/>
       
        <Inicio>
          <Titulo>Jefferson</Titulo>
          <Menu>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/projetos">Projetos</StyledLink> 
          </Menu>
        </Inicio>
      
      

      <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/projetos" element={<Projetos/>}/>
      </Routes>

    </Router>

  );
}

  



