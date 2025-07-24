// Instantiate dependencies
require('dotenv').config();

const express = require('express');
const cors = require('cors');
// Declare app
const app = express();
// Port comes form .env else defaults to 3001.
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Define API endpoints

app.get('/api/message', (req, res) => {
	console.log('GET /api/message received');
	res.json({ message: "Hello World!" });
});

// Start the server
//
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}.`);
});
