const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const role = require("../middleware/role");
const {
  reportIssue,
  getAllIssues,
  updateStatus,
  addComment
} = require("../controllers/issueController");

router.post("/", auth, reportIssue);
router.get("/", auth, getAllIssues);
router.patch("/:id/status", auth, role("developer"), updateStatus);
router.post("/:id/comment", auth, addComment);

module.exports = router;
