import React, { useState } from "react"
import styled from "styled-components"
import Imagem from "../img/foto.jpeg"
import Github from "../img/git.png"
import Linkedin from "../img/link.png"
import Instagram from "../img/insta.png"  


const Sobre = styled.div`
margin-top: 31vh;
margin-left: 6vw;
width: 80vw;
height:42vh;
display:flex;
aling-items:center;
justify content: space-between;

`

const Foto = styled.img`
border-radius: 50%;
height: 350px;
width: 350px;

`

const Nome = styled.h3`
margin-top: 3vh;
width: 88vw;
height: 30vh;
align-items: center;
display:flex;
justify-content: space-evenly;
font-size: 30px;
list-style:none;
color: #EEE5DE;
padding-left: 35vw;
`
const Social = styled.div`
margin-top: 25vh;
display: flex;
justify-content: space-evenly;
flex-direction: column;

`

export default function App() {



    return (

        <>
        <Sobre>
        <Foto src={Imagem}/>
        <Nome>Jefferson Amarante Geraldelli</Nome>
        </Sobre>


        <Social>
            <div>
           <a href="https://www.w3schools.com"> < img src={Github} /></a>
          </div>

          <div>
            <img src={Linkedin} />
          </div>

          <div>
            < img src={Instagram} />
            </div>
          </Social>

        </>

    );
}