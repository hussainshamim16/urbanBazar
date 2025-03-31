import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaDev, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="text-white py-5" style={{ backgroundColor: '#27296d' }}>
            <Container>
                <Row className="align-items-center text-center text-md-left">
                    <Col md={4} className="mb-4 mb-md-0">
                        <h4 className="fw-bold">Ubazaar</h4>
                        <p>
                            A sleek, single-page eCommerce web app built with React for a seamless shopping experience.
                        </p>
                    </Col>
                    <Col md={4} className="mb-4 mb-md-0 text-center">
                        <h5 className="fw-bold">Follow Us</h5>
                        <div className="d-flex justify-content-center gap-3 mt-2">
                            <Link to="https://dev.to/hussainshamim16" className="text-white fs-4"><FaDev />
                            </Link>

                            <Link to="https://github.com/hussainshamim16" className="text-white fs-4"><FaGithub /></Link>

                            <Link to="https://www.linkedin.com/in/muhammadhussainshamim/" className="text-white fs-4"><FaLinkedin /></Link>
                        </div>
                    </Col>
                    <Col md={4} className="text-center text-md-end">
                        <h5 className="fw-bold">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <Link
                                    to="/" className="text-white text-decoration-none"

                                >Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/" className="text-white text-decoration-none"

                                >Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/" className="text-white text-decoration-none"

                                >Home
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <hr className="bg-light my-4" />
                <Row>
                    <Col className="text-center">
                        <p className="mb-0">&copy; {new Date().getFullYear()} Urban Bazar | Created by <a href="http://hussainshamim.netlify.app/" className="text-white fw-bold">Muhammad Hussain Shamim</a></p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
