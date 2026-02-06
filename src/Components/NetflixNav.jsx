import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

function NetflixNav() {
  return (
    <Navbar expand="lg" variant="dark" className="netflix-navbar">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="./src/assets/logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="Netflix Navbar" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">TV Shows</Nav.Link>
            <Nav.Link href="#home">Movies</Nav.Link>
            <Nav.Link href="#link">Recently Added</Nav.Link>
            <Nav.Link href="#link">My List</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center text-white">
            <i className="bi bi-search mx-2 navicons"></i>
            <span className="fw-bold mx-2">KIDS</span>
            <i className="bi bi-bell mx-2 navicons"></i>
            <NavDropdown
              align="end"
              id="profile-dropdown"
              className="profile-dropdown"
              title={
                <span className="d-flex align-items-center gap-2">
                  <img className="profile-avatar" src="/src/assets/avatar.png" alt="profile" />
                  <i className="bi bi-caret-down-fill profile-caret"></i>
                </span>
              }
            >
              <NavDropdown.Item href="#profile">Manage Profiles</NavDropdown.Item>
              <NavDropdown.Item href="#account">Account</NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#signout">Sign out </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NetflixNav
