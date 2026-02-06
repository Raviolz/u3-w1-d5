import { Component } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

class MoviesRow extends Component {
  render() {
    return (
      <>
        <h4>Trending Now</h4>
        <Row xs={1} sm={2} md={4} lg={6} className="mb-4">
          <Col className=" mb-2 text-center px-1">
            <img className="img-fluid" src="assets/1.png" alt="movie picture" />
          </Col>
          <Col className=" mb-2 text-center px-1">
            <img className="img-fluid" src="assets/2.png" alt="movie picture" />
          </Col>
          <Col className=" mb-2 text-center px-1">
            <img className="img-fluid" src="assets/3.png" alt="movie picture" />
          </Col>
          <Col className=" mb-2 text-center px-1">
            <img className="img-fluid" src="assets/4.png" alt="movie picture" />
          </Col>
          <Col className=" mb-2 text-center px-1">
            <img className="img-fluid" src="assets/5.png" alt="movie picture" />
          </Col>
          <Col className=" mb-2 text-center px-1">
            <img className="img-fluid" src="assets/6.png" alt="movie picture" />
          </Col>
        </Row>
      </>
    )
  }
}
export default MoviesRow
