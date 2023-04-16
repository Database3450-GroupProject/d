import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import CustomTable from '../components/CustomTable';

const HomeByOwner = () => {
    const [inputValue, setInputValue] = useState('');
    const [data, setData] = useState([]);
    const columns = [
        { label: 'Home ID', field: 'HomeId' },
        { label: 'Owner ID', field: 'ownershipID' },
        { label: 'First Name', field: 'fname' },
        { label: 'Last Name', field: 'lname' },
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:9000/home-by-owner/${inputValue}`)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error(error));
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="bg-light rounded m-5 p-3">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formInput">
                    <Form.Label style={{ fontSize: '24px' }}>Find Homes by Owner</Form.Label>
                    <Form.Control type="text" placeholder="Enter OwnershipID" value={inputValue} onChange={handleInputChange} />
                </Form.Group>
                <div class="col-sm-10">
                    <Button type="submit" className="mt-3">
                        Submit
                    </Button>
                </div>
            </Form>
            <div className='mt-3'>
                {data.length > 0 && (<CustomTable data={data} columns={columns} />)}
            </div>
        </div>
    );
};

export default HomeByOwner;
