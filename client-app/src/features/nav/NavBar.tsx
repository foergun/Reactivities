import React from 'react'
import {Container, Menu } from 'semantic-ui-react';

interface IProps{
    openCreateForm : () => void;
}

const NavBar : React.FC<IProps> = ({openCreateForm}) => {
    return (
        <>
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="logo" style={{marginRight: 10}}/>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities'/>
                <Menu.Item name='video play'>
                    <button onClick={openCreateForm} className="ui positive button">
                        Create Activity
                    </button>
                </Menu.Item>
            </Container>
        </Menu>
        </>
    );
};

export default NavBar;