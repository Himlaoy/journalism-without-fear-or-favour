import React from 'react';
import bg1 from '/qZone1.png'
import bg2 from '/qZone2.png'
import bg3 from '/qZone3.png'

const Qzone = () => {
    return (
        <div className='mt-3'>
            <h2>This is Q-zone</h2>
            <div className='bg-secondary rounded py-2'>
                <img src={bg1} alt="kidz picture" />
                <img src={bg2} alt="kidz picture" />
                <img src={bg3} alt="kidz picture" />
            </div>
            
        </div>
    );
};

export default Qzone;