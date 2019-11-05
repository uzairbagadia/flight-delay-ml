import React from 'react';
import {Menu} from 'semantic-ui-react';

import { Link} from '../routes'
//for margin-top style view video 161
export default () => {
    return (
        <Menu>
            <Link route="/">
                <a className="item">ATDIS</a>
            </Link>
            
            <Menu.Menu>
                <Link route="/">
                    <a className="item">Availabe Insurances</a>
                </Link>
                <Link route="/insurances/new">
                    <a className="item">New Insurance</a>
                </Link>
            
            </Menu.Menu>
        </Menu>
    )
}
