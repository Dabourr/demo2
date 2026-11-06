import { images, galleryImages } from '../assets/data'

function Gallery() {
  return (
    <>
      <section className="page-header" style={{ backgroundImage: `url(${images.pageGallery})` }}>
        <div className="hero-overlay"></div>
        <div className="container page-header-content">
          <p className="eyebrow">Moments</p>
          <h1>Gallery</h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <h2>Food, Friends &amp; Firelight</h2>
            <p>A look at our kitchen, our dining room and the dishes our guests love.</p>
          </div>
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div className="gallery-item" key={image.alt}>
                <img src={image.src} alt={image.alt} />
                <span>{image.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Gallery
