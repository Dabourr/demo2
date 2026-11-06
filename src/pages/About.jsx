import { images, atmosphere } from '../assets/data'

function About() {
  return (
    <>
      <section className="page-header" style={{ backgroundImage: `url(${images.pageAbout})` }}>
        <div className="hero-overlay"></div>
        <div className="container page-header-content">
          <p className="eyebrow">About Us</p>
          <h1>Our Story</h1>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split-image">
            <img src={images.story} alt="Head chef preparing a dish" />
          </div>
          <div className="split-text">
            <p className="eyebrow">Since 2012</p>
            <h2>From a Family Kitchen to Harbor Street</h2>
            <p>
              Ember &amp; Olive began with Chef Elena Marin and a simple idea: bring the slow, generous
              cooking of her grandmother's seaside village to Portland. What started as a twelve-table
              bistro has grown into a neighborhood favorite.
            </p>
            <p>
              Today, our team still cooks the same way, over open flame, with olive oil pressed from
              family groves and recipes that have been passed down for three generations.
            </p>
            <div className="stats">
              <div>
                <strong>14</strong>
                <span>Years of service</span>
              </div>
              <div>
                <strong>40+</strong>
                <span>Seasonal dishes</span>
              </div>
              <div>
                <strong>12</strong>
                <span>Local farm partners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split reverse">
          <div className="split-image">
            <img src={images.mission} alt="Warm restaurant dining area" />
          </div>
          <div className="split-text">
            <p className="eyebrow">Our Mission</p>
            <h2>Honest Food, Shared Together</h2>
            <p>
              We believe great food should be simple, seasonal and shared. Our mission is to serve
              dishes that respect their ingredients and the people who grow them.
            </p>
            <ul className="mission-list">
              <li>Sourcing from local farms and sustainable fisheries</li>
              <li>Cooking everything from scratch, every day</li>
              <li>Creating a warm space where every guest feels at home</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Atmosphere</p>
            <h2>Step Inside</h2>
            <p>Candlelit tables, an open kitchen and a bar made for long conversations.</p>
          </div>
          <div className="atmosphere-grid">
            {atmosphere.map((item) => (
              <div className="atmosphere-item" key={item.title}>
                <img src={item.src} alt={item.title} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About
