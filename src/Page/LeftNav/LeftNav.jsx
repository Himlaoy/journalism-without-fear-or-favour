import React, { useEffect, useState } from 'react';

const LeftNav = () => {
    const [category , setCategory] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data=>setCategory(data))
        .catch(error=>console.log(error.message))
    },[])
    
    // console.log(category.name)
    return (
        <div>
            {/* <h2>Left nav</h2> */}
            {/* <p>{category.name}</p> */}
        </div>
    );
};

export default LeftNav;