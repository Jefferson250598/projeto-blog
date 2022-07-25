import React, { useState } from "react";
import styled from "styled-components"

const Link = styled.div`
text-decoration:none;
color: red;
`

export default function Projetos() {

    return (
<div>
    <ul>
      <Link><a href="https://todo-flix.netlify.app/">Todoflix</a></Link>
      <Link><a href="https://jefferson250598.github.io/Portflow/">Portflow</a></Link>
     
    </ul>
</div>

  
        
  );

    }
