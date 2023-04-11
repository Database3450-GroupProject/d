------------------------------------------------
---- CSI 3450 COURSE PROJECT                ----
------------------------------------------------

CREATE TABLE AGENCY (
	agencyID VARCHAR(10),
	address VARCHAR(40),
	city VARCHAR(40),
	state VARCHAR(40),
	country VARCHAR(40),
	zip VARCHAR(5),
	unit VARCHAR(5),
	name VARCHAR(70),
	commisionRate REAL,
	PRIMARY KEY (agencyID)
);
CREATE TABLE AGENT (
	agentID VARCHAR(10),
	fname VARCHAR(40),
	lname VARCHAR(40),
	agencyID VARCHAR(10),
	PRIMARY KEY (agentID),
	FOREIGN KEY (agencyID) REFERENCES AGENCY (agencyID)
);

CREATE TABLE HOMES (
    HomeId INT,
    address VARCHAR(40),
    city VARCHAR(40),
    state VARCHAR(40),
    country VARCHAR(40),
    zip VARCHAR(5),
    unit VARCHAR(5),
    value INT,
    yearBuilt VARCHAR(10),
    lotSize INT,
    lotDimensions INT,
    type VARCHAR(40),
    zoning VARCHAR(40),
    sqFeet INT,
    numOfBed INT,
    numOfBath INT,
    numOfStories INT,
    garageType VARCHAR(40),
    parkingSpots INT,
    agentID VARCHAR(10),
    PRIMARY KEY (HomeId),
    FOREIGN KEY (agentID) REFERENCES AGENT (agentID)
);

CREATE TABLE APPLIANCE (
	modelNumber VARCHAR(10),
	make VARCHAR(40),
	name VARCHAR(40),
	type VARCHAR(4),
	price REAL,
	homeId INT,
	PRIMARY KEY (modelNumber, make),
	FOREIGN KEY (homeId) REFERENCES HOMES (HomeId)
);

CREATE TABLE OWNERSHIP (
	ownershipID VARCHAR(10),
	startDate VARCHAR(10),
	endDate VARCHAR(10),
	mortgageRate REAL,
	amountPaid REAL,
	mortgageAmount REAL,
	homeId INT,
	PRIMARY KEY (ownershipID),
	FOREIGN KEY (homeId) REFERENCES HOMES (HomeId)
);

CREATE TABLE OWNER (
	ownerID VARCHAR(10),
	fname VARCHAR(40),
	lname VARCHAR(40),
	SSN VARCHAR(9),
	numOfDependents INTEGER,
	income REAL,
	age INTEGER,
	profession VARCHAR(40),
	citizen VARCHAR(40),
	creditScore INTEGER,
	ownershipID VARCHAR(10),
	PRIMARY KEY (ownerID),
	FOREIGN KEY (ownershipID) REFERENCES OWNERSHIP (ownershipID)
);

-- Populating the AGENCY table
INSERT INTO AGENCY (agencyID, address, city, state, country, zip, unit, name, commisionRate) VALUES
('A1', '123 Main St', 'Anytown', 'CA', 'USA', '12345', 'A', 'ABC Realty', 0.05),
('A2', '456 High St', 'Othertown', 'NY', 'USA', '54321', 'B', 'XYZ Realty', 0.06);

-- Populating the AGENT table
INSERT INTO AGENT (agentID, fname, lname, agencyID) VALUES
('1001', 'John', 'Doe', 'A1'),
('1002', 'Jane', 'Smith', 'A2');

-- Populating the HOMES table
INSERT INTO HOMES (HomeId, address, city, state, country, zip, unit, value, yearBuilt, lotSize, lotDimensions, type, zoning, sqFeet, numOfBed, numOfBath, numOfStories, garageType, parkingSpots, agentID) VALUES
(1, '789 Oak St', 'Anytown', 'CA', 'USA', '12345', 'A', 500000, '2000', 5000, 200, 'Single-Family', 'Residential', 3000, 4, 3, 2, 'Attached', 2, '1001'),
(2, '321 Elm St', 'Othertown', 'NY', 'USA', '54321', 'B', 750000, '2010', 7500, 400, 'Single-Family', 'Residential', 4500, 5, 4, 3, 'Detached', 3, '1002');

-- Populating the APPLIANCE table
INSERT INTO APPLIANCE (modelNumber, make, name, type, price, homeId) VALUES
('M123', 'Maytag', 'Refrigerator', 'R', 1500.00, 1),
('D456', 'Samsung', 'Washer', 'W', 1000.00, 1),
('D789', 'LG', 'Dryer', 'D', 900.00, 1),
('F123', 'Frigidaire', 'Range', 'R', 1200.00, 2),
('M456', 'Maytag', 'Dishwasher', 'D', 800.00, 2);

-- Populating the OWNERSHIP table
INSERT INTO OWNERSHIP (ownershipID, startDate, endDate, mortgageRate, amountPaid, mortgageAmount, homeId) VALUES
('O1', '2020-01-01', '2025-01-01', 0.04, 100000, 400000, 1),
('O2', '2022-01-01', NULL, 0.05, 150000, 600000, 2);

-- Populating the OWNER table
INSERT INTO OWNER (ownerID, fname, lname, SSN, numOfDependents, income, age, profession, citizen, creditScore, ownershipID) VALUES
('2001', 'Bob', 'Johnson', '123456789', 2, 75000, 35, 'Engineer', 'USA', 750, 'O1'),
('2002', 'Mary', 'Williams', '987223333', 1, 29000, 12, 'Software Manager', 'USA', 300, 'O2');
