import './App.css'
import React from 'react';

const Footer = () => {
  return (
      <>
          <div className="footer">
          <div class="container-fluid">
            <footer class="row ">
                
                <div class="col">
                    <h1> FASHION </h1>
                    <p class="text-muted">Complete your style with awesome clothes from us.</p>
                </div>

                <div class="col part2">
                <h5>Company</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Contact us</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Support</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Careers</a></li>
                </ul>
                </div>

                <div class="col">
                <h5>Quick Link</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Share Location</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Orders Tracking</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Size Guide</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
                </ul>
                </div>

                <div class="col">
                <h5>Legal</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Terms & conditions</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Privacy Policy</a></li>
                </ul>
                </div>
            </footer>
            </div>
        </div>    
      </>
  )
}

export default Footer