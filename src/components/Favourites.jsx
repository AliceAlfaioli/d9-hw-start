import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteFromJobAction } from "../redux/action";

const Favourites = () => {
  const favourites = useSelector((state) => state.Preferiti.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Favourites</h1>
          <Button onClick={() => navigate("/")}>Home</Button>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {favourites.map((fav, i) => (
              <ListGroup.Item key={i}>
                <StarFill className="mr-2" onClick={() => dispatch(deleteFromJobAction(i))} />
                <Link to={"/" + fav}>{fav}</Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
