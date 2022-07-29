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
font-size: 21px;
list-style:none;
color: #EEE5DE;
padding-left: 35vw;
`
const Social = styled.div`
background-color: #D3D3D3;
margin-top: 25vh;
display: flex;
justify-content: space-evenly;
width: 100vw;
height: 12,5vh;

`

export default function App() {



    return (

        <>
        <Sobre>
        <Foto src={Imagem}/>
        <Nome>Olá meu nome é Jefferson Aamrante Geraldelli, tenho 24  anos, sou formado em ciencias da computação, atualmente faço um curso de desenvolvedor front end</Nome>
        </Sobre>


        <Social>
            <div>
           <a href="https://github.com/Jefferson250598"> < img src={Github} /></a>
          </div>

          <div>
           <a href="https://www.linkedin.com/in/jefferson-amarante-a376561a1/"> <img src={Linkedin} /></a>
          </div>

          <div>
            <a href="https://www.instagram.com/jeffersongeraldelli/"> <img src={Instagram} /></a>
            </div>
          </Social>

        </>

    );
}