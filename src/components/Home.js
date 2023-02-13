import React, { useContext, useState } from 'react'
import Header from './Header'
import styled from 'styled-components'
import search from '../svgviewer-png-output.png'
import UserContext from '../UserContext'
const Division = styled.div`
display: block;
width: 100vw;
background-color: rgba(0,0,0,0.3);
height: 1px;
margin: 12px 0px;
`
const Input = styled.input`
border-radius: 18px;
padding: 12px 10px;
background-color: #fff;
width: calc(100% - 20px);
border: 0px solid rgba(0,0,0,0.2);
&:active,&:focus-visible,&:focus {
    border: none;
    outline: none;  
    background-color: rgba(231, 231, 231, 1);
}`
const Home = () => {
  const { mobile } = useContext(UserContext)
  const [filtro,setFiltro] = useState(false)
  return (
    <div>
        <Header />
        <Division></Division>
        <div style={{display: 'flex',gap: '22px',padding: '0 20px',overflowX: 'auto',alignItems: 'center',height: '59px'}}>
          {/* fazer sistema de search */}
          <img onClick={() => setFiltro(!filtro)} style={{width: '32px',height: '32px'}} src={search} />
        {/* <svg xmlns="http://www.w3.org/2000/svg" style={{width: '32px'}} width="32" height="32" fill="000" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg> */}
          {!filtro && <div style={{display: 'flex',gap: '22px'}}>
          <p style={{whiteSpace: 'nowrap',cursor: 'pointer'}}>Kit verão</p>
          <p style={{whiteSpace: 'nowrap',cursor: 'pointer'}}>Bermudas</p>
          <p style={{whiteSpace: 'nowrap',cursor: 'pointer'}}>Homem</p>
          <p style={{whiteSpace: 'nowrap',cursor: 'pointer'}}>Mulher</p>
          <p style={{whiteSpace: 'nowrap',cursor: 'pointer'}}>Calças</p>
          <p style={{whiteSpace: 'nowrap',cursor: 'pointer'}}>Regatas</p>
            </div>}
            {filtro && <Input></Input>}
        </div>
        <Division></Division>
        {/* parte dos Resultados aki */}


    </div>
  )
}

export default Home