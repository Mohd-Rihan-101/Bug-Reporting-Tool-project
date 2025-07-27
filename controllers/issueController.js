const Issue = require("../models/Issue");

exports.reportIssue = async (req, res) => {
  const issue = await Issue.create({ ...req.body, createdBy: req.user.id });
  res.status(201).json(issue);
};

exports.getAllIssues = async (req, res) => {
  const issues = await Issue.find()
    .populate("createdBy", "name")
    .populate("assignedTo", "name");
  res.json(issues);
};

exports.updateStatus = async (req, res) => {
  const { status } = req.body;
  const issue = await Issue.findById(req.params.id);
  if (!issue) return res.status(404).json({ msg: "Issue not found" });

  issue.status = status;
  await issue.save();
  res.json(issue);
};

exports.addComment = async (req, res) => {
  const issue = await Issue.findById(req.params.id);
  if (!issue) return res.status(404).json({ msg: "Issue not found" });

  issue.comments.push({ user: req.user.id, text: req.body.text });
  await issue.save();
  res.json(issue);
};
