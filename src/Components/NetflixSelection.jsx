import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Dropdown from "react-bootstrap/Dropdown"

function NetflixSelection() {
  return (
    <Container fluid className="px-4 body text-white">
      {/*SX*/}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <h2 className="mb-0">TV Shows</h2>

          <Dropdown className="ms-4">
            <Dropdown.Toggle id="dropdown-genres" size="sm" className="rounded-0 border-secondary footer-button">
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu className="bg-dark border-secondary">
              <Dropdown.Item href="#" className="text-white">
                Comedy
              </Dropdown.Item>
              <Dropdown.Item href="#" className="text-white">
                Drama
              </Dropdown.Item>
              <Dropdown.Item href="#" className="text-white">
                Thriller
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {/* DX */}
        <div>
          <i className="bi bi-grid navicons"></i>
          <i className="bi bi-grid-3x3 navicons"></i>
        </div>
      </div>
    </Container>
  )
}

export default NetflixSelection
