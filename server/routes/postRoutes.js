const express = require("express");
const {
  getPosts,
  postPosts,
  updatePosts,
  getidPosts,
  deletePosts,
} = require("../controllers/postControllers.js");

const upload = require("../middlewares/upload.js"); // ✅ Multer-Cloudinary middleware

const routes = express.Router();

// ✅ Get all movies
routes.get("/get", getPosts);

// ✅ Add new movie (with image + video upload)
routes.post(
  "/post",
  upload.fields([
    { name: "image", maxCount: 1 },   // handle image
    { name: "video", maxCount: 1 }    // handle video
  ]),
  postPosts
);

// ✅ Get movie by ID
routes.get("/get/:id", getidPosts);

// ✅ Update movie by ID (with image + video reupload if given)
routes.put(
  "/update/:id",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "video", maxCount: 1 }
  ]),
  updatePosts
);

// ✅ Delete movie by ID
routes.delete("/delete/:id", deletePosts);

module.exports = routes;
