import React from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';

const RightNav = () => {
    return (
        <div>
            <h2>Please Login</h2>
            <Button variant="secondary"><FaGoogle className='me-2'></FaGoogle>Login with google</Button>
            <br />
            <Button variant="success"><FaGithub className='me-2'></FaGithub>Login with githubb</Button>
            <h2 className='mt-2'>Contact us ond</h2>

            <Button variant="outline-primary"><FaFacebook></FaFacebook>Facebook</Button>
            <br />
            <Button variant="outline-secondary"><FaInstagram></FaInstagram>Instagram</Button>
            <br />
            <Button variant="outline-success"><FaTwitter></FaTwitter>Twitter</Button>
            <Qzone></Qzone>
            
        </div>
    );
};

export default RightNav;