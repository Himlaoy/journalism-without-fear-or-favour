import React from 'react';
import head from '../../../public/logo.png'


const Header = () => {
    return (
        <div className='text-center mt-3'>
            <img src={head} alt="" />
            <p className=''>Journalism Without Fear or Favour</p>
            
        </div>
    );
};

export default Header;