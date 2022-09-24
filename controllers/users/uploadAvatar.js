const fs = require('fs/promises');
const {cloudinary} = require('../../helpers/cloudinary');
const {User} = require('../../models');

const uploadAvatar = async (req, res, next) => {
    const {path: tmpUpload} = req.file;
    const {_id: id} = req.user;
    const userFolder = `avatars/${id}`;

    try {
        const uploadResponse = await cloudinary.uploader.upload(tmpUpload, {
            folder: userFolder,
            transformation: { width: 250, height: 250, crop: 'fill'},
        });
        const {secure_url: avatarURL} = uploadResponse;
        await User.findByIdAndUpdate(id, {avatarURL});
        res.json({
            status: 'success',
            code: 200,
            user: {
                avatarURL
            }
        })
    } catch (error) {
        await fs.unlink(tmpUpload);
        next(error);
    }
}

module.exports = uploadAvatar;