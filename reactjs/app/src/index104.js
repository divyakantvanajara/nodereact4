import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

var output = (
    <div>
  <div className>
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark fixed-top" >
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">RDV consultancy</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDark" aria-controls="navbarDark" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse show" id="navbarDark">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#carouselWithIndicators">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#category">Category</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#aboutus">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#contactus">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#reviews">Reviews</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div id="carouselWithIndicators" className="carousel slide" data-bs-ride="carousel mt-5">
    <ol className="carousel-indicators">
      <li data-bs-target="#carouselWithIndicators" data-bs-slide-to={0} className="active" />
      <li data-bs-target="#carouselWithIndicators" data-bs-slide-to={1} />
      <li data-bs-target="#carouselWithIndicators" data-bs-slide-to={2} />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://picsum.photos/1300/400" className="d-block w-100" alt="Slide 1" />
      </div>
      <div className="carousel-item">
        <img src="https://picsum.photos/1300/401" className="d-block w-100" alt="Slide 2" />
      </div>
      <div className="carousel-item">
        <img src="https://picsum.photos/1300/402" className="d-block w-100" alt="Slide 3" />
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselWithIndicators" role="button" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselWithIndicators" role="button" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </a>
  </div>
  <div className="events-schedules-area  mt-5 " id="category">
    <div className=" ">
      <div className="section-title ml-5 " id="category">
        <span><h2>Category <hr /></h2></span>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-12 my-5">
          <div className="card">
            <img src="https://picsum.photos/200/300" className="card-img-top" alt="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Student Visa</h5>
              <p className="card-text">Studying In The canada The generom repetition jected humour, or non-characteristic words etc.</p>
              <a href className="text-dark">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 my-5">
          <div className="card">
            <img src="https://picsum.photos/200/300" className="card-img-top" alt="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Business Visa</h5>
              <p className="card-text">Business Visa Quam semper simple dummy eleifend lorem in imperdiet mauri et efficitur lorem ipsum. </p>
              <a href className="text-dark">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 my-5">
          <div className="card">
            <img src="https://picsum.photos/200/300" className="card-img-top" alt="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Job Seeker Visa</h5>
              <p className="card-text">Duis id quam semper, eleifend lorem in, imperdiet mauris simple estibulum imple et efficitur nunc. </p>
              <a href className="text-dark">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 my-5">
          <div className="card">
            <img src="https://picsum.photos/200/300" className="card-img-top" alt="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Tourist Visitor Visa</h5>
              <p className="card-text">Suspendisse lobortis eros ac blan mi aliquet justo sit amet aliquet nunc simple dummy content risus a felis. </p>
              <a href className="text-dark">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="events-schedules-area  mt-5 " id="aboutus">
    <div className=" ">
      <div className="section-title ml-5 " id="category">
        <span><h2>About Us<hr /></h2></span>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-md-12 my-5 ">
          <div className="card ">
            <div className="card-body">
              <div className="row">
                <div className="col-6">
                  <img src="https://picsum.photos/400/400"  />
                </div>
                <div className="col-sm-12 col-md-6 my-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aspernatur, ab assumenda eligendi quis praesentium pariatur
                  suscipit vel est, nihil in adipisci dolorum perferendis
                  laborum sed dolor sapiente aut modi obcaecati. Lorem ipsum,
                  dolor sit amet consectetur adipisicing elit. Repudiandae enim
                  odio tempora debitis nam omnis saepe voluptatem adipisci
                  ratione, laborum ipsa eius obcaecati deserunt sunt dolor quas,
                  possimus sed id. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Ad error porro facere. Impedit nulla in
                  suscipit rem hic voluptatibus praesentium ea dolorum corrupti
                  obcaecati est eveniet, eum ipsum adipisci accusantium.
                </div>
              </div>
            </div>
            <div className="card-footer text-end col-sm-12">
              <button className="btn btn-dark text-white">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="events-schedules-area  mt-5 " id="contactus">
    <div className=" ">
      <div className="section-title ml-5 ">
        <span><h2>Contact Us<hr /></h2></span>
      </div>
    </div>
    <div className="contact-area pb-100">
      <div className="container">
        <div className="row justify-content-center " id>
          <div className="col-lg-8 col-md-12">
            <div className="contact-form">
              <form id="contactForm">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" placeholder="Your Name*" />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" placeholder="Your Email*" />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" placeholder="Phone Number" />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="form-group">
                      <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" placeholder="Subject" />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea name="message" className="form-control" id="message" cols={30} rows={5} required data-error="Write your message" placeholder="Your Message" defaultValue={""} />
                      <div className="help-block with-errors" />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <button type="submit" className="default-btn"><i className="bx bx-chevron-right" /> Send
                      Message <span /></button>
                    <div id="msgSubmit" className="h3 text-center hidden" />
                    <div className="clearfix" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
  <div className="events-schedules-area  mt-5 " id="reviews">
    <div className=" ">
      <div className="section-title ml-5 " id="category">
        <span><h2>Reviews<hr /></h2></span>
      </div>
    </div>
    <div id="carouselExampleDark1" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to={1} aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleDark1" data-bs-slide-to={2} aria-label="Slide 3" />
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval={10000}>
          <div className="card" style={{"background-image":"url('images/whiteimages.jpg')"}}>
            <div className="card-body">
              <div className="space">
                <img src="https://picsum.photos/1300/402" alt height="150px" />
                <h1>John Doe</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum non quisquam tenetur
                  voluptate sequi voluptatum quo, itaque vitae corporis magni?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval={2000}>
          <div className="card" style={{"background-image":"url('images/whiteimages.jpg')"}}>
            <div className="card-body">
              <div className="space">
                <img src="https://picsum.photos/1300/401"  height="150px" />
                <h1>Linda </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum non quisquam tenetur
                  voluptate sequi voluptatum quo, itaque vitae corporis magni?</p>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="card" style={{"background-image":"url('images/whiteimages.jpg')"}}>
            <div className="card-body">
              <div className="space">
                <img src="https://picsum.photos/1300/403" height="150px" />
                <h1>Michal</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum non quisquam tenetur
                  voluptate sequi voluptatum quo, itaque vitae corporis magni?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark1" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div> 
  <div className="container-fluid my-5">
    {/* Footer */}
    <footer className="text-center text-lg-start text-white" style={{"background-color":"#1c2331"}}>
      {/* Section: Social media */}
      <section className="d-flex justify-content-between p-4">
      </section>
      {/* Copyright */}
      <div className="text-center p-3" style={{}}>
        © 2023 Copyright:
        <a className="text-white" href="https://theeasylearn.com/">The easylearn</a>
      </div>
      {/* Copyright */}
    </footer>
  </div></div>

)
root.render(output);

