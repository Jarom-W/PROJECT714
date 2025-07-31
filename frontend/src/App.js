// my-react-app/src/App.jsx
import './App.css'; // Keep your existing CSS
import logo from "./assets/shrek.jpg";
import ghlogo from "./assets/ghlogo.png";
import lilogo from "./assets/lilogo.png";

function App() {


  return (
<>
    <div className="App">
	<div className="header-container">

	  	<img className="main-image" src={logo} alt="Logo" />
	  		
	  		<div className="tab-wrapper">

	  			<button className="tab-btn"><u>Home</u></button>
	  
	  			<button className="tab-btn"><u>Sign Up</u></button>

	  			<button className="tab-btn"><u>About</u></button>

	  		</div>
	  </div>
	<div className="main-content-container">
		Test
	</div>
    </div>
    <footer className="app-footer">
	  	<div className="footer-content">
	  		<div className="footer-section about">
	  			<h3>About</h3>
	  			<p>Lorem Ipsum</p>
	  		</div>
	  		<div className="footer-section links">
	  			<h3>Quick Links</h3>
	  			<ul>
	  				<li><a href="/">Placeholder</a></li>
	  				<li><a href="/">Placeholder</a></li>
	  			</ul>
	  		</div>

	  		<div className="footer-section social">
	  			<h3>Connect with me!</h3>
	  				<div className="social-icons">
	  					<a href="https://www.linkedin.com/in/jarom-wardwell-9b8121214/" target="_blank" rel="noopener noreferrer">

	  						<img src={lilogo} alt="Logo" />
	  					</a>
	  					<a href="https://github.com/Jarom-W" target="_blank" rel="noopener noreferrer" className="social-logo">

	  						<img src={ghlogo} alt="Logo" />
	  					</a>
	  				</div>
	  		</div>
	  
	  	</div>
	  	<div className="footer-bottom">
	  		<p>&copy; {new Date().getFullYear()} Lorem Ipsum. All rights reserved.</p>
	  	</div>
    </footer>
</>
  );
}

export default App;
