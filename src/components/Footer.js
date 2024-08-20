import React from 'react';
import {
    Container,
    Grid,
    Header,
    List,
    Segment,
} from 'semantic-ui-react';

const Footer = () =>{
    return (
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
                <Container>
                    <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='GoGurl' />
                                <List link inverted>
                                    <List.Item as='a'>Services</List.Item>
                                    <List.Item as='a'>Contact</List.Item>
                                    <List.Item as='a'>Log In</List.Item>
                                    <List.Item as='a'>Sign Up</List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <Header inverted as='h4' content='Services' />
                                <List link inverted>
                                    <List.Item as='a'>Consultation With Dietitian</List.Item>
                                    <List.Item as='a'>Fitness Exercises</List.Item>
                                    <List.Item as='a'>Healthy Food</List.Item>
                                    {/* <List.Item as='a'>Favorite X-Men</List.Item> */}
                                </List>
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Header as='h4' inverted>
                                GoGurl Dietetics
                                </Header>
                                <p>
                                © 2021. All Rights Reserved | Powered by gogurl.com
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
    )
}
export default Footer;