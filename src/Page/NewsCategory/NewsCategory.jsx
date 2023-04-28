import moment from 'moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCategory = ({ cat }) => {
    const { author, category_id, details, image_url, rating, thumbnail_url, title, total_view, _id, } = cat
    console.log(cat)


    return (
        <Card className="">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{width:'40px'}} src={author?.img} roundedCircle />
                <div className='ms-2 flex-grow-1'>
                    <p className='mb-0'>{author?.name}</p>
                    {moment(author?.published_date).format("dddd-MMMM-YYYY")}

                </div>
                <div className='d-flex'>
                    <FaRegBookmark></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Image className='w-100' src={image_url}></Image>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details.length < 250 ? <>{details}</> : <>{details.slice(0, 250)} <Link to={`/news/${_id}`}>ReadMore...</Link></>}
                </Card.Text>
                <Link ><Button variant="primary">Se all news category</Button></Link>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsCategory;