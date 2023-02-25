const General = require("../models/general");

exports.findById = async (req, res) => {
  const general = await General.findOne().where({ _id: req.params.id })
  if (!general) {
    res.status(500).json({ success: false })
  }
  res.send(general)
}

exports.find = (req, res) => {
  General.find().sort({ index: 1 })
    .then((general) => res.json(general))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res) => {
  const general = new General(req.body);
  general.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json(data);
  });
};

exports.update = (req, res) => {
  const general = new General(req.body);
  Pikod.updateOne(general)
    .then((general) => res.json(general))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.remove = (req, res) => {
  General.deleteOne({ _id: req.params.id })
    .then((general) => res.json(general))
    .catch((err) => res.status(400).json("Error: " + err));
};