import React from 'react';
import { Button } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '/bg1.png'

const RightNav = () => {
    return (
        <div>
            <h2>Please Login</h2>
            <Button variant="secondary"><FaGoogle className='me-2'></FaGoogle>Login with google</Button>
            <br />
            <Button variant="success"><FaGithub className='me-2'></FaGithub>Login with github</Button>
            <h2 className='mt-2'>Contact us ond</h2>

            <Button variant="outline-primary"><FaFacebook></FaFacebook>Facebook</Button>
            <br />
            <Button variant="outline-secondary"><FaInstagram></FaInstagram>Instagram</Button>
            <br />
            <Button variant="outline-success"><FaTwitter></FaTwitter>Twitter</Button>
            <Qzone></Qzone>
            <div className="mt-3 rounded"
            style={{
                width:'260px',
                height:'700px',
                backgroundImage: 'cover',
                backgroundImage: `url(${bg})`,
                backgroundRepeat: 'no-repeat',
            }}>
                <h2 className='text-white fs-5 text-center'>Hey developer I'm almost done . I will never ever be stop</h2>
                <p className=''>guys just start what you want to be then you will be king your kingdom.</p>

            </div>

        </div>
    );
};

export default RightNav;