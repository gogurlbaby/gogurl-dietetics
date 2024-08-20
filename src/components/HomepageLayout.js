import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';
import yilmaz from '../images/yilmaz.jpg';
import ServicesCard from './servicesCard';
import dietitian from '../images/dietitian.jpg';
import Provenance from '../images/Provenance.jpg';
import Exercises from '../images/Exercises.jpg';
import Carousel from './carousel.js';
import Footer from './Footer.js';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Image,
    Segment,
} from 'semantic-ui-react';

const HomepageLayout = () => {
    const details = [{
        image: dietitian,
        content:"Consultation with Dietitian"
        },
        {    image: Exercises,
            content: "Fitness Exercises"
              

        },
        {    image: Provenance,
            content: 'Healthy Food Delivery',   
           
        }
       ]
    return (
        <ResponsiveContainer>
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                            Why GoGurl? 
                        </Header>
                            <p style={{ fontSize: '1.33em' }}>
                            Today, more than 95% of all chronic disease is caused by 
                            food choice, toxic food ingredients nutritional deficiences
                             and lack of physical exercise.

                            </p>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                FEEL GOOD!! LIVE LONGER!!
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                            With good guidance from professional dietitians 
                            its possible to live healthy and live longer!

                            </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Image bordered rounded size='large' src={yilmaz} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <Button size='huge' primary>Check Them Out</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            {/* <Segment style={{ padding: '0em' }} vertical>
                <Grid celled='internally' columns='equal' stackable>
                    <Grid.Row textAlign='center'>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                "What a Company"
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                "I shouldn't have gone with their competitor."
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                <Image avatar src='/images/avatar/large/nan.jpg' />
                                <b>Nan</b> Chief Fun Officer Acme Toys
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment> */}
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Container text>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                        
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                    We struggle with eating healthily, obesity, and access to good nutrition for everyone. 
                    But we have a great opportunity to get on the right side of this battle by beginning to 
                    think differently about the way that we eat and the way that we approach food
                    </p>
                    <Button as='a' size='large'>
                        Read More
                    </Button>

                    <Divider
                        as='h4'
                        className='header'
                        horizontal
                        style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                    >
                        <a href='/'>Case Studies</a>
                    </Divider>

                    <Header as='h3' style={{ fontSize: '2em' }}>
                    Invest in your Health
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                    The doctor of the future will no longer treat the human frame with drugs, 
                        but rather will cure and prevent disease with nutrition. 

                    </p>
                    <Button as='a' size='large'>
                        I'm Still Quite Interested
                    </Button>
                </Container>
                <Container style={{padding: "10vh", margin: "1px solid black"}}>
                    <Carousel/>
                </Container>
                <Segment vertical style={{marginTop: '10vh'}}>
                <Container >
                    <Divider
                        as='h4'
                        className='header'
                        horizontal
                        style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                    >
                         <a href='/'>Services</a>
                    </Divider>
                    <Grid container verticalAlign="middle" stackable >
                        <Grid.Row>
                            {details.map(({image, content}) => {
                                return <Grid.Column width={5}>
                                    <ServicesCard
                                    images = {image}
                                    content = {content}
                                    />
                                </Grid.Column> 
                            })}
                        </Grid.Row>
                    </Grid>
                </Container>

            </Segment>
            </Segment>
           <Footer />                 
           
        </ResponsiveContainer>
    )
}
export default HomepageLayout;