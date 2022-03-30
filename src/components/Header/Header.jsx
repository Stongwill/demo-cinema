import React from 'react';
import { Link } from 'react-router-dom';
import "./header.scss";

export default function Header() {
  return (
    <header className='header'> 
    <div className="container">
        <div className="header__top">
    <Link to="/" >
    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/8de77720661659.562ef0a17f6b2.jpg" alt="logo-img" className="header__logo" width={130} height={115}/>
     </Link>
        <Link to="#" className='header-link'>Popular</Link>
       
        </div>
    </div>
    </header>
  )
}
