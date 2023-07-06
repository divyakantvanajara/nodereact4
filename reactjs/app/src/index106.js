import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var output =(<div>
    <nav className="navbar navbar-expand-xl navbar-dark bg-dark fixed-top mb-5">
      <div className="container-fluid">
      <a id="home" class="navbar-brand" >The shiv Rudra Story</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse show" id="navbarBasic">
          <ul className="navbar-nav me-auto mb-2 mb-xl-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutus">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#courses">Temple of shiva</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">Category</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactus">Contacts us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div id="carouselWithIndicators" className="carousel slide" data-bs-ride="carousel mt-5">
      <ol className="carousel-indicators">
        <li data-bs-target="#carouselWithIndicators" data-bs-slide-to={0} className="active" />
        <li data-bs-target="#carouselWithIndicators" data-bs-slide-to={1} />
        <li data-bs-target="#carouselWithIndicators" data-bs-slide-to={2} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="1.jpg" className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="2.jpg" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="3.jpg" className="d-block w-100" alt="Slide 3" />
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
    <div className="container mt-5">
      <div className="row mb-3">
        <div className="col-12 mb-3">
          <h2 id="aboutus" className="border-bottom">About us</h2>
        </div>
        <div className="col-5">
          <img src="4.jpg" className="img-fluid img-thumbnail shadow" alt=''/>
        </div>
        <div className="col-7">
          <h3>Story Of Shiva?</h3>
          <p>Shiva (Siva) is one of the most important gods in the Hindu pantheon and is considered a member of the holy trinity (trimurti) of Hinduism with Brahma and Vishnu. A complex character, he may represent goodness, benevolence and serve as the Protector. He is also associated with Time, and particularly as the destroyer and creator of all things.
            In Hinduism, the universe is thought to regenerate in cycles (every 2,160,000,000 years). Shiva destroys the universe at the end of each cycle which then allows for a new Creation. Shiva is also the great ascetic, abstaining from all forms of indulgence and pleasure, concentrating rather on meditation as a means to find perfect happiness. He also has a darker side as the leader of evil spirits, ghosts and as the master of thieves, villains and beggars. Shiva is the most important Hindu god for the Shaivism sect, the patron of Yogis and Brahmins, and also the protector of the Vedas, the sacred texts.
            Shiva, Parvati &amp; Ganesha<br />Shiva's wife was Parvati, often incarnated as Kali and Durga. She was in fact a reincarnation of Sati (or Dakshayani), the daughter of the god DakshaDaksha did not approve of Sati's marriage to Shiva and even went further and held a special sacrificial ceremony to all the gods except Shiva. Outraged at this slight, Sati threw herself on the sacrificial fire. Shiva reacted to this tragedy by creating two demons (Virabhadra and Rudrakali) from his hair who wreaked havoc on the ceremony and beheaded Daksha</p>
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-12 mb-3">
          <h2 id="courses" className="border-bottom">Temple of Shiva</h2>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="card shadow">
            <img src="5.jpg" className="card-img-top" alt="card-img-top" />
            <div className="card-body">
              <h4 className="border-bottom">The Bhavnath Mahadev </h4>
              <p className="card-text">The Bhavnath Mahadev temple is a shrine ensconced in myths and legends of the Puranic era, at the base of Mount Girnar in Bhavnath village. The Shiva ling here is said to have emerged of its own divine intention.</p>
              <a href="#" className="btn btn-dark">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="card shadow">
            <img src="6.jpg" className="card-img-top" alt="card-img-top" />
            <div className="card-body">
              <h4 className="border-bottom">Shree Somnath Jyotirling </h4>
              <p className="card-text">The Somnath temple, also called Somanātha temple or Deo Patan, is a Hindu temple located in Prabhas Patan, Veraval in Gujarat, India. It is one of the most sacred pilgrimage sites for Hindus and is believed to be.</p>
              <a href="#home" className="btn btn-dark">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="card shadow">
            <img src="7.jpg" className="card-img-top" alt="card-img-top" />
            <div className="card-body">
              <h4 className="border-bottom">Mahakaleshwar Jyotirling</h4>
              <p className="card-text">Mahakaleshwar Jyotirlinga is a Hindu temple dedicated to Shiva and is one of the twelve Jyotirlingas, shrines which are said to be the most sacred abodes of Shiva. It is located in the ancient city of Ujjain in .</p>
              <a href="#home" className="btn btn-dark">Read More</a>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <div className="card shadow">
            <img src="8.jpg" className="card-img-top" alt="card-img-top" />
            <div className="card-body">
              <h4 className="border-bottom">Omkareshwarn Jyotirling</h4>
              <p className="card-text">Omkareshwar is a Hindu temple dedicated to Shiva, located in Mandhata, nearby Khandwa city in Khandwa district of the Indian state of Madhya Pradesh. It is one of the 12 revered Jyotirlinga shrines of Shiva    .</p>
              <a href="#home" className="btn btn-dark">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid mb-5 bg-light p-5">
      <div className="row">
        <div className="col-10 offset-1">
          <div className="row">
            <div className="col-12 mb-3">
              <h2 id="products" className="border-bottom">Catagory</h2>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card shadow">
                <div className="row g-0">
                  <div className="col-5 col-sm-4">
                    <img src="9.jpg" className="img-fluid w-100" alt="card-horizontal-image" />
                  </div>
                  <div className="col-7 col-sm-8">
                    <div className="card-body">
                      <h4 className="card-title">Shiva in Mythology</h4>
                      <p className="card-text">As with any major god, Shiva was involved in many adventurous episodes which illustrate his virtuous character and offer instruction on how to live correctly.</p>
                      <a href="#" className="btn btn-dark">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="card shadow">
                <div className="row g-0">
                  <div className="col-7 col-sm-8">
                    <div className="card-body">
                      <h4 className="card-title">Shiva in Art</h4>
                      <p className="card-text">In Asian art Shiva may be represented in slightly different ways depending on the particular culture: Indian, Cambodian, Javanese etc. but he is most common.</p>
                      <a href="#" className="btn btn-dark">Read More</a>
                    </div>
                  </div>
                  <div className="col-5 col-sm-4">
                    <img src="10.jpg" className="img-fluid w-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container mb-3">
      <div className="row">
        <div className="col-12 mb-3">
          <h2 id="contactus" className="border-bottom">Contact us</h2>
        </div>
        <div className="col-12">
          <div className="card shadow">
            <div className="card-body">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="number" className="form-control" id="mobile" placeholder="Password" />
                <label htmlFor="mobile">Mobile</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="subject" placeholder="subject" />
                <label htmlFor="subject">Subject</label>
              </div>
              <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Message" id="message" style={{"height":"100px"}} defaultValue={""} />
                <label htmlFor="message">Message</label>
              </div>
              <div>
                <button className="btn btn-dark">Submit Form</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid p-5 bg-dark">
      <div className="row">
        <div className="col-8 text-center text-white offset-2">
          <p>The easylearn Academy</p>
        </div>
      </div>
    </div>
  </div>
  

)
root.render(output);