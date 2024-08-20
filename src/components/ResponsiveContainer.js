import React from 'react';
import {createMedia} from "@artsy/fresnel";
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';
import PropTypes from 'prop-types';
const { MediaContextProvider, Media } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})


const ResponsiveContainer = ({children}) => {
   
    return (
        <MediaContextProvider>
            <Media at='computer'>
                <DesktopContainer>{children}</DesktopContainer>
            </Media>
            <Media at='mobile'>
                <MobileContainer>{children}</MobileContainer>
            </Media>
        </MediaContextProvider>
    )
}
ResponsiveContainer.propTypes = {
    children: PropTypes.node,
  }

export default ResponsiveContainer;