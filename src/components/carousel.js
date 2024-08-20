import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBCarouselCaption
} from 'mdb-react-ui-kit';

import exercise from '../images/exercise.jpg';
import monika from '../images/monika.jpg';
import salad from '../images/salad.jpg'



const Carousel = () => {
    return (
        <MDBCarousel showIndicators showControls fade style={{marginTop: "10vh", mariginBottom:" 10vh"}}>
                <MDBCarouselItem itemId={0}>
                    <img src={exercise} style={{height: '100vh'}} className='d-block w-100' alt="" />
                    <MDBCarouselCaption>
                        <h4>fitness exercise</h4>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={1}>
                    <img src={monika} style={{height: '100vh'}} className='d-block w-100' alt="" />
                    <MDBCarouselCaption>
                        <h4>hello, there</h4>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2}>
                    <img src={salad} style={{height: '100vh'}}  className='d-block w-100'  alt=""/>
                    <MDBCarouselCaption>
                        <h4>healthy food</h4>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
        </MDBCarousel>
    )
}
export default Carousel;