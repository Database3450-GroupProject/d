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
        const nameParts = inputValue.split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts[1];
        fetch(`/owner-search/${firstName}/${lastName}`)
            .then((response) => response.json())
            .then((data) => setData(data));
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="bg-light rounded m-5 p-3">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formInput">
                    <Form.Label style={{ fontSize: '24px' }}>Search for Home by Owner</Form.Label>
                    <Form.Control type="text" placeholder="Enter a value" value={inputValue} onChange={handleInputChange} />
                </Form.Group>
                <div class="col-sm-10">
                    <Button type="submit" className="mt-3">
                        Submit
                    </Button>
                </div>
            </Form>
            {data.length > 0 && <CustomTable data={data} columns={columns} />}
        </div>
    );
};

export default HomeByOwner;
