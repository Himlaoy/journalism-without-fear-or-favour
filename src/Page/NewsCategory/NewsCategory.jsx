import React from 'react';
import { Button, Card } from 'react-bootstrap';

const NewsCategory = ({ cat }) => {
    const { author, category_id, details, image_url, rating, thumbnail_url, title, total_view, _id, } = cat
    console.log(cat)


    return (
        <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsCategory;