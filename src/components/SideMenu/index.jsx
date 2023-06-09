import React from "react";
import styles from "./SideMenu.module.scss";
// bootstrap
import { Offcanvas, Image } from "react-bootstrap";
// router
import { Link } from "react-router-dom";
// avatar
import Avatar from "../../assets/images/Avatar1.jpg";

const SideMenu = ({ isOpen, handleClose }) => {
  return (
    <Offcanvas show={isOpen} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Image
          alt="User_Avatar"
          src={Avatar}
          className={styles.avatar}
        />
        <Offcanvas.Title className={styles.title}>
          <span>Timur</span>
          <span>makaevtimur2000@mail.ru</span>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className={styles.sideMenu}>
        <Link to="/" onClick={handleClose}>
          Posts
        </Link>
        <Link to="/about" onClick={handleClose}>
          About me
        </Link>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SideMenu;
