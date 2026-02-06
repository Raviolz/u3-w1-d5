import Container from "react-bootstrap/Container"

import Dropdown from "react-bootstrap/Dropdown"

function NetflixSelection() {
  return (
    <Container fluid className=" body text-white">
      {/*SX*/}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <h2 className="mb-0">TV Shows</h2>

          <Dropdown className="ms-4">
            <Dropdown.Toggle id="dropdown-genres" size="sm" variant="outline-light" className="rounded-0 px-3">
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
        <div className="d-flex align-items-center gap-2">
          <button className="view-btn ">
            <i className="bi bi-grid"></i>
          </button>
          <button className="view-btn">
            <i className="bi bi-grid-3x3"></i>
          </button>
        </div>
      </div>
    </Container>
  )
}

export default NetflixSelection
