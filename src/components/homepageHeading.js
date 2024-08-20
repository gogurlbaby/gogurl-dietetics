import React from 'react';
import { createMedia } from "@artsy/fresnel";
import PropTypes from 'prop-types';
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


const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})





const HomepageHeading = ({ mobile }) => {

   
    return (
        <Container text>
            <Header
                as='h1'
                content='Healthy Inside, Fresh Outside'
                inverted
                style={{
                    fontSize: mobile ? '2em' : '4em',
                    fontWeight: 'normal',
                    marginBottom: 0,
                    marginTop: mobile ? '1.5em' : '3em',
                }}
            />
            <Header
                as='h2'
                content='The best investment you can ever make is your own health.'
                inverted
                style={{
                    fontSize: mobile ? '1.5em' : '1.7em',
                    fontWeight: 'normal',
                    marginTop: mobile ? '0.5em' : '1.5em',
                }}
            />
            <Button primary size='huge'>
                Get Started
            <Icon name='right arrow' />
            </Button>
        </Container>
    )
}
HomepageHeading.propType = {
    mobile : PropTypes.bool
}

export default HomepageHeading;