const express = require("express");
const {
    addComment, 
    deleteComment, 
    getComments
  } = require("../controllers/comment");
const protect = require("../middlewares/auth");
const router = express.Router();

router.post("/", protect, addComment)
router.delete("/:id", protect, deleteComment)
router.get("/:videoId", getComments)

module.exports = router;