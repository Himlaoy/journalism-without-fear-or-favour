import React from 'react';
import head from '/logo.png'
import moment from 'moment';


const Header = () => {
    return (
        <div className='text-center mt-3'>
            <img src={head} alt="" />
            <p className=''>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>

        </div>
    );
};

export default Header;