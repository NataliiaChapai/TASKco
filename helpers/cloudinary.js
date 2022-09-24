const cloudinary = require('cloudinary').v2;

const {CLOUD_NAME, API_KEY_CLOUDINARY, API_SECRET_CLOUDINARY} = process.env;

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY_CLOUDINARY,
    api_secret: API_SECRET_CLOUDINARY
});

module.exports = {cloudinary};
