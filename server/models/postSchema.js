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
      type: Date,   // ✅ Correct type for "yy-mm-dd"
      required: true
    }
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
