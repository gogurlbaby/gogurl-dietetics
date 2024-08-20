import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HomepageHeading from './homepageHeading';
import { Link } from 'react-router-dom';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react';
import {createMedia} from "@artsy/fresnel";
const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})

const MobileContainer = ({children}) => {
    const [sidebarOpened, setSidebarOpened] = useState();

    const handleSidebarHide = () => {
        setSidebarOpened({
            sidebarOpened: false
        })
    }
    const handleToggle = () => {
        setSidebarOpened({
            sidebarOpened: true
        })
    }
    
    return (
        <Media as={Sidebar.Pushable} at='mobile'>
            <Sidebar.Pushable>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    inverted
                    onHide={handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <Menu.Item as='a' active>
                        <h3>GoGurl Dietetics</h3>
                    </Menu.Item>
                    <Menu.Item as='a'>Home</Menu.Item>
                    <Menu.Item as='a'>Services</Menu.Item>
                    <Menu.Item as='a'>Contact</Menu.Item>
                    <Menu.Item as='a'><Link to = "/login" >Log In</Link></Menu.Item>
                    <Menu.Item as='a'><Link to = "/signup">Sign Up</Link></Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened}>
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: 350, padding: '1em 0em' }}
                        vertical
                    >
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item onClick={handleToggle}>
                                    <Icon name='sidebar' />
                                </Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted>
                                        Log in
                                    </Button>
                                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                                        Sign Up
                                    </Button>
                                </Menu.Item>
                            </Menu>
                        </Container>
                        <HomepageHeading mobile />
                    </Segment>

                    {children}
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Media>
    )
   
}
MobileContainer.propTypes = {
    children : PropTypes.node,
}
export default MobileContainer;
