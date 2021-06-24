import { Col, Card, CardColumns } from 'react-bootstrap';
import React, {useState, useEffect} from 'react';

function ResultCard({articles}) {
    return (
        <CardColumns>
            {articles && articles.map(article => {
                return (
                    <Col>
                        <Card style={{ width: '20rem', flex: '1'}}>
                            <Card.Header className="text-left">
                                <Card.Title>{article.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{article.section}</Card.Subtitle>
                            </Card.Header>
                            <Card.Body className="text-left">
                                <Card.Text>{article.abstract}</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Card.Link href={article.url}>Details</Card.Link>
                                {/* <Button variant="primary" onClick={this.openModal}>
                                    Details
                                </Button> */}
                            </Card.Footer>
                        </Card>
                    </Col>
                );})}
        </CardColumns>
    );
}

export default ResultCard;