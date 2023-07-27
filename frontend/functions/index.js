/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const axios = require('axios');
const cors = require('cors')({ origin: true });

const logger = require("firebase-functions/logger");
npm
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.mostPopularEvents = onRequest((request, response) => {
    let reply = await axios.get(`http://www.skiddle.com/api/v1/events/search/?api_key=
    ${process.env.REACT_APP_SKIDDLE_API_KEY}&order=bestselling
    &imagefilter=1&description=1`);
  
   return response.json(reply.data)
});
