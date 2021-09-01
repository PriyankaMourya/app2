import React from 'react'
import logo from '../../resources/images/logo.png'

export default function footer() {
    return (
        <div>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

            <div className="row">
  <div className="col">
    
<img src={logo} width="80" />
    <h2>About Us</h2>
    <p>We are a charitable trust that gathers funds for the needy people. And help them live a better life.</p>
  </div>
  <div className="col">
    <h2>Company</h2>
    <h5>Home</h5>
    <h5>About</h5>
    <h5>Services</h5>
    <h5>Contact us</h5>
    
  </div>
  <div className="col">
   
    <h5>Donations</h5>
    <h5>Events</h5>
    <h5>Resources</h5>
  </div>
  <div className="col">
    <h2>More Info</h2>
    <h5>  <i class="fas fa-phone-alt"></i>  +91 4535563763</h5>
    <h5> <i class="fas fa-envelope"></i> charity@gmail.com</h5>
  </div>
  <div className="col">
    <h2>Follow us</h2>
    <p><i class="fab fa-facebook-f"></i> &nbsp; &nbsp;
<i class="fab fa-instagram"></i>&nbsp; &nbsp;
<i class="fab fa-twitter"></i>&nbsp; &nbsp;
<i class="fab fa-linkedin-in"></i></p>
  </div>
</div>
        </div>
    )
}