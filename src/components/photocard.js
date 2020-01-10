import React from "react";
import { CardBody, Card, CardSubtitle, CardText, CardImg, CardTitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Photocard = props => {
    console.log(props);

    return (
        <div key={props.data} className="photo">
        <Card>
        <CardImg top width="100%" src={props.Img} alt="nasa"/>
        <CardBody>
        <CardTitle><h1>{props.title}</h1></CardTitle>
        <CardSubtitle><span>{props.date}</span>
        <h3>By: {props.copyright}</h3>
        </CardSubtitle>
        <CardText><p>{props.explanation}</p></CardText>
        </CardBody>
        </Card>
        </div>
    );
};

export default Photocard;