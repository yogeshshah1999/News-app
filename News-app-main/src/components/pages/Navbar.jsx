import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">Aaj Tak</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon bg-success rounded-2"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-light" aria-current="page" to="/about">About</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2 rounded-0" type="search" placeholder="Search news" aria-label="Search" />
            <button className="btn btn-success rounded-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar