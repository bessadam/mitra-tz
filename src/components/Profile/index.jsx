import React from "react";
import styles from "./Profile.module.scss";
// bootstrap
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
// redux
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../redux/actions/userProfile";

const Profile = ({ id }) => {
  const [user, setUser] = React.useState({});
  const userx = useSelector((state) => state.profile.user);
  const dispatch = useDispatch();

  React.useEffect(() => {
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        .then((response) => response.json())
        .then((json) => setUser(json[0]));
    }, 500);
  }, [id]);

  React.useEffect(() => {
    dispatch(getUserProfile(id));
  }, [id])

  return (
    <>
      {!!userx ? (
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="5" className="mt-5">
              <Card>
                <Card.Body className="p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <Card.Img
                        className={styles.avatar}
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        alt="Avatar"
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <Card.Text>
                        <b>Name:</b> {user?.name}
                      </Card.Text>
                      <Card.Text>
                        <b>Email:</b> {user?.email}
                      </Card.Text>
                      <Card.Text>
                        <b>Phone: </b> {user?.phone}
                      </Card.Text>
                      <Card.Text>
                        <b>Company: </b> {user?.company?.name}
                      </Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Profile;
