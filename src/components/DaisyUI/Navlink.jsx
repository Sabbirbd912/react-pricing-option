import React from 'react';

const Navlink = ({route}) => {
    return (
        
            <li>
                <a href={route.path}>{route.name}</a>
            </li>
    );
};

export default Navlink;