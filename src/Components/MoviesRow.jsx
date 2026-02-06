import { Component } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const movieUrl = "https://www.omdbapi.com/?apikey=ac879cbd"

class MoviesRow extends Component {
  state = {
    movies: [],
  }
  componentDidMount() {
    this.getMovies()
  }

  getMovies = () => {
    fetch(movieUrl + "&s=Harry Potter")
      .then((response) => response.json())
      .then((data) => {
        console.log("Film recuperati:", data)
        this.setState({ movies: data.Search })
      })
      .catch((err) => {
        console.log("Errore:", err)
      })
  }

  render() {
    return (
      <>
        <h4>Trending Now</h4>
        <Row xs={1} sm={2} md={4} lg={6} className="mb-4">
          {this.state.movies.map((movie) => (
            <Col key={movie.imdbID} className="mb-2 text-center px-1">
              <img className="img-fluid movie-poster" src={movie.Poster} alt="movie picture" />
            </Col>
          ))}
        </Row>
      </>
    )
  }
}
export default MoviesRow
