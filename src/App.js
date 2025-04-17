import { useEffect, useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/heder";
import Stats from "./Component/states";
function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    let scrollInterval;

    if (scrollContainer) {
      scrollInterval = setInterval(() => {
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 2; // smoother
        }
      }, 20);
    }

    return () => clearInterval(scrollInterval);
  }, []);

  const logos = [
    "https://www.beessoftware.in/wp-content/uploads/2023/06/59.png",
    "https://www.beessoftware.in/wp-content/uploads/2023/06/92.png",
    "https://www.beessoftware.in/wp-content/uploads/2023/06/88.png",
    "https://www.beessoftware.in/wp-content/uploads/2023/06/85.png",
    "https://www.beessoftware.in/wp-content/uploads/2023/06/78.png",
    "https://www.beessoftware.in/wp-content/uploads/2023/06/76.png",
    "https://www.beessoftware.in/wp-content/uploads/2023/06/63.png",
  ];

  // ✅ Define this BEFORE the return JSX
  const duplicatedLogos = [...logos, ...logos];


  return (
    <div className="App">
      <Header />

      <section
        className="hero-section py-5"
        style={{ background: "linear-gradient(to right, #def3ff, #e8fff5)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* LEFT COLUMN */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h1 className="display-4 font-weight-bold text-dark">
                BeeS{" "}
                <span className="text-primary border-bottom border-primary">
                  Growth
                </span>
                <br />
                Strategies
              </h1>
              <p className="lead mt-3 text-muted">
                Navigating the Path to Success: Insightful Consulting for
                Thriving Businesses
              </p>
              <a
                href="#"
                className="btn btn-primary btn-lg rounded-pill mt-4 px-4"
              >
                Get Started Today
              </a>
            </div>

            {/* RIGHT COLUMN */}
            <div className="col-md-6 position-relative">
              <div
                className="position-relative rounded"
                style={{
                  backgroundColor: "#24a86f", // Green background
                  borderRadius: "20px",
                  padding: "30px",
                  overflow: "hidden",
                }}
              >
                {/* Image */}
                <img
                  src="	https://www.beessoftware.in/wp-content/uploads/2023/09/1-3.png"
                  alt="Hero"
                  className="img-fluid rounded"
                  style={{
                    height: "420px",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />

                {/* Top Left Badge */}
                <div
                  className="badge-box position-absolute d-flex align-items-center bg-white shadow rounded-pill px-3 py-2"
                  style={{ top: "4%", left: "0", minWidth: "220px" }}
                >
                  <div className="text-left">
                    <h5 className="mb-0 text-primary font-weight-bold">22M+</h5>
                    <small className="text-muted">Happy Customer</small>
                  </div>
                  <div
                    className="ml-auto bg-success text-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i className="fas fa-user"></i>
                  </div>
                </div>

                {/* Bottom Left Badge */}
                <div
                  className="badge-box position-absolute d-flex align-items-center bg-white shadow rounded-pill px-3 py-2"
                  style={{ bottom: "10%", left: "0", minWidth: "220px" }}
                >
                  <div
                    className="bg-warning text-white rounded-circle d-flex align-items-center justify-content-center mr-2"
                    style={{ width: "40px", height: "40px" }}
                  >
                    <i className="fas fa-wallet"></i>
                  </div>
                  <div>
                    <small className="text-muted">Company Value</small>
                    <h5 className="mb-0 font-weight-bold text-dark">$500000</h5>
                  </div>
                </div>

                {/* Bottom Right Badge */}
                <div
                  className="badge-box position-absolute bg-white shadow rounded-pill px-4 py-2 text-center"
                  style={{ bottom: "15%", right: "0" }}
                >
                  <small className="text-muted">Success Rate</small>
                  <h5 className="text-primary font-weight-bold mb-0">98%</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* clints */}
      <section className="py-5 bg-light">
      <div className="container">
        <div className="mb-4 text-center">
          <span className="badge bg-danger text-white px-3 py-1">
            Brand We
          </span>
          <h5 className="d-inline ms-2">Work With</h5>
        </div>
        <div
          ref={scrollRef}
          className="d-flex overflow-auto gap-4 py-3 px-2 no-scrollbar"
          style={{
            scrollSnapType: "x mandatory",
            whiteSpace: "nowrap",
          }}
        >
          {duplicatedLogos.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white shadow-sm p-4 rounded d-flex align-items-center justify-content-center"
              style={{
                scrollSnapAlign: "start",
                minWidth: "140px",
                height: "120px",
              }}
            >
              <img src={src} alt={`Logo ${index}`} className="brand-icon" />
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .brand-icon {
          transition: transform 0.3s ease;
          max-height: 100%;
          max-width: 100%;
        }
        .brand-icon:hover {
          transform: scale(1.2);
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>

      {/* users */}
      <div class="bg-light py-5">
        <div class="container">
          <div class="row g-4">
            <div class="col-lg-8">
              <Stats />
            </div>

            <div class="col-lg-4">
              <div class="overlay-section text-start text-white">
                <div class="overlay-text">
                  <h2 class="fw-bold">12000+</h2>
                  <p class="fs-4 mb-0">
                    Students in 30
                    <br />
                    countries in
                    <br />
                    <strong>Europe</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ERP */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 text-center position-relative">
            <img
              src="	https://www.beessoftware.in/wp-content/uploads/2023/05/bees-banner.png"
              alt="VR Girl"
              className="img-fluid"
              style={{ maxHeight: "500px" }}
            />
          </div>

          <div className="col-lg-6">
            <h2 className="fw-bold">
              Futuristic Cloud ERP – <br />
              <span className="text-primary">Cloudilya</span>
            </h2>
            <p className="">
              Cloudilya – The ERP Sutra aims to transform traditional business
              operations and optimize performance by providing a holistic view
              of the organization's resources, including Institutions, Students,
              Finance, HCM, SCM, production, and customer relationship
              management. By integrating data from various sources and
              automating routine tasks, it enables businesses to make more
              informed decisions, streamline processes, and reduce costs.
            </p>
            <a
              href="#"
              className="btn btn-outline-primary rounded-pill px-4 py-2 fw-bold"
            >
              Discover More <span className="ms-2">+</span>
            </a>
          </div>
        </div>
      </div>
      {/* your app */}
      <div className="app-colud">
        <div class="container py-5">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <span class="badge bg-danger mb-2">
                <i class="me-1">😃</i> Bees
              </span>
              <h2 class="fw-bold mb-3">
                <br />{" "}
                <span class="text-primary">why our app useful to you?</span>
              </h2>
              <p class="text-muted mb-4">
                Work on the go – BeeS mobile application lets you work from
                anywhere at any time. There is nothing that stops you from being
                productive with BeeS mobile app.
              </p>
              <ul class="list-unstyled text-muted mb-4">
                <li class="mb-2">
                  <i class="bi bi-dot text-primary me-2"></i>Grow your business
                  the right way.
                </li>
                <li class="mb-2">
                  <i class="bi bi-dot text-primary me-2"></i>Let business growth
                  help your business grow.
                </li>
                <li>
                  <i class="bi bi-dot text-primary me-2"></i>Helping you to get
                  better.
                </li>
              </ul>
              <div class="d-flex gap-3 flex-wrap">
                <a href="#" class="btn btn-primary rounded-pill px-4 fw-bold">
                  GET STARTED <i class="bi bi-arrow-up-right ms-2"></i>
                </a>
                <a
                  href="#"
                  class="btn btn-outline-dark rounded-pill d-flex align-items-center px-3"
                >
                  <i class="bi bi-play-fill fs-4 me-2"></i> How We Works
                </a>
              </div>
            </div>
            <div class="col-lg-6 text-center">
              <img
                src="https://www.beessoftware.in/wp-content/uploads/2023/05/Manage-your-daily-tasks-1-1024x897.png"
                alt="Laptop Image"
                class="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </div>
          </div>
        </div>
        {/* expertice */}
        <div className="bg-ecp">
          <div className="container py-5">
            <div className="text-center mb-4">
              <h2 className="fw-bold">
                <span className="text-primary">BeeS Cloudilya </span> -The ERP
                Sutra Launch
              </h2>
              <p className="text-muted">
                Stay Informed, Stay Ahead: Discover Fresh Ideas and Strategies
              </p>
            </div>
            <div className="row g-4">
              {/* Card 1 */}
              <div className="col-md-6">
                <div
                  className="position-relative rounded-4 overflow-hidden"
                  style={{
                    backgroundImage:
                      "url('https://html.xpressbuddy.com/techco/assets/images/blog/blog_post_image_15.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "350px",
                    borderRadius: "1.5rem",
                  }}
                >
                  <div
                    className="position-absolute d-flex flex-column justify-content-end"
                    style={{
                      background: "rgba(255, 255, 255, 0.9)",
                      borderRadius: "1rem",
                      padding: "2rem",
                      maxWidth: "75%",
                      margin: "2rem",
                      zIndex: 2,
                      height: "auto",
                    }}
                  >
                    <h6 className="text-primary fw-semibold mb-2">Live Well</h6>
                    <h3 className="fw-bold mb-3">
                      Cloudilya-The ERP Sutra aim to transform traditional
                      business operations
                    </h3>
                    <p className="mb-0">
                      By <strong>Riley Steinmetz</strong>
                    </p>
                    <p className="text-muted">April 20, 2024</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col-md-6">
                <div
                  className="position-relative rounded-4 overflow-hidden"
                  style={{
                    backgroundImage:
                      "url('https://html.xpressbuddy.com/techco/assets/images/blog/blog_post_image_16.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "350px",
                    borderRadius: "1.5rem",
                  }}
                >
                  <div
                    className="position-absolute d-flex flex-column justify-content-end"
                    style={{
                      background: "rgba(255, 255, 255, 0.9)",
                      borderRadius: "1rem",
                      padding: "2rem",
                      maxWidth: "75%",
                      margin: "2rem",
                      zIndex: 2,
                      height: "auto",
                    }}
                  >
                    <h6 className="text-primary fw-semibold mb-2">Get Well</h6>
                    <h3 className="fw-bold mb-3">
                      Cutting-Edge Cloud-Enabled Software Product Unveiled by
                      BeeS Software Solutions
                    </h3>
                    <p className="mb-0">
                      By <strong>Riley Steinmetz</strong>
                    </p>
                    <p className="text-muted">April 20, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* patner */}
        <div class="bg-light py-5">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 mb-4 mb-lg-0">
                <h1 class="fw-bold text-dark mb-4">
                  Why Cloudilya is Important to your organization.?
                </h1>
                <p className="lead text-dark">
                  Cloudilya-The ERP Sutra is designed to integrate all of the
                  critical business processes of an organization into a single
                  system. How useful to your business:
                </p>
                <p className="lead text-dark">
                  Elevate Your Business to New Heights. Forge Unstoppable
                  Partnerships for Unbeatable Success.
                </p>

                <div className="d-flex align-items-center mt-4 gap-3">
                  <a
                    href="#"
                    className="btn btn-primary btn-lg rounded-pill px-4 fw-bold"
                  >
                    Get Started Today
                  </a>
                  <a
                    href="#"
                    className="btn btn-primary btn-lg rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "56px", height: "56px" }}
                  >
                    <i className="bi bi-arrow-up-right"></i>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 position-relative text-center">
                <img
                  src="https://html.xpressbuddy.com/techco/assets/images/about/about_image_8.webp"
                  className="img-fluid rounded-4"
                  alt="Office Image"
                />

                <div
                  className="position-absolute bottom-0 start-0 translate-middle-y bg-white shadow-lg rounded-pill d-flex align-items-center px-4 py-2"
                  style={{ left: "20%", transform: "translate(-20%, 50%)" }}
                >
                  <div
                    className="me-3 d-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "60px",
                      height: "60px",
                      background: "#ffc107",
                    }}
                  >
                    <i className="bi bi-wallet2 fs-3 text-white"></i>
                  </div>
                  <div>
                    <div className="text-muted small mb-1">Company Value</div>
                    <h4 className="fw-bold mb-0 text-primary">$500000</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* latest news */}
        <div className="latext-news">
          <div className="text-center mb-4">
            <h2 className="fw-bold">
              <span className="text-primary">Latest </span> Articles Posts
            </h2>
          </div>
          <div class="container py-5">
            <div class="row g-4">
              <div class="col-md-4">
                <div class="blog-card">
                  <img
                    src="https://www.beessoftware.in/wp-content/uploads/2023/05/WhatsApp-Image-2023-06-05-at-18.36.27.jpg"
                    class="blog-image"
                    alt="Blog Image"
                  />
                  <div class="p-3">
                    <div class="mb-2">
                      <span class="tag">Branding</span>
                      <span class="tag">UI/UX</span>
                    </div>
                    <div class="d-flex justify-content-between blog-meta mb-2">
                      <div>
                        <i class="bi bi-calendar3"></i> 11/12/2024
                      </div>
                      <div>
                        <i class="bi bi-chat-dots"></i> 24
                      </div>
                    </div>
                    <div class="blog-title mb-3">
                      Leveraging Analytics for Business Growth Modernizing...
                    </div>
                    <a href="#" class="read-more">
                      <i class="bi bi-box-arrow-up-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="blog-card">
                  <img
                    src="https://www.beessoftware.in/wp-content/uploads/2023/05/team.jpg"
                    class="blog-image"
                    alt="Blog Image"
                  />
                  <div class="p-3">
                    <div class="mb-2">
                      <span class="tag">Mobile App</span>
                    </div>
                    <div class="d-flex justify-content-between blog-meta mb-2">
                      <div>
                        <i class="bi bi-calendar3"></i> 11/12/2024
                      </div>
                      <div>
                        <i class="bi bi-chat-dots"></i> 24
                      </div>
                    </div>
                    <div class="blog-title mb-3">
                      How Emerging Technologies are Shaping the Future...
                    </div>
                    <a href="#" class="read-more">
                      <i class="bi bi-box-arrow-up-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="blog-card">
                  <img
                    src="https://www.beessoftware.in/wp-content/uploads/2023/05/News-3-Image.png"
                    class="blog-image"
                    alt="Blog Image"
                  />
                  <div class="p-3">
                    <div class="mb-2">
                      <span class="tag">Technology</span>
                    </div>
                    <div class="d-flex justify-content-between blog-meta mb-2">
                      <div>
                        <i class="bi bi-calendar3"></i> 11/12/2024
                      </div>
                      <div>
                        <i class="bi bi-chat-dots"></i> 24
                      </div>
                    </div>
                    <div class="blog-title mb-3">
                      Creating Engaging Digital for Your Audience Software...
                    </div>
                    <a href="#" class="read-more">
                      <i class="bi bi-box-arrow-up-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact us */}
        <div class="container-fluid connect-section">
          <div class="row w-100">
            <div class="col-md-6 d-flex align-items-center justify-content-center">
              {/* <img src="https://images.unsplash.com/photo-1573497169236-804d74b0375f" class="img-fluid rounded" alt="Person working" style={{maxHeight: '600px'}}/> */}
            </div>

            <div class="col-md-6 d-flex align-items-center">
              <div class="form-container w-100">
                <h6>📬 LET’S CONNECT!</h6>
                <h2 class="fw-bold">
                  Send us a message,
                  <br />
                  and we’ll promptly
                  <br />
                  discuss your project with you.
                </h2>
                <form class="mt-4 ">
                  <div class="row g-3">
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="tel"
                        class="form-control"
                        placeholder="Your Phone No."
                      />
                    </div>
                    <div class="col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Your Company Name"
                      />
                    </div>
                    <div class="col-12">
                      <textarea
                        class="form-control"
                        rows="4"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <div class="col-12">
                      <button
                        type="submit"
                        class="btn btn-light text-primary w-100 fw-bold"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <footer class="footer">
          <div class="container">
            <div class="row text-white mb-5">
              <div class="col-md-4 d-flex align-items-center mb-4 mb-md-0">
                <div class="footer-icon">
                  <i class="bi bi-envelope-fill"></i>
                </div>
                <div>
                  <div class="subtitle">Write to us</div>
                  <div class="title">admin@beessoftware.in</div>
                </div>
              </div>
              <div class="col-md-4 d-flex align-items-center mb-4 mb-md-0">
                <div class="footer-icon">
                  <i class="bi bi-telephone-fill"></i>
                </div>
                <div>
                  <div class="subtitle">Call Us</div>
                  <div class="title">+91-7093800994</div>
                </div>
              </div>
              <div class="col-md-4 d-flex align-items-center">
                <div class="footer-icon">
                  <i class="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <div class="subtitle">Our Office</div>
                  <div class="title">
                    {" "}
                    H.No:5-45/A/1, Gangasthan, (V)Dulapally, (M)Qutbullapur,
                    Hyderabad-500014, Telangana
                  </div>
                </div>
              </div>
            </div>

            <div class="row footer-bottom">
              <div class="col-md-3">
                <img src="./images/cd.png" alt="Logo" class="footer-logo" />
              </div>
              <div class="col-md-3">
                <h6 class="text-white fw-bold ">Services</h6>
                <a href="#" class="footer-link">
                  IT Consultation
                </a>
                <a href="#" class="footer-link">
                  Cloud Services
                </a>
                <a href="#" class="footer-link">
                  AI Machine Learning
                </a>
              </div>
              <div class="col-md-3">
                <h6 class="text-white fw-bold ">Information</h6>
                <a href="#" class="footer-link">
                  About Techco
                </a>
                <a href="#" class="footer-link">
                  Investors
                </a>
                <a href="#" class="footer-link">
                  Contact
                </a>
              </div>
              <div class="col-md-3">
                <h6 class="text-white fw-bold ">Product</h6>
                <a href="#" class="footer-link">
                  Case Studies
                </a>
                <a href="#" class="footer-link">
                  Our Pricing
                </a>
                <a href="#" class="footer-link">
                  Features
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
