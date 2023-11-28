const express = require("express");
const {
  updateUser,
  deleteUser,
  getUser,
  subscribeUser,
  unsubscribeUser,
  likeVideo,
  dislikeVideo,
} = require("../controllers/user");
const protect = require("../middlewares/auth");

const router = express.Router();

router.put("/:id", protect, updateUser);

router.delete("/:id", protect, deleteUser);

router.get("/:id", getUser);

router.put("/sub/:id", protect, subscribeUser);

router.put("/unsub/:id", protect, unsubscribeUser);

router.put("/like/:videoId", protect, likeVideo);

router.put("/dislike/:videoId", protect, dislikeVideo);

module.exports = router;
