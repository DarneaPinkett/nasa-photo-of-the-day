import React from "react";
import { Button, CardBody, Card, CardSubtitle, CardText, CardImg, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Photocard = props => {
    console.log(props);

    return (
        <div key={props.data} className="photo">
        <Card>
        <CardImg width="80%" height="80%" src={props.Img} alt="nasa"/>
        <CardBody>
        <CardTitle><h1>{props.title}</h1></CardTitle>
        <CardSubtitle>
        <h3>By: {props.copyright}</h3>
        <Button color="secondary"><h4>{props.date}</h4></Button>
        </CardSubtitle>
        <CardText>{props.explanation}</CardText>
        </CardBody>
        </Card>
        </div>
    );
};

export default Photocard;