import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./InputForm.module.css";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function InputForm() {
  return (
    <Container className={styles.container}>
      <Row>
        <Col sm={6}>
          <Form.Label htmlFor="inputPassword5" className={styles.label}>
            FIRST NAME
          </Form.Label>
        </Col>
        <Col sm={6}>
          <Form.Label htmlFor="inputPassword5" className={styles.label}>
            FIRST NAME
          </Form.Label>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            className={styles.custominput}
          />
        </Col>
        <Col sm={6}>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            className={styles.custominput}
          />
        </Col>
      </Row>
      <Row>
        <Form.Label htmlFor="inputPassword5" className={styles.label}>
          FIRST NAME
        </Form.Label>
      </Row>
      <Row>
        <Col>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            className={styles.custominput}
          />
        </Col>
      </Row>
      <Row>
        <Form.Label htmlFor="inputPassword5" className={styles.label}>
          FIRST NAME
        </Form.Label>
      </Row>
      <Row>
        <Col>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            className={styles.custominput}
          />
        </Col>
      </Row>
      <Row>
        <Form.Label htmlFor="inputPassword5" className={styles.label}>
          FIRST NAME
        </Form.Label>
      </Row>
      <Row>
        <Col>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            className={styles.custominput}
          />
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Form.Label htmlFor="inputPassword5" className={styles.label}>
            FIRST NAME
          </Form.Label>
        </Col>
        <Col sm={6}>
          <Form.Label htmlFor="inputPassword5" className={styles.label}>
            FIRST NAME
          </Form.Label>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            className={styles.custominput}
          />
        </Col>
        <Col sm={6}>
          <Form.Control
            type="text"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
            className={styles.custominput}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="dark" className={styles.custombutton}>
            Sign Up <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className={styles.linkcontainer}>
          Already have an account?{" "}
          <Link className={styles.link} to="/signin">
            Sign in
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
export default InputForm;
