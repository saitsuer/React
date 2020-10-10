import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col, BreadcrumbItem, Breadcrumb } from 'reactstrap';
import {Link} from "react-router-dom";


    function RenderComments({comments}) {
        console.log(comments);
            return (
                <div className="m-1">
                    <h4>Comments</h4>
                    
                    {comments.map((dishComment) => {
                        return(
                            <div key={dishComment.id} className="list-unstyled">
                                <div className="p-2">{dishComment.comment}</div>
                                <div className="p-2">
                                    -- {dishComment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(dishComment.date)))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        }

    function RenderDish({dish}) {
            return (
                    <Card>
                        <CardImg width="%100" src={dish.image} />
                        <CardBody>
                            <CardTitle className="font-weight-bold">{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
            );
        }

  const DishDetail = (props) => {
    if (props.dish != null) {
        console.log(props.dish.comments);
            return (
                <div className="container">
                    <div class="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>                    
                    <Row>
                        <Col md="5" xs="12" className="m-1"> 
                            <RenderDish dish={props.dish} />
                        </Col>
                        <Col md="5" xs="12" className="m-1"> 
                            <RenderComments comments={props.comments} />
                        </Col>
                    </Row>
                </div>
            );
        }
    else {
        return(
            <div></div>
        )
    }
    }

export default DishDetail;