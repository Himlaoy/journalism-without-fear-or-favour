import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftNav from '../LeftNav/LeftNav';
import NewsCategory from '../NewsCategory/NewsCategory';

const Category = () => {
   const category = useLoaderData()
   console.log(category)
    return (
        <div>
            {/* <h2>News Category : {category.length}</h2> */}
           {
            category.map(cat=><NewsCategory key={cat._id} cat={cat}></NewsCategory>)
           }

        </div>
    );
};

export default Category;