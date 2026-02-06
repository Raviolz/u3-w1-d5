import { Component } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

class MoviesRow extends Component {
  render() {
    const movies = [
      //per partire da public uso url piu' veloce
      "/1.png",
      "/2.png",
      "/3.png",
      "/4.png",
      "/5.png",
      "/6.png",
      "/7.png",
      "/8.png",
      "/9.png",
      "/10.png",
      "/11.png",
      "/12.png",
      "/13.png",
      "/14.png",
      "/15.png",
      "/16.png",
      "/17.png",
      "/18.png",
    ]

    return (
      <>
        <h4>Trending Now</h4>

        <Row xs={1} sm={2} md={4} lg={6} className="mb-4">
          {movies.map((movie, index) => (
            <Col key={index} className="mb-2 text-center px-1">
              <img className="img-fluid movie-poster" src={movie} alt="movie picture" />
            </Col>
          ))}
        </Row>
      </>
    )
  }
}
export default MoviesRow
