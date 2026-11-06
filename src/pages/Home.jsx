import { Link } from 'react-router-dom'
import { images, menuItems } from '../assets/data'

function Home() {
  const featured = [menuItems[3], menuItems[7], menuItems[4], menuItems[10]]

  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${images.hero})` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <p className="eyebrow">Mediterranean Kitchen &amp; Grill</p>
          <h1>Where Fire Meets Flavor</h1>
          <p className="hero-text">
            Seasonal ingredients, wood-fired cooking and warm hospitality in the heart of Portland.
          </p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">View Our Menu</Link>
            <Link to="/contact" className="btn btn-outline">Find Us</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split-image">
            <img src={images.intro} alt="Signature dish at Ember & Olive" />
          </div>
          <div className="split-text">
            <p className="eyebrow">Welcome</p>
            <h2>A Taste of the Mediterranean Coast</h2>
            <p>
              At Ember &amp; Olive, every plate starts with the fire. Our open kitchen brings together
              locally sourced produce, fresh seafood and the finest cuts, all cooked over oak and olive wood.
            </p>
            <p>
              Whether it is a relaxed lunch, a family dinner or a special celebration, we are here to make
              every visit memorable.
            </p>
            <Link to="/about" className="btn btn-primary">Our Story</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Chef's Picks</p>
            <h2>Featured Dishes</h2>
            <p>A few of our guests' favorites, prepared fresh every day.</p>
          </div>

          <div className="card-grid">
            {featured.map((item) => (
              <div className="food-card" key={item.id}>
                <div className="food-card-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="food-card-body">
                  <div className="food-card-top">
                    <h3>{item.name}</h3>
                    <span className="price">${item.price}</span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="center">
            <Link to="/menu" className="btn btn-primary">See Full Menu</Link>
          </div>
        </div>
      </section>

      <section className="cta" style={{ backgroundImage: `url(${images.cta})` }}>
        <div className="hero-overlay"></div>
        <div className="container cta-content">
          <h2>Join Us for Dinner Tonight</h2>
          <p>Walk-ins welcome. Call ahead for groups of six or more.</p>
          <div className="hero-buttons">
            <a href="tel:+15035550142" className="btn btn-primary">Call (503) 555-0142</a>
            <Link to="/contact" className="btn btn-outline">Get Directions</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
