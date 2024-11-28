import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from './photos/logo.png'

function Header() {
    return (
        <>

            <Navbar expand="lg" className="bg-black">
                <Container>
                    <Navbar.Brand as={NavLink} to="/" className="hover1">
                        <img src={logo} alt="" className="h-[60px] w-[110px]" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" style={{ color: 'white' }} />
                    <Navbar.Collapse id="navbarScroll" style={{ color: 'white' }}>
                        <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                            {["/", "/Resume", "/Projects", "/Contact"].map((path, index) => (
                                <Nav.Link
                                    key={path}
                                    as={NavLink}
                                    to={path}
                                    className="nav-link hover1"
                                    style={({ isActive }) => ({
                                        color: isActive ? "#00ff7f" : "white",
                                        textDecoration: isActive ? "underline" : "none",
                                        fontWeight: isActive ? "bold" : "normal",
                                        ...(window.innerWidth < 768 ? { color: 'white' } : {}),
                                    })}
                                >
                                    {["Home", "Resume", "Work", "Contact"][index]}
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr style={{ borderTop: '1px solid white', width: '100%' }} />
        </>
    );
}

export default Header;
