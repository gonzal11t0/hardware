import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/menu.css';
import '../styles/menuResponsive.css'

const Header = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width:800px;
  height: 7vh;
  background-color: #0066d0;
  margin-left: auto;
  margin-right: auto;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding: 0px;
`;

const Li = styled.li`
  position: relative;
  padding: 10px 10px;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  &:hover {
    text-decoration: underline 2px;
    ul {
      display: block;
    }
  }
  &:hover > ul {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  color: #ffff;
  font-family: Helvetica;
  font-size: 0.9rem;
  text-decoration: none;
`;

const MenuVertical = styled.ul`
  position: absolute;
  display: none;
  list-style: none;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0;
  z-index: 1;
  margin-top: 11px;
  margin-left: -10px;
  transition: opacity 0.3s ease-in-out;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  grid-column: 1 / -1;
`;

const SubLi = styled.li`
  padding: 10px 1px 10px 10px;
  &:hover {
    background-color: red;
  }
`;



const Menu = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <Header role="navigation">
        <nav aria-label="Menu de la pagina con Home,Tecnologia,Notebook,Pcs,Celulares,Monitores,Camaras Digitales, Parlantes, SmartWatch">
          <Ul className="menu-horizontal">
            <Li>
              <StyledLink aria-controls="panel1-content" to={'/Home'}>Home</StyledLink>
            </Li>
            <Li>
              <StyledLink to={'/Tecnologia'}>Tecnologia</StyledLink>
              <MenuVertical>
                <SubLi>
                  <StyledLink aria-controls="panel2-content" to={'/Notebook'}>Notebook</StyledLink>
                </SubLi>
                <SubLi>
                  <StyledLink to={'/Pcs'}>Pcs</StyledLink>
                </SubLi>
                <SubLi>
                  <StyledLink to={'/Celulares'}>Celulares</StyledLink>
                </SubLi>
                <SubLi>
                  <StyledLink to={'/Monitores'}>Monitores</StyledLink>
                </SubLi>
                <SubLi>
                  <StyledLink aria-controls="panel3-content" to={'/CamarasDigitales'}>Camaras digitales</StyledLink>
                </SubLi>
                <SubLi>
                  <StyledLink aria-controls="panel4-content" to={'/Parlantes'}>Parlantes</StyledLink>
                </SubLi>
                <SubLi>
                  <StyledLink aria-controls="panel5-content" to={'/Smartwatch'}>SmartWatch</StyledLink>
                </SubLi>
              </MenuVertical>
            </Li>
            <Li>
              <StyledLink aria-controls="panel6-content" to={'/Componentes'}>Componentes</StyledLink>
              <MenuVertical >
                <SubLi>
                  <StyledLink aria-controls="panel7-content" to={'/Mother'}>Micros/Mother</StyledLink>
                </SubLi>
                <SubLi>
                  <StyledLink aria-controls="panel8-content" to={'/Pendrive'}>Pendrive/Tarjestas memoria</StyledLink>
                </SubLi>
                <SubLi>
                  <StyledLink aria-controls="panel9-content" to={'/Gabinetes'}>Gabinetes</StyledLink>
                </SubLi>
              </MenuVertical>
            </Li>
            <Li>
              <StyledLink aria-controls="panel11-content" to={'Perisfericos'}>Perisfericos</StyledLink>
              <MenuVertical>
                <SubLi>
                  <StyledLink aria-controls="panel12-content" to={'/MouseTeclados/Pad'}>Mouse/Teclados/Pad</StyledLink>
                </SubLi>
                <SubLi>
                  <StyledLink aria-controls="panel13-content" to={'/Audios'}>Audios</StyledLink>
                </SubLi>
                <SubLi>
                  <StyledLink aria-controls="panel14-content" to={'/Gaming'}>Gaming</StyledLink>
                </SubLi>
                <SubLi>
                  <StyledLink aria-controls="panel15-content" to={'/Energia'}>Energia/Fuentes</StyledLink>
                </SubLi>
                <SubLi>
                  <StyledLink aria-controls="panel16-content" to={'/Auriculares'}>Auriculares</StyledLink>
                </SubLi>
              </MenuVertical>
            </Li>
            <Li>
              <StyledLink aria-controls="panel17-content" to={'/Conectividad'}>Conectividad</StyledLink>
              <MenuVertical>
                <SubLi>
                  <StyledLink aria-controls="panel18-content" to={'/RedesInternet'}>Redes/Internet</StyledLink>
                </SubLi>
                <SubLi>
                  <StyledLink aria-controls="panel19-content" to={'/Interfaces'}>Interfaces</StyledLink>
                </SubLi>
                <SubLi>
                  <StyledLink aria-controls="panel20-content" to={'/Cables'}>Cables/Adaptadores</StyledLink>
                </SubLi>
              </MenuVertical>
            </Li>
          </Ul>
        </nav>
      </Header>
    </>
  );
};

export default Menu;

