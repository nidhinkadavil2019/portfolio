import React, {Component} from 'react' ;

class SidebarLeft extends Component {
render(){
    return(
        <div>
            <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
            <aside id="colorlib-aside"  className="border js-fullheight">
			<div className="text-center">
				<div className="author-img" style={{backgroundImage: 'url(images/about.png)'}}></div>
				<h1 id="colorlib-logo"><a href="index.html">Nidhin Kadavil</a></h1>
				<span className="position">Sr. Data Architect/ BI Lead in Virginia</span>
                <span><small><a href="mailto:nkadavil@gmail.com">nkadavil@gmail.com</a></small></span>
			</div>
            <p></p>
			<nav id="colorlib-main-menu" role="navigation" className="navbar">
            
				<div id="navbar" className="collapse">
                
					<ul>
						<li className="active"><a href="#" data-nav-section="home">Home</a></li>
						<li><a href="#" data-nav-section="about">About</a></li>
						{/* <li><a href="#" data-nav-section="services">Services</a></li> */}
						<li><a href="#" data-nav-section="skills">Skills</a></li>
						<li><a href="#" data-nav-section="experience">Experience</a></li>
						<li><a href="#" data-nav-section="education">Education</a></li>
						{/* <li><a href="#" data-nav-section="work">Work</a></li> */}
						{/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
						{/* <li><a href="#" data-nav-section="contact">Contact</a></li> */}
				</ul>
				</div>
                
			</nav>
            <div className="colorlib-footer">
			<nav id="colorlib-main-menu">
                <ul>
					<li><a href="https://www.facebook.com/nidhin.kadavil.9" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2"></i></a></li>
					{/* <li><a href="#"><i className="icon-twitter2"></i></a></li> */}
					{/* <li><a href="#"><i className="icon-instagram"></i></a></li> */}
					<li><a href="https://www.linkedin.com/in/nidhin-kadavil-6aa5a8126/"target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2"></i></a></li>
				</ul>
                </nav>
               
				<p><small>&copy;
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> 
                All rights reserved | <a href="https://colorlib.com" target="_blank">Colorlib</a></small></p>
			</div>

		</aside>

        </div>
    )
}
        
}
export default SidebarLeft;