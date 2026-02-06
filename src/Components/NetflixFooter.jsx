import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function NetflixFooter() {
  return (
    <Container fluid className=" text-white mt-1 pt-1 pb-4 netflix-footer">
      <Row className="justify-content-center mt-5">
        <Col className="col-6">
          <Row className="mb-3">
            {/* Social Icons */}
            <Col>
              <i className="bi bi-facebook footer-icon me-2 "></i>
              <i className="bi bi-instagram footer-icon me-2 "></i>
              <i className="bi bi-twitter-x footer-icon me-2 "></i>
              <i className="bi bi-youtube footer-icon"></i>
            </Col>
          </Row>
          {/* Links */}
          <Row xs={1} sm={2} md={4}>
            <Col className="footer-links">
              <p>
                <a href="#">Audio and Subtitles</a>
              </p>
              <p>
                <a href="#">Media Center</a>
              </p>
              <p>
                <a href="#">Privacy</a>
              </p>
              <p>
                <a href="#">Contact us</a>
              </p>
            </Col>

            <Col className="footer-links">
              <p>
                <a href="#">Audio Description</a>
              </p>
              <p>
                <a href="#">Investor Relations</a>
              </p>
              <p>
                <a href="#">Legal Notices</a>
              </p>
            </Col>

            <Col className="footer-links">
              <p>
                <a href="#">Help Center</a>
              </p>
              <p>
                <a href="#">Jobs</a>
              </p>
              <p>
                <a href="#">Cookie Preferences</a>
              </p>
            </Col>

            <Col className="footer-links">
              <p>
                <a href="#">Gift Cards</a>
              </p>
              <p>
                <a href="#">Terms of Use</a>
              </p>
              <p>
                <a href="#">Corporate Information</a>
              </p>
            </Col>
          </Row>

          {/* Button */}
          <Row>
            <Col className="mt-3">
              <button className="btn btn-sm footer-button rounded-0 ">Service Code</button>
            </Col>
          </Row>

          {/* Copyright */}
          <Row>
            <Col className="mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default NetflixFooter
