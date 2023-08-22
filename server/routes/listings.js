const { getSavedListings } = require('../controllers/listingsController')
const { verifyJWT } = require('../middleware/auth.js')

const express = require('express')
const router = express.Router();



/* READ */
router.get("/:userId/saved", verifyJWT, getSavedListings);

module.exports = router