const Comment = require("../models/Comment");
const Video = require("../models/Video");

const addComment = async (req, res, next) => {
  const { desc, videoId } = req.body;
  const newComment = new Comment({ desc, videoId, userId: req.user._id });
  try {
    const savedComment = await newComment.save();
    res.status(200).send(savedComment);
  } catch (err) {
    next(err);
  }
};

const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comment.findById(res.params.id);
    const video = await Video.findById(res.params.id);
    if (req.user.id === comment.userId || req.user.id === video.userId) {
      await Comment.findByIdAndDelete(req.params.id);
      res.status(200).json("The comment has been deleted.");
    } else {
      res.status(403);
      return next(new Error("You can delete only your comment!"));
    }
  } catch (err) {
    next(err);
  }
};

const getComments = async (req, res, next) => {
  const { videoId } = req.params;
  try {
    const comments = await Comment.find({ videoId: req.params.videoId });
    res.status(200).json(comments);
  } catch (err) {
    next(err);
  }
};

module.exports = {
    addComment, 
    deleteComment, 
    getComments,
};