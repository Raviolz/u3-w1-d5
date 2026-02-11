import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const movieUrl = "https://www.omdbapi.com/?apikey=ac879cbd"

const TvShows = (props) => {
  const [movies, setMovies] = useState([])
  const getMovies = () => {
    fetch(movieUrl + "&s=" + encodeURIComponent("harry potter")) // encodeURIComponent per gestire spazi e caratteri speciali ---- SOLUZIONE SICUREZZA TROVATA ONLINE PER EVITARE PROBLEMI CON LA QUERY
      .then((response) => response.json())
      .then((data) => {
        console.log("Film recuperati:", data)
        setMovies(data.Search || [])
      })
      .catch((err) => {
        console.log("Errore:", err)
      })
  }

  const navigate = useNavigate()

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <Container fluid>
      <h4 className="mb-3">{props.title}</h4>
      <div>
        <Row xs={1} sm={2} md={3} lg={4} xxl={4} className="mb-4  g-2">
          {movies
            .filter((movie) => movie.Poster !== "N/A")
            .map((movie) => (
              <Col
                key={movie.imdbID}
                className="mb-2 px-1 movie-col"
                onClick={() => {
                  navigate(`/movie-details/${movie.imdbID}`)
                }}
              >
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

export default TvShows
