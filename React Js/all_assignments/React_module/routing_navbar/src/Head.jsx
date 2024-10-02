import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
  return (
      <>
      
       <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
                <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h1 className="m-0 text-primary"> <i className="far fa-hospital me-3" /> Klinik </h1> </a>
                <button
            type="button"
            className="navbar-toggler me-4"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
        >
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to={'/'} className="nav-item nav-link active">
                Home
            </Link>
            <Link to={'/about'} className="nav-item nav-link">
                About
            </Link>
            <Link to={'/service'} className="nav-item nav-link">
                Service
            </Link>
            <Link to={'/page'} className="nav-item nav-link">
                Page
            </Link>
            <Link to={'/contact'} className="nav-item nav-link">
                Contact
            </Link>
            </div>
            {/* <a
            href=""
            className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
            >
            Appointment
            <i className="fa fa-arrow-right ms-3" />
            </a> */}
        </div>
        </nav>

      
      </>
  )
}

export default Head