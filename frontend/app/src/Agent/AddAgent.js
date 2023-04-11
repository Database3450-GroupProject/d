import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddAgent = () => {
    const [agentID, setAgentID] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [agencyID, setAgencyID] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: handle form submission
    };

    return (
        <div className="bg-light rounded m-5 p-3">
            <Form onSubmit={handleSubmit}>
                <div className="text-center">
                    <Form.Label style={{ fontSize: '30px' }}>Add Agent</Form.Label>
                </div>
                <Form.Group controlId="formInputAgentID">
                    <Form.Label style={{ fontSize: '24px' }}>Agent ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter agent ID" value={agentID} onChange={(e) => setAgentID(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formInputFname">
                    <Form.Label style={{ fontSize: '24px' }}>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" value={fname} onChange={(e) => setFname(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formInputLname">
                    <Form.Label style={{ fontSize: '24px' }}>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" value={lname} onChange={(e) => setLname(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formInputAgencyID">
                    <Form.Label style={{ fontSize: '24px' }}>Agency ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter agency ID" value={agencyID} onChange={(e) => setAgencyID(e.target.value)} />
                </Form.Group>
                <div class="col-sm-10">
                    <Button type="submit" className="mt-3">Submit</Button>
                </div>
            </Form>
        </div>
    );
};

export default AddAgent;
