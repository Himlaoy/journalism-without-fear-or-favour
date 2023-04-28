import React from 'react';
import head from '/logo.png'
import moment from 'moment';
import { Button } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';


const Header = () => {
    return (
        <div className='text-center mt-3'>
            <img src={head} alt="" />
            <p className=''>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            <div className='d-flex'>
                <Button className='bg-danger'>Latest</Button>
                <Marquee speed={70}>
                    <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                </Marquee>
            </div>

        </div>
    );
};

export default Header;