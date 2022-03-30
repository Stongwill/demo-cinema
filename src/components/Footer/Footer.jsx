import React from 'react';
import './footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__info">
                <h3 className="footer__date">
                    @ {new Date().getFullYear()} My demo-cinema 
                </h3>
            </div>
        </div>
    </footer>
  )
}
