import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './jquery';
import './style.css';

function Home() {
  return (
    <>
      <header className="main-header clearfix" role="header">
        <div className="logo">
          <a href="#top"><em>Grad</em> Escola</a>
        </div>
        <a href="#menu" className="menu-link"><i className="fa fa-bars"></i></a>
        <nav id="menu" className="main-nav" role="navigation">
          <ul className="main-menu">
            <li><a href="/">Home</a></li>
            <li className=""><a href="/#about-us"id="#about-us">About Us</a>
            </li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="./register" className="external">Register</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Banner */}
      <section className="section main-banner" id="top" data-section="section1">
        <video autoPlay muted loop id="bg-video">
          <source src="images/course-video.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay header-text">
          <div className="caption">
            <h6>Graduate School of Management</h6>
            <h2><em>Your</em> Classroom</h2>
            <div className="main-button">
              <div className="scroll-to-section"><a href="#bout-us">Discover more</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      
  <section class="features" id="features">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-12">
          <div class="features-post">
            <div class="features-content">
              <div class="content-show">
                <h4><i class="fa fa-pencil"></i>All Courses</h4>
              </div>
              <div class="content-hide">
                <p>Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.</p>
                <p class="hidden-sm">Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.</p>
                <div class="scroll-to-section"><a href="#section2">More Info.</a></div>
            </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="features-post second-features">
            <div class="features-content">
              <div class="content-show">
                <h4><i class="fa fa-graduation-cap"></i>Virtual Class</h4>
              </div>
              <div class="content-hide">
                <p>Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.</p>
                <p class="hidden-sm">Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.</p>
                <div class="scroll-to-section"><a href="#section3">Details</a></div>
            </div>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-12">
          <div class="features-post third-features">
            <div class="features-content">
              <div class="content-show">
                <h4><i class="fa fa-book"></i>Real Meeting</h4>
              </div>
              <div class="content-hide">
                <p>Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.</p>
                <p class="hidden-sm">Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.</p>
                <div class="scroll-to-section"><a href="#section4">Read More</a></div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

 {/* About Us Section */}
<section className="about-us" id="about-us">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="section-heading">
          <h2>About Us</h2>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Who We Are</h4>
        <p>At Grad School, we are a leading institution dedicated to providing quality education in the field of graduate studies. Our mission is to foster academic excellence, leadership, and innovation, preparing students to succeed in the ever-evolving world.</p>
      </div>
      <div className="col-md-6">
        <h4>Our Vision</h4>
        <p>Our vision is to become a premier institution for graduate education, providing our students with the knowledge, skills, and opportunities to excel in their careers and contribute positively to society.</p>
      </div>
    </div>
  </div>
</section>



      {/* Course Section */}
      <section className="section courses"id="courses" data-section="section4">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="section-heading">
          <h2>Choose Your Course</h2>
        </div>
      </div>
      <div className="col-12">
        <div id="courseCarousel" className="carousel slide" data-ride="carousel" data-interval="3000">
          <div className="carousel-inner">
            {/* <!-- Carousel Item 1 --> */}
            <div className="carousel-item active">
              <div className="row">
                {/* <!-- Course Card 1 --> */}
                <div className="col-md-4">
                  <div className="card">
                    <img className="card-img-top" src="/images/choose-us-image-01.png" alt="Software Development" />
                    <div className="card-body">
                      <h5 className="card-title">Software Development</h5>
                      <p className="card-text">Learn how to create and maintain software applications.</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Course Card 2 --> */}
                <div className="col-md-4">
                  <div className="card">
                    <img className="card-img-top" src="/images/choose-us-image-02.png" alt="Building Constructions" />
                    <div className="card-body">
                      <h5 className="card-title">Building Constructions</h5>
                      <p className="card-text">Master the art of building and construction management.</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Course Card 3 --> */}
                <div className="col-md-4">
                  <div className="card">
                    <img className="card-img-top" src="/images/choose-us-image-03.png" alt="Accounting" />
                    <div className="card-body">
                      <h5 className="card-title">Accounting</h5>
                      <p className="card-text">Understand financial records and accounting principles.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Carousel Item 2 --> */}
          

            {/* <!-- You can add more carousel items here in the same format --> */}
          </div>

          {/* <!-- Carousel Controls --> */}
          <a className="carousel-control-prev" href="#courseCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#courseCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
{/* About Us Section */}




      {/* Contact Section */}
      <section className="section contact" id="contact" data-section="section6">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Let’s Keep In Touch</h2>
              </div>
            </div>
            <div className="col-md-6">
              <form id="contact" action="" method="post">
                <div className="row">
                  <div className="col-md-6">
                    <fieldset>
                      <input name="name" type="text" className="form-control" id="name" placeholder="Your Name" required />
                    </fieldset>
                  </div>
                  <div className="col-md-6">
                    <fieldset>
                      <input name="email" type="email" className="form-control" id="email" placeholder="Your Email" required />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your message..." required></textarea>
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="button">Send Message Now</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div id="map">
                <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="422px" frameBorder="0" style={{ border: "0" }} allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p><i className="fa fa-copyright"></i> Copyright 2020 by Grad School  
               | Design: <a href="https://templatemo.com" rel="sponsored" target="_parent">TemplateMo</a><br />
               Distributed By: <a href="https://themewagon.com" rel="sponsored" target="_blank">ThemeWagon</a></p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
