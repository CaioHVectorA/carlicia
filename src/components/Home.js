import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import search from '../svgviewer-png-output.png'
const Division = styled.div`
display: block;
width: 100vw;
background-color: rgba(0,0,0,0.3);
height: 1px;
margin: 12px 0px;
`
const Home = () => {
  return (
    <div>
        <Header />
        <Division></Division>
        <div style={{display: 'flex',gap: '22px',padding: '0 20px',overflowX: 'auto',alignItems: 'center'}}>
          {/* fazer sistema de search */}
          <img style={{width: '32px',height: '32px'}} src={search} />
        {/* <svg xmlns="http://www.w3.org/2000/svg" style={{width: '32px'}} width="32" height="32" fill="000" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg> */}
          <p style={{whiteSpace: 'nowrap'}}>Kit verão</p>
          <p style={{whiteSpace: 'nowrap'}}>Bermudas</p>
          <p style={{whiteSpace: 'nowrap'}}>Homem</p>
          <p style={{whiteSpace: 'nowrap'}}>Mulher</p>
          <p style={{whiteSpace: 'nowrap'}}>Calças</p>
          <p style={{whiteSpace: 'nowrap'}}>Regatas</p>
        </div>
        <Division></Division>
    </div>
  )
}

export default Home