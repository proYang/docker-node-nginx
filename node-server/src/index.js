'use strict';

const express = require('express');

// Constants
const PORT = 2368;

// App
const app = express();
app.get('/', (req, res) => {
	res.send('Hello Docker World\n');
});

app.listen(PORT);
console.log(`Running on http://127.0.0.1:${PORT}`);