const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    movie_name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    movie_desc: {
      type: String,
      required: true,
      trim: true
    },
    director_name: {
      type: String,
      required: true,
      trim: true
    },
    release_date: {
      type: Date,
      required: true
    },
    movie_image: {   // ✅ Image URL (Cloudinary / uploads folder)
      type: String,
      required: false
    },
    movie_video: {   // ✅ Video URL
      type: String,
      required: false
    }
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
