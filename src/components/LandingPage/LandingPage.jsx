import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to hash if present in URL
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Initialize panorama viewer
    if (window.pannellum) {
      window.pannellum.viewer('panorama', {
        type: 'equirectangular',
        panorama: '/api/placeholder/2000/1000',
        autoLoad: true,
        compass: true,
        hotSpots: [
          {
            pitch: -20,
            yaw: 0,
            type: "info",
            text: "Main entrance to the cave"
          }
        ]
      });
    }

    // Setup comparison slider
    const slider = document.querySelector('.comparison-slider');
    if (slider) {
      let isDown = false;

      slider.addEventListener('mousedown', () => {
        isDown = true;
      });

      window.addEventListener('mouseup', () => {
        isDown = false;
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        
        const container = document.querySelector('.comparison-container');
        const rect = container.getBoundingClientRect();
        const position = (e.clientX - rect.left) / rect.width * 100;
        
        if (position > 0 && position < 100) {
          document.querySelector('.comparison-after').style.width = position + '%';
          slider.style.left = position + '%';
        }
      });
    }
  }, [location]);

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section id="home" className="hero" style={{backgroundImage: "url('src/assets/360_F_241761025_5bXOUhfX3pLsA1uncOrklaCl7LiSIilD-1.jpg')"}}>
  <div className="hero-content">
    <h1>Discover Kanheri Caves</h1>
    <p>Explore ancient Buddhist rock-cut monuments dating back to the 1st century BCE, nestled in the heart of Mumbai</p>
    <a href="#tour" className="btn">Start Virtual Tour</a>
  </div>
