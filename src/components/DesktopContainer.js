import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Button,
    Container,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react';
import { createMedia } from "@artsy/fresnel";
import HomepageHeading from './homepageHeading';
// import vitali from '../images/vitali.jpg';


const { Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})



const DesktopContainer = ({ children }) => {

    const [fixed, setShow] = useState()

    const hideFixedMenu = () => {
        setShow({
            fixed: false
        })
    }
    const showFixedMenu = () => {
        setShow(
            {
                fixed: true
            }
        )
    }

    return (
        <Media greaterThan='mobile'>
            <Visibility
                once={false}
                onBottomPassed={showFixedMenu}
                onBottomPassedReverse={hideFixedMenu}
                >
                <Segment
                    inverted
                    textAlign='center'
                    style={{ minHeight: 700, padding: '1em 0em' }}
                    vertical
                    // style={{backgroundImage: vitali}}
                    >
                    <Menu
                        fixed={fixed ? 'top' : null}
                        inverted={!fixed}
                        pointing={!fixed}
                        secondary={!fixed}
                        size='large'
                        >
                        <Container>
                            <Menu.Item as='a' active>
                               <h3>GoGurl Dietetics</h3> 
                            </Menu.Item>
                            <Menu.Item as={Link} to="/dashboard">Home</Menu.Item>
                            <Menu.Item as='a'>Services</Menu.Item>
                            <Menu.Item as='a'>Contact</Menu.Item>
                            <Menu.Item position='right'>
                                <Button as='a' inverted={!fixed}>
                                <Link to = "/login" >Log in</Link>
                                </Button>
                                <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                                <Link to = "/signup">Sign Up</Link>
                                </Button>
                            </Menu.Item>
                        </Container>
                    </Menu>
                    <HomepageHeading />
                </Segment>
            </Visibility>

            {children}
        </Media>
    )
}
export default DesktopContainer;