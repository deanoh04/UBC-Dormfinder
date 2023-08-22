const Listing = require('../models/Listing.js')
const User = require('../models/User.js');

const saveListing = async (req, res) => {
    try {
        const { link, location, userId, picturePath, userPicturePath } = req.body;
        const {id} = req.params;
        const user = await User.findById(id);
        const newListing = new Listing({
            link,
            location,
            userId,
            picturePath,
            userPicturePath
        })

        user.listings.push(newListing)
        await newListing.save()
        await user.save()
        res.status(201).json(user.listings)

    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

const getSavedListings = async (req, res) => {
    try {
        const {userId} = req.params;
        const user = await User.findById(userId);
        res.status(200).json(user.listings)
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
   
}

module.exports = {
    saveListing,
    getSavedListings
}