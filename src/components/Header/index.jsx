import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";

const Header = () => {
  return (
    <div className="shadow-sm header">
      <Container>
        <Row>
          <Col xs="12" className="header__group">
            <Link to="/photos" className="header__link header__title">
              REDUX PHOTOS
            </Link>
            <Link to="/login" className="header__link header__title">
              Login
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
