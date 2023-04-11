import { Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <Navbar expand="sm" variant="light">
            <Nav className="ms-auto" navbarScroll>
                <NavLink as={Link} to="/" exact>Welcome</NavLink>
                <NavLink as={Link} to="/agent">Agent</NavLink>
                <NavLink as={Link} to="/home">Home</NavLink>
                <NavLink as={Link} to="/owner">Owner</NavLink>
            </Nav>
        </Navbar>
    );
};

export default NavigationBar;