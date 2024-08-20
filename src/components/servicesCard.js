import React from 'react';
import {Card, Image} from 'semantic-ui-react'



const ServicesCard = ({images, content}) =>{
    return(
  <Card style={{boxShadow: 'none'}}>
    <Image src={images} wrapped ui={false}/>
    <Card.Content>
      <Card.Header>{content}</Card.Header>
      {/* <Card.Meta>Joined in 2016</Card.Meta> */}
      {/* <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description> */}
    </Card.Content>
  </Card>
)
}

export default ServicesCard;