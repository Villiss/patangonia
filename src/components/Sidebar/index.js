import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarLink, SidebarRoute, SidebarWrapper, SidebarMenu } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='cojemate' onClick={toggle}>
                        Čo je mate
                    </SidebarLink>
                    <SidebarLink to='zcohojemate' onClick={toggle}>
                        Z čoho je mate
                    </SidebarLink>
                    <SidebarLink to='priprava' onClick={toggle}>
                        Príprava
                    </SidebarLink>
                    <SidebarLink to='inesposoby' onClick={toggle}>
                        Iné spôsoby
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
