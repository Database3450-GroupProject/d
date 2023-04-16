import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

function Welcome() {
    return (
        <div className='text-center mx-auto'>
            <h1>Welcome</h1>
            <h2>Hello, this is a project for CSI3450.</h2>
            <h1>🏠</h1>
            <Card className='text-center'>
                <Card.Header>Group Members</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Aden</ListGroup.Item>
                    <ListGroup.Item>Patrick</ListGroup.Item>
                    <ListGroup.Item>Claire</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
}

export default Welcome;