</section>

      
      {/* History Section */}
      <section id="history" className="history">
        <div className="container">
          <div className="section-title">
            <h2>Rich Heritage & History</h2>
          </div>
          <div className="history-content">
          <div class="history-text">
                    <h3>Ancient Buddhist Learning Center</h3>
                    <p>The Kanheri Caves constitute a group of rock-cut monuments carved out of basaltic rock in the forests of the Sanjay Gandhi National Park, on the former island of Salsette in the western outskirts of Mumbai, India.</p>
                    <p>Dating from the 1st century BCE to the 10th century CE, the caves demonstrate the Buddhist influence on the art and culture of ancient India. Kanheri comes from the Sanskrit word 'Krishnagiri', which means black mountain.</p>
                    <p>The site functioned as a Buddhist monastery and was an important learning center. The 109 caves are all Buddhist viharas, meant to be living, studying, and meditating spaces for monks. Most caves were used by Buddhist monks as living quarters, study rooms, and meditation cells.</p>
                    <h3>Evolution Through Centuries</h3>
                    <p>The earliest cave excavations are from the 1st and 2nd centuries BCE, showing simple designs. The later caves, dating from the 5th to 10th centuries, are more complex and feature impressive sculptures of the Buddha.</p>
                    <p>The caves display both Hinayana and Mahayana Buddhist traditions. Early caves have simpler designs with minimal decoration, while later ones feature elaborate Buddha statues and bodhisattva figures, reflecting the shift from early Buddhism to Mahayana practices.</p>
                    <h3>Historical Significance</h3>
                    <p>Kanheri served as an important center for trade and cultural exchange. Located near ancient ports, it connected with trade routes across the Indian Ocean. The numerous inscriptions found in the caves mention donors from merchant communities and guilds, indicating their economic importance.</p>
                    <p>The monastic university at Kanheri was known for Buddhist studies and attracted scholars from across Asia. Evidence suggests that manuscripts were copied and preserved here, contributing to the preservation of Buddhist texts.</p>
                </div>
            <div className="history-image">
              <img src="src\assets\elephanta-caves-tour-by-magical-mumbai-tours-13.jpg" alt="Historic view of Kanheri Caves" />
            </div>
          </div>
          
          {/* Interactive Timeline */}
          <h3 style={{textAlign: 'center', marginTop: '4rem'}}>Interactive Timeline</h3>
          <div className="timeline">
            <div class="timeline-container left">
                    <div class="timeline-content">
                        <h2>1st Century BCE</h2>
                        <p>First simple cave excavations begin, primarily viharas (living quarters)</p>
                    </div>
                </div>
                <div class="timeline-container right">
                    <div class="timeline-content">
                        <h2>1st-2nd Century CE</h2>
                        <p>Expansion under Satavahana dynasty patronage, water cisterns added</p>
                    </div>
                </div>
                <div class="timeline-container left">
                    <div class="timeline-content">
                        <h2>3rd-4th Century CE</h2>
                        <p>Development of the Great Chaitya (Cave 3) with intricate carvings</p>
                    </div>
                </div>
                <div class="timeline-container right">
                    <div class="timeline-content">
                        <h2>5th-6th Century CE</h2>
                        <p>Flourishing under Traikutaka and early Kalachuri dynasties</p>
                    </div>
                </div>
                <div class="timeline-container left">
                    <div class="timeline-content">
                        <h2>7th-8th Century CE</h2>
                        <p>Mahayana Buddhist influence, addition of elaborate Buddha figures</p>
                    </div>
                </div>
                <div class="timeline-container right">
                    <div class="timeline-content">
                        <h2>9th-10th Century CE</h2>
                        <p>Final phase of construction, Vajrayana Buddhist tantric influences</p>
                    </div>
                </div>
          </div>
        </div>
      </section>
      
      {/* Virtual Tour Section */}
      <section id="tour" className="virtual-tour">
        <div className="container">

          
          {/* Interactive Map */}
          <h3 style={{textAlign: 'center', marginTop: '4rem'}}>Interactive Cave Complex Map</h3>
          <div className="map-container">
            <img src="src\assets\11-kanheri-cave-map-Copy.jpg" alt="Map of Kanheri Caves Complex" className="map-image" />
          </div>
        </div>
      </section>
      
      {/* Buddhist Art Section */}
      <section id="art" className="buddhist-art">
        <div className="container">
          <div className="section-title">
            <h2>Buddhist Art & Iconography</h2>
          </div>
          
          <div className="art-gallery">
            <div className="art-card">
              <div className="art-image">
                <img src="/api/placeholder/400/300" alt="Buddha Sculptures" />
              </div>
              <div className="art-info">
                <h3>Buddha Representations</h3>
                <p>The evolution of Buddha imagery from symbolic representations to anthropomorphic forms.</p>
              </div>
            </div>

            <div class="art-card">
                    <div class="art-image">
                        <img src="/api/placeholder/400/300" alt="Bodhisattva Carvings"/>
                    </div>
                    <div class="art-info">
                        <h3>Bodhisattva Figures</h3>
                        <p>Elaborate carvings of compassionate beings who delay their own enlightenment to help others. The caves feature Avalokitesvara, Manjusri, and other bodhisattvas, each with distinctive iconography and attributes.</p>
                    </div>
                </div>
            
                <div class="art-card">
                    <div class="art-image">
                        <img src="/api/placeholder/400/300" alt="Narrative Reliefs"/>
                    </div>
                    <div class="art-info">
                        <h3>Narrative Panels</h3>
                        <p>Relief sculptures depicting stories from the life of Buddha and Jataka tales (stories of Buddha's previous lives). These narrative panels served as visual teaching tools for illiterate devotees and novice monks.</p>
                    </div>
                </div>
                
                <div class="art-card">
                    <div class="art-image">
                        <img src="/api/placeholder/400/300" alt="Symbolic Motifs"/>
                    </div>
                    <div class="art-info">
                        <h3>Symbolic Motifs</h3>
                        <p>Recurring symbols including lotuses, swastikas (ancient symbol of good fortune), dharma wheels, and mythical creatures. Each symbol carries specific meaning within Buddhist cosmology and philosophy.</p>
                    </div>
                </div>
          </div>
          
          {/* Before-After Comparison */}
        
        </div>
      </section>
      
      {/* Visitor Information Section */}
      <section id="visitor" className="visitor-info">
        <div className="container">
            <div className="section-title">
                <h2>Visitor Information</h2>
            </div>
            <p style={{textAlign: 'center', marginBottom: '2rem'}}>Essential information for planning your visit to Kanheri Caves</p>
            
            <div className="info-cards">
                <div className="info-card">
                    <div className="info-icon">🕒</div>
                    <h3>Opening Hours</h3>
                    <p><strong>Monday-Sunday:</strong> 7:30 AM - 5:00 PM</p>
                    <p><strong>Last Entry:</strong> 4:30 PM</p>
                    <p><strong>Closed:</strong> National Holidays</p>
                </div>
                
                <div className="info-card">
                    <div className="info-icon">💰</div>
                    <h3>Entry Fees</h3>
                    <p><strong>Indian Nationals:</strong> ₹25</p>
                    <p><strong>Foreign Nationals:</strong> ₹300</p>
                    <p><strong>Students with ID:</strong> 50% discount</p>
                    <p><strong>Children under 15:</strong> Free</p>
                </div>
                
                <div className="info-card">
                    <div className="info-icon">📍</div>
                    <h3>How to Reach</h3>
                    <p><strong>Location:</strong> Inside Sanjay Gandhi National Park, Borivali (East), Mumbai</p>
                    <p><strong>Nearest Railway Station:</strong> Borivali (4 km)</p>
                    <p><strong>Nearest Metro:</strong> Samta Nagar (6 km)</p>
                    <p><strong>By Car:</strong> Parking available at entrance</p>
                </div>
            </div>
            
            {/* <!-- Accessibility Information --> */}
            <div className="accessibility-info">
                <h3>Accessibility Information</h3>
                <p>We are committed to making heritage accessible to all visitors to the extent possible within the constraints of an ancient site.</p>
                
                <div className="accessibility-features">
                    <div className="accessibility-feature">
                        <div className="feature-icon">✓</div>
                        <div>
                            <h4>Accessible Pathways</h4>
                            <p>Paved pathways to the entrance and lower caves. Upper caves require climbing steep steps.</p>
                        </div>
                    </div>
                    
                    <div className="accessibility-feature">
                        <div className="feature-icon">✓</div>
                        <div>
                            <h4>Rest Areas</h4>
                            <p>Benches placed at regular intervals along the path for visitors who need to rest.</p>
                        </div>
                    </div>
                    
                    <div className="accessibility-feature">
                        <div className="feature-icon">✓</div>
                        <div>
                            <h4>Virtual Tours</h4>
                            <p>Virtual tour options available for those unable to access certain areas physically.</p>
                        </div>
                    </div>
                    
                    <div className="accessibility-feature">
                        <div className="feature-icon">✓</div>
                        <div>
                            <h4>Guide Assistance</h4>
                            <p>Guides can be arranged in advance to assist visitors with special needs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
};

export default LandingPage;