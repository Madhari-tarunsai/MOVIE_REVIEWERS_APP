const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

// ✅ Single Cloudinary storage for both image & video
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    let folder = "movies/others";
    let resource_type = "auto";

    if (file.mimetype.startsWith("image")) {
      folder = "movies/images";
      resource_type = "image";
    } else if (file.mimetype.startsWith("video")) {
      folder = "movies/videos";
      resource_type = "video";
    }

    return {
      folder: folder,
      resource_type: resource_type,
    };
  },
});

const upload = multer({ storage });

module.exports = upload;
