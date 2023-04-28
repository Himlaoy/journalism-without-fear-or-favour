import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [category , setCategory] = useState([])


    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setCategory(data))
        .catch(error=>console.log(error.message))
    },[])
    
    // console.log(category)
    return (
        <div>
            <h2>Left nav</h2>
           {
            category.map(ct=> <p key={ct.id}><Link className='text-decoration-none' to={`/category/${ct.id}`}>{ct.name}</Link></p> )
           }
        </div>
    );
};

export default LeftNav;