import React, { useState } from "react";
import styled from "styled-components"
import Todoflix from "../img/todoflix.png"
import Portflow from "../img/portflow.png"
import Recipes from "../img/recipes.png"
import Cronometro from "../img/cronometro.png"
import Login from "../img/login.png"
import Adote from "../img/adote.png"

const Todo = styled.img`
height: 35vh;
width: 30vw;
`


const Caixa = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  padding: 45px;

`

export default function Projetos() {

    return (
            <Caixa>
                  <a href="https://todo-flix.netlify.app/"> <Todo src={Todoflix} /></a>
                  
                  <a href="https://todo-flix.netlify.app/"> <Todo src={Portflow} /></a>

                  <a href=""> <Todo src={Recipes} /></a>

                  <a href=""> <Todo src={Cronometro} /></a>

                  <a href=""> <Todo src={Login} /></a>

                  <a href=""> <Todo src={Adote} /></a>
               
            </Caixa>
      
                  
  
        
  );

    }
