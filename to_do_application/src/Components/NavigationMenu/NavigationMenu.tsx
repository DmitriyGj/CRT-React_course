import React from 'react';
import NavigationConstants from '../../constants/NavigationConstants';
import {Link} from 'react-router-dom'
import {LinkRenderProps} from '../../types/types';
import './NavigationMenu.css';

export const NavigationMenu = function NavigationMenu(){
    const {ConstantLinks} = NavigationConstants;
    return( <nav className='Navigation'>
                {ConstantLinks.map((link:LinkRenderProps)=>
                        <Link className='Nav-link' key={link.key} to = {link.body.to}>{link.body.value}</Link>
                    )}
             </nav>)

}