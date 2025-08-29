const movieData = require("../models/postSchema.js");

// ✅ Get all movies
const getPosts = async (req, res) => {
  try {
    const allmovies = await movieData.find();
    res.status(200).json({ message: "All movies data", data: allmovies });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Add a new movie (with Cloudinary image/video)
const postPosts = async (req, res) => {
  try {
    const { movie_name, movie_desc, director_name, release_date } = req.body;

    const addmovie = new movieData({
      movie_name,
      movie_desc,
      director_name,
      release_date,
      movie_image: req.files?.image ? req.files.image[0].path : null,  // ✅ Cloudinary image URL
      movie_video: req.files?.video ? req.files.video[0].path : null   // ✅ Cloudinary video URL
    });

    await addmovie.save();
    res.status(201).json({ message: "Movie added successfully", data: addmovie });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Get movie by ID
const getidPosts = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await movieData.findById(id);
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.status(200).json({ message: "Movie found", data: movie });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Update movie by ID (update + reupload image/video if provided)
const updatePosts = async (req, res) => {
  try {
    const { id } = req.params;

    const updateData = {
      ...req.body,
    };

    if (req.files?.image) updateData.movie_image = req.files.image[0].path;
    if (req.files?.video) updateData.movie_video = req.files.video[0].path;

    const updatedMovie = await movieData.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedMovie) return res.status(404).json({ message: "Movie not found" });

    res.status(200).json({ message: "Movie updated successfully", data: updatedMovie });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Delete movie by ID
const deletePosts = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMovie = await movieData.findByIdAndDelete(id);
    if (!deletedMovie) return res.status(404).json({ message: "Movie not found" });
    res.status(200).json({ message: "Movie deleted successfully", data: deletedMovie });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getPosts, postPosts, getidPosts, updatePosts, deletePosts };
