import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NetflixNav from "./Components/NetflixNav"
import NetflixFooter from "./Components/NetflixFooter"
import MoviesRow from "./Components/MoviesRow"

function App() {
  return (
    <>
      <NetflixNav />
      <MoviesRow title="Harry Potter" query="Harry Potter" />
      <MoviesRow title="Lord of the Rings" query="Lord of the Rings" />
      <MoviesRow title="Game Of Thrones" query="Game Of Thrones" />
      <NetflixFooter />
    </>
  )
}

export default App
