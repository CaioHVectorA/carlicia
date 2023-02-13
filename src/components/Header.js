import React, { useContext } from 'react'
import useMobile from '../Hooks/useMobile'
import UserContext from '../UserContext'
import styled from 'styled-components'
const Header = () => {
  const Division = styled.div`
  display: block;
  width: 80%;
  height: 2px;
  background-color: rgba(0,0,0,0.2);
  `
  const { mobile } = useContext(UserContext)
  const MenuItem = styled.a`
  font-family: 'Bitter';
  font-size: 22px;
  transition: 300ms;
  position: relative;
  top: 8px;
  &:hover {
    transform: scale(1.1);
    font-weight: bold;
    cursor: pointer;
  }
  `
  const Logo = styled.a`
  font-family: 'Dancing Script';
  font-size: 32px;
  transition: 300ms;
  &:hover {
    transform: scale(1.45);
    cursor: pointer;
  }
  `
  const [menu,setMenu] = React.useState(false)
  return (
    <div style={{width: '100vw'}}>
    {mobile && <div>
      
      </div>}
      {!mobile && <nav style={{display: 'flex',justifyContent: 'space-between',padding: '12px 32px'}} onClick={() => console.log(mobile)}>
        <MenuItem>Loja</MenuItem>
        <MenuItem>Sobre nós</MenuItem>
        <Logo>Carlicia</Logo>
        <MenuItem>Suporte</MenuItem>
        <MenuItem>Contato</MenuItem>
        </nav>}
        {mobile && <nav style={{}}>
           <ul style={{display: 'flex',width: 'inherit',justifyContent: 'space-between',margin: '0 auto',padding: '12px 24px'}}>
            <li><svg onClick={() => setMenu(!menu)} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"/></svg></li>
            <li><Logo>Carlicia</Logo></li>
            <li><svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M9 44q-1.2 0-2.1-.9Q6 42.2 6 41V14.5q0-1.2.9-2.1.9-.9 2.1-.9h5.5q0-3.95 2.65-6.725Q19.8 2 23.75 2q3.95 0 6.85 2.775 2.9 2.775 2.9 6.725H39q1.2 0 2.1.9.9.9.9 2.1V41q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V14.5H9V41Zm15-14.5q3.95 0 6.85-2.9 2.9-2.9 2.9-6.85h-3q0 2.75-2 4.75t-4.75 2q-2.75 0-4.75-2t-2-4.75h-3q0 3.95 2.9 6.85 2.9 2.9 6.85 2.9Zm-6.5-15h13q0-2.75-1.875-4.625T24 5q-2.75 0-4.625 1.875T17.5 11.5ZM9 41V14.5 41Z"/></svg></li>
           </ul>
          </nav>}
          {menu && <div style={{position: 'absolute',width: 'calc(100vw - 48px)',height: '100%',backgroundColor: '#EBB9DF',top: '0px',padding: '12px 24px'}}>
          <svg onClick={() => setMenu(!menu)} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"/></svg>
            <div style={{display: 'flex',flexDirection: 'column',gap: '16px'}}>
              <MenuItem>Suporte</MenuItem>
              <Division></Division>
              <MenuItem>Contato</MenuItem>
              <Division></Division>
              <MenuItem>Sobre Carlicia</MenuItem>
              <Division></Division>
            </div>
            </div>}
      </div>

  )
}

export default Header