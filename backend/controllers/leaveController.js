const Leave = require('../models/Leave');

// Get all leaves
exports.getAllLeaves = async (req, res) => {
  try {
    const leaves = await Leave.findAll();
    res.json(leaves);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new leave
exports.createLeave = async (req, res) => {
  try {
    const newLeave = await Leave.create(req.body);
    res.json(newLeave);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update leave status
exports.updateLeave = async (req, res) => {
  try {
    const leave = await Leave.findByPk(req.params.id);
    if (leave) {
      await leave.update(req.body);
      res.json(leave);
    } else {
      res.status(404).json({ error: 'Leave not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
