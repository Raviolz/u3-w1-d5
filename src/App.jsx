import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NetflixNav from "./Components/NetflixNav"
import NetflixFooter from "./Components/NetflixFooter"
import MoviesRow from "./Components/MoviesRow"

function App() {
  return (
    <>
      <NetflixNav />
      <MoviesRow />
      <NetflixFooter />
    </>
  )
}

export default App
