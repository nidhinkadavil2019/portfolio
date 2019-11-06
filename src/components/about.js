import React, {Component} from 'react';

class About extends Component{
  render(){
    return(
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>I am an experienced Senior Data Architect with a demonstrated history of working in the information technology and services industry. I am skilled in Big Data Analytics, Predictive Analytics, Internet of Things, Big Data, and Design. </p>
                      <p>I love photography, it makes moments last forever and beautiful. I am more interested in spiritual things and takes classes in chinmaya mission washington chapter. </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                <div className="col-md-3 animate-box" data-animate-effect="fadeInTop">
                    <div className="services color-3">
                      <span className="icon2"><i className="icon-data"></i></span>
                      <h3>Big Data</h3>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInRight">
                    <div className="services color-2">
                      <span className="icon2"><i className="icon-globe-outline"></i></span>
                      <h3>Informatica</h3>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInLeft">
                    <div className="services color-1">
                      <span className="icon2"><i className="icon-bulb"></i></span>
                      <h3>Internet of Things</h3>
                    </div>
                  </div>
                  <div className="col-md-3 animate-box" data-animate-effect="fadeInBottom">
                    <div className="services color-4">
                      <span className="icon2"><i className="icon-phone3"></i></span>
                      <h3>Predictive Analytics</h3>
                    </div>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-md-12 animate-box" data-animate-effect="fadeInLeft">
                    <div className="hire">
                      <h2>I am happy to know you <br />that 300+ projects done sucessfully!</h2>
                      <a href="#" className="btn-hire">Hire me</a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default About;