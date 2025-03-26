"use client"

import { useEffect, useRef } from "react"
import "./History.css"

const History = () => {
  const timelineRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => {
      observer.observe(el)
    })

    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el)
      })
    }
  }, [])

  return (
    <div className="history-page">
      <div className="history-hero">
        <div className="history-hero-content">
          <h1>History of Kanheri Caves</h1>
          <p>Exploring the rich Buddhist heritage carved in stone</p>
        </div>
      </div>
      
      <section className="history-intro">
        <div className="container">
          <div className="section-header">
            <h2>Ancient <span className="gradient-text">Legacy</span></h2>
            <p>Discover the fascinating history of one of India's most significant Buddhist cave complexes</p>
          </div>
          
          <div className="history-intro-content">
            <div className="intro-text animate-on-scroll">
              <p>
                The Kanheri Caves constitute a group of rock-cut monuments that date from the 1st century BCE to the 10th century CE. 
                Located within the forests of the Sanjay Gandhi National Park, on the former island of Salsette in the western outskirts 
                of Mumbai, India, the caves were formed out of a massive basalt outcrop.
              </p>
              <p>
                The name Kanheri is derived from the Sanskrit word 'Krishnagiri', which means 'black mountain'. This name aptly 
                describes the dark basalt rock from which these caves were carved. Over the centuries, Kanheri became an important 
                Buddhist learning center and monastic settlement.
              </p>
              <p>
                With more than 100 caves, Kanheri represents one of the largest single excavations in India. The caves demonstrate 
                the Buddhist influence on the art and culture of India and are a testament to the ancient civilization that flourished 
                in this region.
              </p>
            </div>
            <div className="intro-image animate-on-scroll">
              <img src="/placeholder.svg?height=500&width=700" alt="Aerial view of Kanheri Caves" />
              <div className="image-caption">
                <p>Aerial view of the Kanheri Caves complex nestled in the lush forests of Sanjay Gandhi National Park</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="timeline-section" ref={timelineRef}>
        <div className="container">
          <div className="section-header">
            <h2>Historical <span className="gradient-text">Timeline</span></h2>
            <p>Tracing the development of Kanheri Caves through the centuries</p>
          </div>
          
          <div className="timeline">
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-dot"></div>
              <div className="timeline-date">
                <h3>1st Century BCE</h3>
              </div>
              <div className="timeline-content">
                <h4>Early Beginnings</h4>
                <p>
                  The earliest caves at Kanheri were excavated during the rule of the Satavahana dynasty. 
                  These initial excavations were simple dwellings (viharas) and prayer halls (chaityas) 
                  carved by Buddhist monks.
                </p>
                <img src="/placeholder.svg?height=300&width=500" alt="Early cave excavations" />
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-dot"></div>
              <div className="timeline-date">
                <h3>1st-2nd Century CE</h3>
              </div>
              <div className="timeline-content">
                <h4>Major Development Period</h4>
                <p>
                  This period saw significant expansion of the cave complex with many viharas and chaityas added. 
                  The caves became an important center for Buddhist learning and attracted scholars from 
                  various parts of India.
                </p>
                <img src="/placeholder.svg?height=300&width=500" alt="Expanded cave complex" />
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-dot"></div>
              <div className="timeline-date">
                <h3>3rd-4th Century CE</h3>
              </div>
              <div className="timeline-content">
                <h4>Patronage and Growth</h4>
                <p>
                  Under the patronage of the Traikutaka and Vakataka dynasties, Kanheri continued to expand. 
                  Many inscriptions from this period indicate donations from merchants, traders, and royal families, 
                  showing the widespread support for Buddhist institutions.
                </p>
                <img src="/placeholder.svg?height=300&width=500" alt="Inscriptions from donors" />
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-dot"></div>
              <div className="timeline-date">
                <h3>5th-6th Century CE</h3>
              </div>
              <div className="timeline-content">
                <h4>Mahayana Influence</h4>
                <p>
                  The influence of Mahayana Buddhism became prominent in the cave art and architecture during this period. 
                  Large Buddha figures, Bodhisattva images, and elaborate relief sculptures depicting scenes from 
                  Buddhist tales were added to the caves.
                </p>
                <img src="/placeholder.svg?height=300&width=500" alt="Mahayana Buddhist sculptures" />
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-dot"></div>
              <div className="timeline-date">
                <h3>7th-10th Century CE</h3>
              </div>
              <div className="timeline-content">
                <h4>Final Phase</h4>
                <p>
                  The final phase of development at Kanheri saw the creation of more elaborate sculptures and paintings. 
                  This period coincided with the rule of the Silhara dynasty, who were patrons of both Buddhism and Hinduism.
                </p>
                <img src="/placeholder.svg?height=300&width=500" alt="Late period sculptures" />
              </div>
            </div>
            
            <div className="timeline-item animate-on-scroll">
              <div className="timeline-dot"></div>
              <div className="timeline-date">
                <h3>11th Century CE</h3>
              </div>
              <div className="timeline-content">
                <h4>Gradual Decline</h4>
                <p>
                  As Buddhism waned in the region, Kanheri saw a gradual decline in activity. The caves were eventually 
                  abandoned as active religious sites, though they continued to be visited by travelers and pilgrims.
                </p>
                <img src="/placeholder.svg?height=300&width=500" alt="Abandoned caves" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="key-features">
        <div className="container">
          <div className="section-header">
            <h2>Architectural <span className="gradient-text">Features</span></h2>
            <p>Exploring the remarkable architectural elements of Kanheri Caves</p>
          </div>

          <div className="features-grid">
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 22h20M2 2h20M2 12h20M12 2v20" />
                </svg>
              </div>
              <h3>Rock-Cut Architecture</h3>
              <p>
                The caves at Kanheri showcase the evolution of Buddhist rock-cut architecture over several centuries. The
                early caves are simple and austere, while the later ones display more elaborate carvings and decorations.
              </p>
              <img src="/placeholder.svg?height=300&width=500" alt="Rock-cut architecture" />
            </div>

            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
              </div>
              <h3>Buddhist Stupas</h3>
              <p>
                Several caves contain large stupas, which are dome-shaped structures that house Buddhist relics. These
                stupas were objects of worship and meditation for the monks who lived at Kanheri.
              </p>
              <img src="/placeholder.svg?height=300&width=500" alt="Buddhist stupas" />
            </div>

            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <h3>Water Management</h3>
              <p>
                One of the most remarkable aspects of Kanheri is its sophisticated water management system. The monks
                carved channels, cisterns, and tanks into the rock to collect and store rainwater, ensuring a year-round
                water supply for the monastery.
              </p>
              <img src="/placeholder.svg?height=300&width=500" alt="Water management system" />
            </div>

            <div className="feature-card animate-on-scroll">
              <div className="feature-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <h3>Ancient Inscriptions</h3>
              <p>
                The caves contain numerous inscriptions in Brahmi, Devanagari, and Pahlavi scripts. These inscriptions
                provide valuable information about the history, donors, and religious practices at Kanheri.
              </p>
              <img src="/placeholder.svg?height=300&width=500" alt="Ancient inscriptions" />
            </div>
          </div>
        </div>
      </section>
      
      <section className="buddhist-art">
        <div className="container">
          <div className="section-header">
            <h2>Buddhist <span className="gradient-text">Art</span></h2>
            <p>Exploring the artistic treasures preserved in the Kanheri Caves</p>
          </div>
          
          <div className="art-content">
            <div className="art-text animate-on-scroll">
              <p>
                The art at Kanheri Caves represents an important chapter in the development of Buddhist art in India. 
                The caves contain a variety of artistic elements, including sculptures, relief carvings, paintings, 
                and decorative motifs.
              </p>
              <p>
                Notable features include large Buddha figures in various postures (mudras), Bodhisattva images, 
                and intricate relief sculptures depicting scenes from the life of Buddha and Buddhist tales. 
                The artistic style shows influences from different periods and schools of Buddhist art.
              </p>
              <p>
                The evolution of artistic styles at Kanheri provides insights into the changing religious practices 
                and cultural influences over the centuries. Early art is simple and focuses on Buddhist symbols, 
                while later works show more elaborate figurative representations and complex compositions.
              </p>
            </div>
            
            <div className="art-gallery animate-on-scroll">
              <div className="art-item">
                <img src="/placeholder.svg?height=300&width=400" alt="Buddha sculpture" />
                <div className="art-caption">
                  <p>Buddha sculpture in meditation pose (dhyana mudra)</p>
                </div>
              </div>
              
              <div className="art-item">
                <img src="/placeholder.svg?height=300&width=400" alt="Bodhisattva carving" />
                <div className="art-caption">
                  <p>Intricately carved Bodhisattva figure with ornate details</p>
                </div>
              </div>
              
              <div className="art-item">
                <img src="/placeholder.svg?height=300&width=400" alt="Relief panel" />
                <div className="art-caption">
                  <p>Relief panel depicting scenes from Buddhist jataka tales</p>
                </div>
              </div>
              
              <div className="art-item">
                <img src="/placeholder.svg?height=300&width=400" alt="Decorative motifs" />
                <div className="art-caption">
                  <p>Decorative motifs and patterns adorning the cave walls</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="interesting-facts">
        <div className="container">
          <div className="section-header">
            <h2>Fascinating <span className="gradient-text">Facts</span></h2>
            <p>Discover intriguing details about Kanheri Caves that make them unique</p>
          </div>
          
          <div className="facts-grid">
            <div className="fact-card animate-on-scroll">
              <div className="fact-number">01</div>
              <h3>Largest Cave Complex in Mumbai</h3>
              <p>
                With over 100 caves, Kanheri represents the largest single excavation in the Mumbai region and 
                one of the largest in India, showcasing the scale of Buddhist monastic activity in ancient times.
              </p>
            </div>
            
            <div className="fact-card animate-on-scroll">
              <div className="fact-number">02</div>
              <h3>Sophisticated Drainage System</h3>
              <p>
                The caves feature an ingenious water management system with channels carved into the rock 
                to direct rainwater into cisterns, demonstrating advanced engineering knowledge of the ancient builders.
              </p>
            </div>
            
            <div className="fact-card animate-on-scroll">
              <div className="fact-number">03</div>
              <h3>Educational Center</h3>
              <p>
                Kanheri functioned as a university where Buddhist monks studied philosophy, astronomy, mathematics, 
                and other subjects, making it an important center of learning in ancient India.
              </p>
            </div>
            
            <div className="fact-card animate-on-scroll">
              <div className="fact-number">04</div>
              <h3>Multilingual Inscriptions</h3>
              <p>
                The caves contain inscriptions in multiple languages and scripts, including Brahmi, Devanagari, 
                and Pahlavi, indicating the cosmopolitan nature of the monastery and its connections with different regions.
              </p>
            </div>
            
            <div className="fact-card animate-on-scroll">
              <div className="fact-number">05</div>
              <h3>Trade Route Connection</h3>
              <p>
                Kanheri's location near ancient ports and trade routes contributed to its prosperity, as it 
                received patronage from merchants and traders who used these routes for commerce.
              </p>
            </div>
            
            <div className="fact-card animate-on-scroll">
              <div className="fact-number">06</div>
              <h3>Continuous Occupation</h3>
              <p>
                The caves were continuously occupied for nearly a millennium, making them one of the longest-used 
                Buddhist sites in India and providing a unique window into the evolution of Buddhism over time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="preservation">
        <div className="container">
          <div className="section-header">
            <h2>Conservation <span className="gradient-text">Efforts</span></h2>
            <p>Understanding the challenges and initiatives in preserving this ancient heritage</p>
          </div>
          
          <div className="preservation-content">
            <div className="preservation-image animate-on-scroll">
              <img src="/placeholder.svg?height=500&width=700" alt="Conservation work at Kanheri" />
            </div>
            
            <div className="preservation-text animate-on-scroll">
              <p>
                Today, the Kanheri Caves are protected by the Archaeological Survey of India (ASI) as a monument of 
                national importance. Conservation efforts focus on preserving the structural integrity of the caves, 
                protecting the sculptures and inscriptions from weathering, and managing the impact of tourism.
              </p>
              <p>
                Challenges in conservation include natural weathering, water seepage, biological growth like moss and 
                lichen, and human-induced damage. The ASI employs various techniques to address these issues, including 
                chemical treatments, structural repairs, and visitor management strategies.
              </p>
              <p>
                Recent initiatives have also focused on digital documentation of the caves using 3D scanning and 
                photogrammetry to create detailed records of the site. These digital archives serve both conservation 
                and research purposes, allowing scholars to study the caves without physical intervention.
              </p>
              <p>
                Visitors to Kanheri can contribute to conservation efforts by following responsible tourism practices, 
                such as not touching the sculptures, avoiding flash photography, and staying on designated paths.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default History