import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightNav = () => {
    return (
        <div>
            <h2>Please Login</h2>
            <Button variant="secondary"><FaGoogle className='me-2'></FaGoogle>Login with google</Button>
            <br />
            <Button variant="success"><FaGithub className='me-2'></FaGithub>Login with githubb</Button>
            <h2 className='mt-2'>Contact us ond</h2>
            

        </div>
    );
};

export default RightNav;