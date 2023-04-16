import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import CustomTable from '../components/CustomTable';

const ListHome = () => {
    const [data, setData] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:9000/home')
            .then(response => response.json())
            .then(data => setData(data));
    };

    const columns = [
        { field: 'HomeId', label: 'ID' },
        { field: 'address', label: 'Address' },
        { field: 'city', label: 'City' },
        // { field: 'state', label: 'State' },
        // { field: 'country', label: 'Country' },
        { field: 'zip', label: 'Zip Code' },
        // { field: 'unit', label: 'Unit' },
        // { field: 'value', label: 'Value' },
        // { field: 'yearBuilt', label: 'Year Built' },
        // { field: 'lotSize', label: 'Lot Size' },
        // { field: 'lotDimensions', label: 'Lot Dimensions' },
        // { field: 'type', label: 'Type' },
        // { field: 'zoning', label: 'Zoning' },
        // { field: 'sqFeet', label: 'Square Feet' },
        // { field: 'numOfBed', label: 'Number of Bedrooms' },
        // { field: 'numOfBath', label: 'Number of Bathrooms' },
        // { field: 'numOfStories', label: 'Number of Stories' },
        // { field: 'garageType', label: 'Garage Type' },
        // { field: 'parkingSpots', label: 'Number of Parking Spots' },
        // { field: 'agentID', label: 'Agent ID' },
    ];

    return (
        <div className="bg-light rounded m-5 p-3">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formInput">
                    <Form.Label style={{ fontSize: '24px' }}>List All Homes</Form.Label>
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

export default ListHome;