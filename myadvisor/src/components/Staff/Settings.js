import React from "react";
import {Jumbotron, Container, Card, Row, Col} from 'react-bootstrap';
import AdvisingWindowSettings from './SetAdvisingWindow';
import AddAccount from './AddAccount';

function Settings() {
    return (
        <>
        <Jumbotron fluid>
            <Container>
                <h1>Settings</h1>
                <p>myAdvisor Staff Settings Page</p>
            </Container>
        </Jumbotron>
        
        <Container>
            <Row>
                <Col>
                    <Card className="settings-card">
                        <Card.Header>Advising Window</Card.Header>
                        <Card.Body>
                            <AdvisingWindowSettings/>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                <Card className="settings-card">
                    <Card.Header>Add Staff Account</Card.Header>
                    <Card.Body>
                        <AddAccount/>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
                
        </>
    );
}

export default Settings;