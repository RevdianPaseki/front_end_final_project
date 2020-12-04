import React from 'react'
import {Card, Button} from 'react-bootstrap'

const AboutPage = () => {
    return (
        <div style={{width: "30rem", margin: "auto", marginTop: "10rem"}}>
            <Card className="text-center">
                <Card.Header>A sentence perhaps</Card.Header>
                <Card.Body>
                    <Card.Title>Studio Ghibli Films</Card.Title>
                    <Card.Text>
                        Made with joy by Revdian Efraim Paseki
                        <br/>
                        <br/>
                        API used was Studio Ghibli's Films API
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">~dev</Card.Footer>
            </Card>
        </div>
    )
}

export default AboutPage