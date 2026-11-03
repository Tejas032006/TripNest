
import './App.css'

const destinations = [
  {
    name: 'Goa',
    location: 'India',
    category: 'Beaches',
    price: '₹5,999',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=700'
  },
  {
    name: 'Manali',
    location: 'Himachal Pradesh',
    category: 'Mountains',
    price: '₹7,999',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=700'
  },
  {
    name: 'Jaipur',
    location: 'Rajasthan',
    category: 'Cities',
    price: '₹6,499',
    image: 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=700'
  },
  {
    name: 'Kerala',
    location: 'Kerala',
    category: 'Adventure',
    price: '₹8,499',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=700'
  }
]

function App() {
  return (
    <div className="app">

      <nav className="navbar">
        <h2>△ Trip<span>Nest</span></h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#destinations">Destinations</a>
          <a href="#about">About</a>
          <a href="#about">Contact</a>
        </div>

        <div className="nav-icons">
          <span>♡</span>
          <span>♙</span>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="tagline">⌁ Plan · Explore · Experience</p>

          <h1>
            Discover Your Next
            <span>Adventure</span>
          </h1>

          <p className="hero-description">
            Explore amazing destinations, plan your trips, and
            create memories that last a lifetime.
          </p>

          <div className="search-box">
            <span>⌕</span>
            <input placeholder="Search destinations..." />
            <button>Search</button>
          </div>
        </div>
      </section>

      <section className="destinations" id="destinations">
        <div className="section-heading">
          <div>
            <h2>📍 Popular Destinations</h2>
            <p>Explore some of the most loved places around the world.</p>
          </div>

          <div className="filters">
            <button className="active">All</button>
            <button>♨ Beaches</button>
            <button>♧ Mountains</button>
            <button>▤ Cities</button>
            <button>♧ Adventure</button>
          </div>
        </div>

        <div className="destination-grid">
          {destinations.map((place) => (
            <div className="destination-card" key={place.name}>
              <div className="card-image">
                <img src={place.image} alt={place.name} />
                <span className="category">{place.category}</span>
                <span className="heart">♡</span>
              </div>

              <div className="card-info">
                <h3>{place.name}</h3>
                <p>📍 {place.location}</p>

                <div className="card-bottom">
                  <span>⭐ 4.8 (1.2k reviews)</span>
                  <div>
                    <small>From</small>
                    <strong>{place.price}</strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer id="about">
        <h2>△ Your Journey Matters</h2>
        <p>Discover places. Create memories. Explore the world.</p>
        <p>© 2026 TripNest. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App
