import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

// Example watch images (replace with your own or use Unsplash links)
const watches = [
  {
    name: "Classic Chronograph",
    img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80",
    desc: "Timeless elegance with modern precision.",
  },
  {
    name: "Minimalist Silver",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    desc: "Sleek, simple, and stunning.",
  },
  {
    name: "Sporty Black",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    desc: "Bold design for active lifestyles.",
  },
];

const testimonials = [
  {
    name: "Amit Sharma",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Absolutely love my new watch! The quality and style are unmatched.",
  },
  {
    name: "Priya Verma",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The animations and presentation are stunning. Highly recommended!",
  },
  {
    name: "Rahul Singh",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    text: "A perfect blend of luxury and technology. Will buy again.",
  },
];

const features = [
  {
    icon: "⌚",
    title: "Premium Materials",
    desc: "Crafted from the finest metals and sapphire glass for durability.",
  },
  {
    icon: "💧",
    title: "Water Resistant",
    desc: "Up to 100 meters water resistance for all adventures.",
  },
  {
    icon: "⚡",
    title: "Long Battery",
    desc: "Enjoy up to 2 years of battery life with every model.",
  },
  {
    icon: "🌙",
    title: "Night Glow",
    desc: "Luminous dials for perfect readability in the dark.",
  },
];

