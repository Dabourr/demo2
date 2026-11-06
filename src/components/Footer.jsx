import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3 className="footer-logo">Ember &amp; Olive</h3>
          <p>Mediterranean kitchen and wood-fire grill, serving seasonal dishes made with care since 2012.</p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Visit Us</h4>
          <ul>
            <li>214 Harbor Street</li>
            <li>Portland, OR 97204</li>
            <li><a href="tel:+15035550142">(503) 555-0142</a></li>
            <li><a href="mailto:hello@emberandolive.com">hello@emberandolive.com</a></li>
          </ul>
        </div>

        <div>
          <h4>Hours</h4>
          <ul>
            <li>Mon – Thu: 12pm – 10pm</li>
            <li>Fri – Sat: 12pm – 11pm</li>
            <li>Sunday: 11am – 9pm</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Ember &amp; Olive. Demo website for portfolio purposes.</p>
      </div>
    </footer>
  )
}

export default Footer
