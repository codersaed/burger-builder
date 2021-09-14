
import React from 'react';

const Footer = () => {
    return (
        <div className="text-center py-1" style={{backgroundColor: '#D70F64'}}>
            <p className="font-weight-bold mt-3 text-white">copyright © {new Date().getFullYear()} <span className="text-warning">Burger Builder</span> right reserved. </p>
        </div>
    );
};

export default Footer;