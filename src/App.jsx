import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NetflixNav from "./Components/NetflixNav"
import NetflixFooter from "./Components/NetflixFooter"
import MoviesRow from "./Components/MoviesRow"
import NetflixSelection from "./Components/NetflixSelection"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TvShows from "./Components/TvShows"
import MovieDetails from "./Components/MovieDetails"

function App() {
  return (
    <BrowserRouter>
      <div className="body d-flex flex-column min-vh-100">
        <NetflixNav />
        <Routes>
          <Route path="/tvshows" element={<TvShows />} />

          <Route path="/movie-details/:movieId" element={<MovieDetails />} />
          <Route
            path="/"
            element={
              <>
                <NetflixSelection />
                <main className="flex-grow-1">
                  <MoviesRow title="Harry Potter" query="Harry Potter" />
                  <MoviesRow title="Lord of the Rings" query="Lord of the Rings" />
                  <MoviesRow title="Game Of Thrones" query="Game Of Thrones" />
                </main>
              </>
            }
          />
        </Routes>
        <NetflixFooter />
      </div>
    </BrowserRouter>
  )
}

export default App
