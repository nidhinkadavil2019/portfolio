import React, {Component} from 'react';

class Skills extends Component{
  render(){
    return(
      <div>
        <section className="colorlib-services" data-section="skills">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my Licenses & Certifications</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb"></i>
                  </span>
                  <div className="desc">
                    <h3>Informatica</h3>
                    <p>Power Center Advanced Mapping Design</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                  <span className="icon">
                    <i className="icon-data"></i>
                  </span>
                  <div className="desc">
                    <h3>Informatica</h3>
                    <p>Power Center Architecture and Administration</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                  <span className="icon">
                    <i className="icon-phone3"></i>
                  </span>
                  <div className="desc">
                    <h3>Informatica</h3>
                    <p>Informatica Power Center Mapping Design</p>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                  <span className="icon">
                    <i className="icon-layers2"></i>
                  </span>
                  <div className="desc">
                    <h3>Micro Strategy</h3>
                    <p>MicroStrategy Certified Platform Administrator (CPA)</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data"></i>
                  </span>
                  <div className="desc">
                    <h3>Micro Strategy</h3>
                    <p>MicroStrategy Certified Report Developer (CRD)</p>
                  </div>
                </div>
              </div>
              {/* <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                  <span className="icon">
                    <i className="icon-phone3"></i>
                  </span>
                  <div className="desc">
                    <h3>Application</h3>
                    <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>

    );
  }
}
export default Skills;