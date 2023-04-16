import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import CustomTable from '../components/CustomTable';

const ListAgent = () => {
    const [data, setData] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:9000/agent')
            .then(response => response.json())
            .then(data => setData(data));
    };

    const columns = [
        { label: 'Agent ID', field: 'agentID' },
        { label: 'First Name', field: 'fname' },
        { label: 'Last Name', field: 'lname' },
        { label: 'Agency ID', field: 'agencyID' },
    ];


    return (
        <div className="bg-light rounded m-5 p-3">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formInput">
                    <Form.Label style={{ fontSize: '24px' }}>List All Agents</Form.Label>
                </Form.Group>
                <div class="col-sm-10">
                    <Button type="submit" className="mt-3">Submit</Button>
                </div>
            </Form>

            <div className='mt-3'>
                {data.length > 0 && (<CustomTable data={data} columns={columns} />)}
            </div>
        </div>
    );
};

export default ListAgent;