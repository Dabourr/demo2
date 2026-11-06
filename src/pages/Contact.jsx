import { useState } from 'react'
import { images } from '../assets/data'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setSubmitted(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = {}

    if (formData.name.trim() === '') {
      newErrors.name = 'Please enter your name.'
    }
    if (formData.email.trim() === '') {
      newErrors.email = 'Please enter your email.'
    } else if (!formData.email.includes('@') || !formData.email.includes('.')) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
    }
  }

  return (
    <>
      <section className="page-header" style={{ backgroundImage: `url(${images.pageContact})` }}>
        <div className="hero-overlay"></div>
        <div className="container page-header-content">
          <p className="eyebrow">Get in Touch</p>
          <h1>Contact Us</h1>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Visit Ember &amp; Olive</h2>
            <p>We would love to welcome you. Drop by, give us a call or send us a message.</p>

            <div className="info-block">
              <h4>Address</h4>
              <p>214 Harbor Street<br />Portland, OR 97204</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=214+Harbor+Street+Portland+OR"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Open in Google Maps &rarr;
              </a>
            </div>

            <div className="info-block">
              <h4>Phone &amp; Email</h4>
              <p>
                <a href="tel:+15035550142">(503) 555-0142</a><br />
                <a href="mailto:hello@emberandolive.com">hello@emberandolive.com</a>
              </p>
            </div>

            <div className="info-block">
              <h4>Opening Hours</h4>
              <div className="hours">
                <span>Monday – Thursday</span><span>12:00pm – 10:00pm</span>
                <span>Friday – Saturday</span><span>12:00pm – 11:00pm</span>
                <span>Sunday</span><span>11:00am – 9:00pm</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <h3>Send a Message</h3>
            <p className="demo-note">This is a frontend demo. Messages are not sent or stored.</p>

            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can we help?"
            ></textarea>
            {errors.message && <span className="error">{errors.message}</span>}

            <button type="submit" className="btn btn-primary">Send Message</button>

            {submitted && (
              <p className="success">Thank you! Your message has been received (demo only).</p>
            )}
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
