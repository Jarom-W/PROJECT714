// my-react-app/src/App.jsx
import { useState, useEffect } from 'react';
import './App.css'; // Keep your existing CSS
import logo from "./assets/shrek.jpg";
import ghlogo from "./assets/ghlogo.png";
import lilogo from "./assets/lilogo.png";

function App() {

	// Various useStates to control
  const [message, setMessage] = useState('');
  const [postResponse, setPostResponse] = useState('');
  const [error, setError] = useState(null);

	// Control if each tab is selected
	//
  const [isHome, setIsHome] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isAbout, setIsAbout] = useState(false);

  const backendUrl = 'http://localhost:3001'; // Your Node.js backend URL

  // Function to fetch a message from the backend
  const fetchMessage = async () => {
    setError(null); // Clear previous errors
    try {
      const response = await fetch(`${backendUrl}/api/message`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      console.error("Error fetching message:", err);
      setError("Failed to fetch message: " + err.message);
    }
  };

  // Function to send data to the backend via POST
  const postData = async () => {
    setError(null); // Clear previous errors
    const dataToSend = {
      name: 'React Frontend',
      value: Math.floor(Math.random() * 100)
    };

    try {
      const response = await fetch(`${backendUrl}/api/data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Backend might send JSON error
        throw new Error(`HTTP error! Status: ${response.status}, Details: ${JSON.stringify(errorData)}`);
      }

      const data = await response.json();
      setPostResponse(JSON.stringify(data, null, 2)); // Pretty print JSON
    } catch (err) {
      console.error("Error posting data:", err);
      setError("Failed to post data: " + err.message);
    }
  };

  // Fetch message when component mounts
  useEffect(() => {
    fetchMessage();
  }, []);

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
