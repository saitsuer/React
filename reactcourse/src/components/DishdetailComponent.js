import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col } from 'reactstrap';

class DishDetail extends Component {


    renderComments(dish.comment) {
        
        if (dish != null) {
            let comments=dish.comments;
            return (
                <div className="m-1">
                    <h4>Comments</h4>
                    {comments.map((dishComment) => {
                        return(
                            <div key={dishComment.id} className="list-unstyled">
                                <div className="p-2">{dishComment.comment}</div>
                                <div className="p-2">
                                    -- {dishComment.author}, {dishComment.date}
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderDish(dish) {
        if (dish != null) {
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
        else {
            return(
                <div></div>
            );
        }
    }

    render() {

            return (
                <Row>
                    <Col md="5" xs="12" className="m-1"> 
                        {this.renderDish(this.props.dish)}
                    </Col>
                    <Col md="5" xs="12" className="m-1"> 
                        {this.renderComments(this.props.dish)}
                    </Col>
                </Row>
            );
    }
}

export default DishDetail;