function App() {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      distance: '60px',
      duration: 1200,
      easing: 'cubic-bezier(0.5, 0, 0, 1)',
      origin: 'bottom',
      interval: 200,
      reset: false,
      opacity: 0,
      scale: 0.95,
    });
    ScrollReveal().reveal('.fade-in', {
      duration: 1500,
      opacity: 0,
      scale: 0.9,
      reset: false,
      interval: 300,
    });
    ScrollReveal().reveal('.slide-left', {
      origin: 'left',
      distance: '80px',
      duration: 1200,
      opacity: 0,
      reset: false,
      interval: 200,
    });
    ScrollReveal().reveal('.slide-right', {
      origin: 'right',
      distance: '80px',
      duration: 1200,
      opacity: 0,
      reset: false,
      interval: 200,
    });
  }, []);

  return (
    <div className="main-bg">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="reveal hero-title">
          Trendy Watches 2025
        </h1>
        <p className="reveal hero-desc">
          Discover the latest in luxury and style. Elevate your wrist game with our exclusive collection.
        </p>
        <img
          className="fade-in hero-img"
          src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=600&q=80"
          alt="Hero Watch"
        />
        <a
          href="#collection"
          className="reveal hero-btn"
        >
          View Collection
        </a>
        {/* Decorative graphics */}
        <div className="hero-svg">
          <svg width="100%" height="100%">
            <circle cx="90%" cy="10%" r="60" fill="#ffb34733" />
            <circle cx="10%" cy="80%" r="40" fill="#ffb34722" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="reveal section-title">
          Why Choose Us?
        </h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div
              className="slide-left feature-card"
              key={feature.title}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Watch Collection */}
      <section id="collection" className="collection-section">
        <h2 className="reveal section-title">
          Our Trending Collection
        </h2>
        <div className="collection-grid">
          {watches.map((watch) => (
            <div
              className="fade-in collection-card"
              key={watch.name}
            >
              <img
                src={watch.img}
                alt={watch.name}
                className="collection-img"
              />
              <h3 className="collection-name">{watch.name}</h3>
              <p className="collection-desc">{watch.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section with reviews and star ratings */}
      <section className="gallery-section">
        <h2 className="reveal section-title">
          Gallery: Our Watches in Action
        </h2>
        <div className="gallery-grid">
          {/* Gallery Item 1 */}
          <div className="gallery-item slide-right">
            <img
              src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
              alt="Customer with Classic Chronograph"
              className="gallery-img"
            />
            <div className="gallery-review">
              <div className="gallery-review-header">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Amit Sharma"
                  className="gallery-avatar"
                />
                <div>
                  <div className="gallery-review-name">Amit Sharma</div>
                  <div className="gallery-stars">⭐⭐⭐⭐✰ <span className="gallery-rating">4.5</span></div>
                </div>
              </div>
              <div className="gallery-review-text">
                "Absolutely love my Classic Chronograph! Looks stunning on my wrist and gets compliments everywhere."
              </div>
            </div>
          </div>
          {/* Gallery Item 2 */}
          <div className="gallery-item slide-right">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
              alt="Customer with Minimalist Silver"
              className="gallery-img"
            />
            <div className="gallery-review">
              <div className="gallery-review-header">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Priya Verma"
                  className="gallery-avatar"
                />
                <div>
                  <div className="gallery-review-name">Priya Verma</div>
                  <div className="gallery-stars">⭐⭐⭐⭐✰ <span className="gallery-rating">4.5</span></div>
                </div>
              </div>
              <div className="gallery-review-text">
                "The Minimalist Silver is so elegant and comfortable. Perfect for every occasion!"
              </div>
            </div>
          </div>
          {/* Gallery Item 3 */}
          <div className="gallery-item slide-right">
            <img
              src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80"
              alt="Customer with Sporty Black"
              className="gallery-img"
            />
            <div className="gallery-review">
              <div className="gallery-review-header">
                <img
                  src="https://randomuser.me/api/portraits/men/65.jpg"
                  alt="Rahul Singh"
                  className="gallery-avatar"
                />
                <div>
                  <div className="gallery-review-name">Rahul Singh</div>
                  <div className="gallery-stars">⭐⭐⭐⭐✰ <span className="gallery-rating">4.5</span></div>
                </div>
              </div>
              <div className="gallery-review-text">
                "Sporty Black is my go-to for workouts and parties. Stylish and tough!"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="reveal section-title">
          What Our Customers Say
        </h2>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div
              className="fade-in testimonial-card"
              key={t.name}
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="testimonial-avatar"
              />
              <p className="testimonial-text">"{t.text}"</p>
              <h4 className="testimonial-name">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="reveal cta-title">
          Ready to Elevate Your Style?
        </h2>
        <p className="reveal cta-desc">
          Shop the latest collection and experience the difference.
        </p>
        <button
          type="button"
          className="reveal cta-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Shop Now
        </button>
        {/* Decorative graphics */}
        <div className="cta-svg">
          <svg width="100%" height="100%">
            <circle cx="95%" cy="90%" r="60" fill="#23252622" />
            <circle cx="5%" cy="10%" r="40" fill="#23252611" />
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span>
          &copy; {new Date().getFullYear()} Trendy Watches &mdash; Designed by Nilesh Sinha
        </span>
      </footer>

      {/* Responsive & animation styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;800&display=swap');
          body { margin: 0; padding: 0; }
          .main-bg {
            min-height: 100vh;
            background: linear-gradient(135deg, #232526 0%, #414345 100%);
            font-family: 'Poppins', sans-serif;
            color: #fff;
            padding: 0;
            margin: 0;
          }
          .hero-section {
            min-height: 90vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: linear-gradient(120deg, #232526 60%, #ffb347 100%);
            position: relative;
            overflow: hidden;
            padding: 2rem 1rem 3rem 1rem;
          }
          .hero-title {
            font-size: 3.5rem;
            font-weight: 800;
            letter-spacing: 2px;
            margin-bottom: 1rem;
            text-shadow: 0 4px 32px #0008;
            text-align: center;
          }
          .hero-desc {
            font-size: 1.4rem;
            max-width: 600px;
            text-align: center;
            margin-bottom: 2rem;
            color: #fff9;
          }
          .hero-img {
            width: 240px;
            height: 240px;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0 8px 40px #0007;
            border: 6px solid #ffb347;
            margin-bottom: 2rem;
            animation: pulse 2s infinite alternate;
          }
          .hero-btn {
            padding: 1rem 2.5rem;
            background: linear-gradient(90deg, #ffb347 60%, #ffcc33 100%);
            color: #232526;
            font-weight: 700;
            border-radius: 40px;
            font-size: 1.2rem;
            text-decoration: none;
            box-shadow: 0 2px 16px #ffb34755;
            transition: background 0.3s;
            margin-bottom: 1.5rem;
            display: inline-block;
          }
          .hero-btn:hover {
            background: linear-gradient(90deg, #ffcc33 60%, #ffb347 100%);
            color: #232526;
          }
          .hero-svg {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none;
          }
          .features-section, .gallery-section, .testimonials-section {
            padding: 4rem 1rem 2rem 1rem;
            background: linear-gradient(120deg, #232526 60%, #414345 100%);
          }
          .features-grid, .testimonials-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2.5rem;
          }
          .feature-card {
            background: rgba(255,255,255,0.04);
            border-radius: 24px;
            box-shadow: 0 4px 32px #0003;
            padding: 2rem 1.5rem;
            max-width: 260px;
            min-width: 220px;
            text-align: center;
            border: 1.5px solid #ffb34733;
            backdrop-filter: blur(2px);
          }
          .feature-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #ffb347;
          }
          .feature-title {
            font-size: 1.2rem;
            font-weight: 700;
            margin: 0.5rem 0;
            color: #ffb347;
            letter-spacing: 1px;
          }
          .feature-desc {
            color: #fffbbd;
            font-size: 1rem;
            margin-bottom: 0;
            opacity: 0.85;
          }
          .collection-section {
            padding: 4rem 1rem 2rem 1rem;
            background: linear-gradient(120deg, #414345 60%, #232526 100%);
            min-height: 80vh;
          }
          .collection-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2.5rem;
          }
          .collection-card {
            background: rgba(255,255,255,0.04);
            border-radius: 28px;
            box-shadow: 0 4px 32px #0005;
            padding: 2rem 1.5rem 1.5rem 1.5rem;
            max-width: 320px;
            min-width: 260px;
            text-align: center;
            transition: transform 0.3s;
            border: 1.5px solid #ffb34733;
            backdrop-filter: blur(2px);
          }
          .collection-img {
            width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 18px;
            margin-bottom: 1.2rem;
            box-shadow: 0 2px 16px #ffb34744;
            border: 3px solid #ffb34722;
            transition: transform 0.3s;
          }
          .collection-name {
            font-size: 1.3rem;
            font-weight: 700;
            margin: 0.5rem 0;
            color: #ffb347;
            letter-spacing: 1px;
          }
          .collection-desc {
            color: #fffbbd;
            font-size: 1rem;
            margin-bottom: 0;
            opacity: 0.85;
          }
          .gallery-section {
            background: linear-gradient(120deg, #232526 60%, #414345 100%);
          }
          .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2.5rem;
            max-width: 1100px;
            margin: 0 auto;
          }
          .gallery-item {
            background: rgba(255,255,255,0.06);
            border-radius: 24px;
            box-shadow: 0 4px 32px #0003;
            padding: 1.5rem 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 1.5px solid #ffb34733;
            backdrop-filter: blur(2px);
          }
          .gallery-img {
            width: 100%;
            height: 220px;
            object-fit: cover;
            border-radius: 18px;
            margin-bottom: 1.2rem;
            box-shadow: 0 2px 16px #ffb34744;
            border: 3px solid #ffb34722;
            transition: transform 0.3s;
          }
          .gallery-review {
            width: 100%;
            margin-top: 0.5rem;
            background: rgba(255,255,255,0.08);
            border-radius: 14px;
            padding: 1rem;
            box-shadow: 0 2px 8px #0002;
          }
          .gallery-review-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 0.5rem;
          }
          .gallery-avatar {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #ffb34788;
          }
          .gallery-review-name {
            font-weight: 700;
            color: #ffb347;
            font-size: 1.1rem;
          }
          .gallery-stars {
            color: #ffb347;
            font-size: 1.1rem;
            font-weight: 600;
          }
          .gallery-rating {
            color: #fffbbd;
            font-size: 1rem;
            margin-left: 0.3rem;
          }
          .gallery-review-text {
            color: #fffbbd;
            font-size: 1rem;
            opacity: 0.95;
            font-style: italic;
          }
          .testimonials-section {
            background: linear-gradient(120deg, #414345 60%, #232526 100%);
          }
          .testimonials-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2.5rem;
          }
          .testimonial-card {
            background: rgba(255,255,255,0.06);
            border-radius: 24px;
            box-shadow: 0 4px 32px #0003;
            padding: 2rem 1.5rem;
            max-width: 320px;
            min-width: 220px;
            text-align: center;
            border: 1.5px solid #ffb34733;
            backdrop-filter: blur(2px);
          }
          .testimonial-avatar {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 1rem;
            border: 3px solid #ffb34755;
          }
          .testimonial-text {
            color: #fffbbd;
            font-size: 1.1rem;
            margin-bottom: 1rem;
            opacity: 0.95;
            font-style: italic;
          }
          .testimonial-name {
            color: #ffb347;
            font-weight: 700;
            font-size: 1.1rem;
            margin: 0;
          }
          .cta-section {
            padding: 4rem 1rem 4rem 1rem;
            background: linear-gradient(120deg, #ffb347 60%, #232526 100%);
            text-align: center;
            position: relative;
          }
          .cta-title {
            font-size: 2.5rem;
            font-weight: 800;
            color: #232526;
            margin-bottom: 1.5rem;
          }
          .cta-desc {
            font-size: 1.3rem;
            color: #232526cc;
            margin-bottom: 2.5rem;
          }
          .cta-btn {
            padding: 1.1rem 2.8rem;
            background: linear-gradient(90deg, #232526 60%, #414345 100%);
            color: #ffb347;
            font-weight: 700;
            border-radius: 40px;
            font-size: 1.2rem;
            text-decoration: none;
            box-shadow: 0 2px 16px #23252655;
            transition: background 0.3s;
            border: 2px solid #ffb347;
            display: inline-block;
            cursor: pointer;
          }
          .cta-btn:hover {
            background: linear-gradient(90deg, #414345 60%, #232526 100%);
            color: #ffcc33;
          }
          .cta-svg {
            position: absolute;
            bottom: 0; right: 0; width: 100%; height: 100%;
            pointer-events: none;
          }
          .footer {
            text-align: center;
            padding: 2rem 0 1rem 0;
            color: #fff8;
            font-size: 1rem;
            letter-spacing: 1px;
          }
          .section-title {
            text-align: center;
            font-size: 2.3rem;
            font-weight: 700;
            margin-bottom: 2.5rem;
            letter-spacing: 1px;
          }
          @keyframes pulse {
            0% { transform: scale(1);}
            100% { transform: scale(1.06);}
          }
          ::selection {
            background: #ffb34755;
          }
          /* Responsive Styles */
          @media (max-width: 1200px) {
            .features-grid, .collection-grid, .testimonials-grid {
              gap: 1.5rem;
            }
            .gallery-grid {
              gap: 1.2rem;
            }
          }
          @media (max-width: 900px) {
            .hero-title { font-size: 2.5rem; }
            .cta-title { font-size: 2rem; }
            .section-title { font-size: 1.7rem; }
            .hero-img { width: 180px; height: 180px; }
            .gallery-img, .collection-img { height: 140px; }
          }
          @media (max-width: 700px) {
            .features-grid, .collection-grid, .testimonials-grid {
              flex-direction: column;
              align-items: center;
            }
            .gallery-grid {
              grid-template-columns: 1fr;
            }
            .hero-section, .features-section, .collection-section, .gallery-section, .testimonials-section, .cta-section {
              padding-left: 0.5rem;
              padding-right: 0.5rem;
            }
          }
          @media (max-width: 500px) {
            .hero-title { font-size: 1.5rem; }
            .cta-title { font-size: 1.2rem; }
            .section-title { font-size: 1.1rem; }
            .hero-img { width: 120px; height: 120px; }
            .gallery-img, .collection-img { height: 80px; }
            .gallery-grid {
              grid-template-columns: 1fr;
            }
            .feature-card, .collection-card, .testimonial-card, .gallery-item {
              min-width: unset;
              max-width: 100%;
              padding: 1rem 0.5rem;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;