import React from "react";
import styles from "./Header.module.scss";
// bootstrap
import { Navbar, Container, Nav, Button } from "react-bootstrap";
// components
import SideMenu from "../SideMenu";
// router
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [show, setShow] = React.useState(false);

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="dark" variant="dark" className={styles.header}>
      <Container>
        <Nav className="w-100 me-auto">
          <div className={styles.navbar}>
            <Button variant="primary" onClick={handleShow}>
              ≡
            </Button>{" "}
            {pathname?.includes("user") && (
              <Button variant="danger" onClick={() => navigate("/")}>
                Back
              </Button>
            )}
            <SideMenu isOpen={show} handleClose={handleClose} />
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
