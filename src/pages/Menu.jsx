import { useState } from 'react'
import { images, menuItems } from '../assets/data'

const categories = ['All', 'Starters', 'Mains', 'Pasta', 'Desserts', 'Drinks']

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory)

  return (
    <>
      <section className="page-header" style={{ backgroundImage: `url(${images.pageMenu})` }}>
        <div className="hero-overlay"></div>
        <div className="container page-header-content">
          <p className="eyebrow">Fresh &amp; Seasonal</p>
          <h1>Our Menu</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category}
                className={activeCategory === category ? 'filter-btn active' : 'filter-btn'}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="card-grid">
            {filteredItems.map((item) => (
              <div className="food-card" key={item.id}>
                <div className="food-card-image">
                  <img src={item.image} alt={item.name} />
                  <span className="tag">{item.category}</span>
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
        </div>
      </section>
    </>
  )
}

export default Menu
