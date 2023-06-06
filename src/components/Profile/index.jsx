import React from "react";
// bootstrap
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = ({ id }) => {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        .then((response) => response.json())
        .then((json) => setUser(json[0]));
    }, 500);
  }, [id]);

  return (
    <>
      {!!user.id ? (
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="5" className="mt-5">
              <Card style={{ borderRadius: "15px" }}>
                <Card.Body className="p-4">
                  <div className="d-flex text-black">
                    <div className="flex-shrink-0">
                      <Card.Img
                        style={{ width: "180px", borderRadius: "10px" }}
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        alt="Generic placeholder image"
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
