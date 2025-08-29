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

// ✅ Add a new movie
const postPosts = async (req, res) => {
  try {
    const addmovie = new movieData(req.body);
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

// ✅ Update movie by ID
const updatePosts = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMovie = await movieData.findByIdAndUpdate(id, req.body, { new: true });
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
