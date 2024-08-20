import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'


const Dashboard = () => {
    const [activeItem, setActiveItem] = useState()
    
    const handleItemClick = (e,{name}) =>{
        setActiveItem({activeItem: name})
    }
    
    return (
        <Menu pointing vertical inverted >
            <Menu.Item
            name='home'
            active={{activeItem} === 'home'}
            onClick={handleItemClick}
            />
            <Menu.Item
            name='messages'
            active={{activeItem} === 'messages'}
            onClick={handleItemClick}
            />
            <Menu.Item
            name='friends'
            active={{activeItem} === 'friends'}
            onClick={handleItemClick}
            />
      </Menu>
    )
}

export default Dashboard;