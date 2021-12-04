import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavItem, NavLinks, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'
import { FaBars } from 'react-icons/fa'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>patangonia</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='cojemate'>Čo je mate</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='zcohojemate'>Z čoho je mate</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='priprava'>Príprava</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='inesposoby'>Iné spôsoby</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
