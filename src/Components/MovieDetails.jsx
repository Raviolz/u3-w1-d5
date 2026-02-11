import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const movieUrl = "https://www.omdbapi.com/?apikey=ac879cbd"

const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    fetch(movieUrl + "&i=" + movieId)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data)
      })
      .catch((err) => console.log(err))
  }, [movieId])

  if (!movie) return <p>Loading...</p>

  return (
    <div className=" d-flex flex-column align-items-center p-4 text-white">
      <h2 className="text-center mb-4">{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  )
}

export default MovieDetails
