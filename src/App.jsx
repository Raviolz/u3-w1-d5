import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NetflixNav from "./Components/NetflixNav"
import NetflixFooter from "./Components/NetflixFooter"
import MoviesRow from "./Components/MoviesRow"
import NetflixSelection from "./Components/NetflixSelection"

function App() {
  return (
    <div className="body d-flex flex-column min-vh-100">
      <NetflixNav />
      <NetflixSelection></NetflixSelection>
      <main className="flex-grow-1">
        <MoviesRow title="Harry Potter" query="Harry Potter" />
        <MoviesRow title="Lord of the Rings" query="Lord of the Rings" />
        <MoviesRow title="Game Of Thrones" query="Game Of Thrones" />
      </main>
      <NetflixFooter />
    </div>
  )
}

export default App
