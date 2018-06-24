import React from 'react';
import {Link} from 'react-router-dom'



export default function Navbar({addresses}) {
    return <nav className="links">
        {
            addresses.map(({pathName, uri}, i) => {
                const link = `/${pathName}`
                return <Link key={i} to={uri}>{pathName}</Link>
            })
        }
    </nav>
}