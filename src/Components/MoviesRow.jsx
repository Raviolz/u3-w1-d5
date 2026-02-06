import { Component } from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

const movieUrl = "https://www.omdbapi.com/?apikey=ac879cbd"

class MoviesRow extends Component {
  state = {
    movies: [],
  }
  componentDidMount() {
    this.getMovies()
  }

  getMovies = () => {
    fetch(movieUrl + "&s=" + encodeURIComponent(this.props.query)) // encodeURIComponent per gestire spazi e caratteri speciali ---- SOLUZIONE SICUREZZA TROVATA ONLINE PER EVITARE PROBLEMI CON LA QUERY
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
      <Container fluid className="main-section">
        <h4 className="mb-3">{this.props.title}</h4>
        <div className="row-scroll">
          <Row xs={1} sm={2} md={3} lg={4} xl={5} xxl={6} className="mb-4 flex-nowrap g-2">
            {this.state.movies
              .filter((movie) => movie.Poster !== "N/A")
              .map((movie) => (
                <Col key={movie.imdbID} className="mb-2 px-1 movie-col">
                  <div className="movie-card">
                    <img
                      className="img-fluid movie-poster"
                      src={movie.Poster}
                      alt={movie.Title}
                      onError={(e) => {
                        e.currentTarget.closest(".col").style.display = "none" // per immagini 404 non trovate non disponibili
                      }}
                    />
                  </div>
                </Col>
              ))}
          </Row>
        </div>
      </Container>
    )
  }
}
export default MoviesRow
