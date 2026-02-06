import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NetflixNav from "./Components/NetflixNav"
import NetflixFooter from "./Components/NetflixFooter"
import MoviesRow from "./Components/MoviesRow"
import NetflixSelection from "./Components/NetflixSelection"

function App() {
  return (
    <>
      <NetflixNav />
      <NetflixSelection></NetflixSelection>
      <div className="body">
        <MoviesRow title="Harry Potter" query="Harry Potter" />
        <MoviesRow title="Lord of the Rings" query="Lord of the Rings" />
        <MoviesRow title="Game Of Thrones" query="Game Of Thrones" />
      </div>
      <NetflixFooter />
    </>
  )
}

export default App
