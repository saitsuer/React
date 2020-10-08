import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col } from 'reactstrap';


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
                <Row>
                    <Col md="5" xs="12" className="m-1"> 
                        <RenderDish dish={props.dish} />
                    </Col>
                    <Col md="5" xs="12" className="m-1"> 
                        <RenderComments comments={props.dish.comments} />
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