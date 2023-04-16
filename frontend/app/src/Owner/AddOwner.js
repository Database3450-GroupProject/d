import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddOwner = () => {

    // OWNER
    const [ownerID, setOwnerID] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [SSN, setSSN] = useState('');
    const [numOfDependents, setNumOfDependents] = useState('');
    const [income, setIncome] = useState('');
    const [age, setAge] = useState('');
    const [profession, setProfession] = useState('');
    const [citizen, setCitizen] = useState('');
    const [creditScore, setCreditScore] = useState('');

    // SHARED
    const [ownershipID, setOwnershipID] = useState('');

    // OWNERSHIP
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [mortgageRate, setMortgageRate] = useState('');
    const [amountPaid, setAmountPaid] = useState('');
    const [mortgageAmount, setMortgageAmount] = useState('');
    const [homeId, setHomeID] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();

        const ownershipData = {
            ownershipID,
            startDate,
            endDate,
            mortgageRate,
            amountPaid,
            mortgageAmount,
            homeId
        };

        const ownerData = {
            ownerID,
            fname,
            lname,
            SSN,
            numOfDependents,
            income,
            age,
            profession,
            citizen,
            creditScore,
            ownershipID,
        };

        fetch('http://localhost:9000/add-ownership', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ownershipData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success', data);
                setOwnershipID('');
                setStartDate('');
                setEndDate('');
                setMortgageRate('');
                setAmountPaid('');
                setMortgageAmount('');
                setHomeID('');
            })

            .catch((error) => {
                console.error('Error:', error);
            });

        fetch('http://localhost:9000/add-owner', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ownerData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setOwnerID('');
                setFname('');
                setLname('');
                setSSN('');
                setNumOfDependents('');
                setIncome('');
                setAge('');
                setProfession('');
                setCitizen('');
                setCreditScore('');
                setOwnershipID('');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="bg-light rounded m-5 p-3">
            <Form onSubmit={handleSubmit}>
                <div className="text-center">
                    <Form.Label style={{ fontSize: '30px' }}>Add/Update Owner</Form.Label>
                </div>
                <Form.Group controlId="formInputOwnerID">
                    <Form.Label style={{ fontSize: '24px' }}>Owner ID</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter owner ID"
                        value={ownerID}
                        onChange={(e) => setOwnerID(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formInputFname">
                    <Form.Label style={{ fontSize: '24px' }}>First Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        value={fname}
                        onChange={(e) => setFname(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formInputLname">
                    <Form.Label style={{ fontSize: '24px' }}>Last Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formInputSSN">
                    <Form.Label style={{ fontSize: '24px' }}>SSN</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter SSN"
                        value={SSN}
                        onChange={(e) => setSSN(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formInputNumberOfDependents">
                    <Form.Label style={{ fontSize: '24px' }}>Dependents</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter dependents."
                        value={numOfDependents}
                        onChange={(e) => setNumOfDependents(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formInputIncome">
                    <Form.Label style={{ fontSize: '24px' }}>Income</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter income"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formInputAge">
                    <Form.Label style={{ fontSize: '24px' }}>Age</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formInputProfession">
                    <Form.Label style={{ fontSize: '24px' }}>Profession</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Profession"
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formInputCitizen">
                    <Form.Label style={{ fontSize: '24px' }}>Citizen</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter citizen"
                        value={citizen}
                        onChange={(e) => setCitizen(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formInputCreditScore">
                    <Form.Label style={{ fontSize: '24px' }}>Credit Score</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter credit score"
                        value={creditScore}
                        onChange={(e) => setCreditScore(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formInputOwnershipID">
                    <Form.Label style={{ fontSize: '24px' }}>Ownership ID</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter ownership ID"
                        value={ownershipID}
                        onChange={(e) => setOwnershipID(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formInputStartDate">
                    <Form.Label style={{ fontSize: '24px' }}>Start Date</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter start date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formInputEndDate">
                    <Form.Label style={{ fontSize: '24px' }}>End Date</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter end date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formInputMortgageRate">
                    <Form.Label style={{ fontSize: '24px' }}>Mortgage Rate</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter mortgage rate"
                        value={mortgageRate}
                        onChange={(e) => setMortgageRate(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formInputAmountPaid">
                    <Form.Label style={{ fontSize: '24px' }}>Amount Paid</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter amount paid"
                        value={amountPaid}
                        onChange={(e) => setAmountPaid(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formInputMortgageAmount">
                    <Form.Label style={{ fontSize: '24px' }}>Mortgage Amount</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter mortgage amount"
                        value={mortgageAmount}
                        onChange={(e) => setMortgageAmount(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formInputHomeID">
                    <Form.Label style={{ fontSize: '24px' }}>Home ID</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter home ID"
                        value={homeId}
                        onChange={(e) => setHomeID(e.target.value)}
                    />
                </Form.Group>

                <div class="col-sm-10">
                    <Button type="submit" className="mt-3">Submit</Button>
                </div>
            </Form>
        </div>
    );
};


export default AddOwner;


