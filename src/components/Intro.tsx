import React from 'react';

const Intro: React.FC = () => {
	return (
		<section id="intro">
			<div className="intro-overlay"></div>	
			<div className="intro-content">
				<div className="row">
					<div className="col-twelve">
						<h1 className="new-font">DANIEL JAMES</h1>
						<p className="new-font intro-position">
							<span><a className="smoothscroll" href="#coder" style={{ color: 'white' }}>Coding</a></span>
							<span><a className="smoothscroll" href="#chess-player" style={{ color: 'white' }}>Chess</a></span>
							<span><a className="smoothscroll" href="#cuber" style={{ color: 'white' }}>Cubing</a></span>
							<span><a className="smoothscroll" href="#trader" style={{ color: 'white' }}>Algo-Trading</a></span>
						</p>
					</div>
				</div>
			</div>
			<ul className="intro-social">        
				<li><a className="smoothscroll" href="#contact"><i className="fa fa-envelope" style={{ fontSize: '30px' }}></i></a></li>
				<li><a href="http://www.linkedin.com/in/danieljames-dj" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" style={{ fontSize: '30px' }}></i></a></li>
				<li><a href="https://twitter.com/djdany444" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" style={{ fontSize: '30px' }}></i></a></li>
			</ul>
		</section>
	);
};

export default Intro;
