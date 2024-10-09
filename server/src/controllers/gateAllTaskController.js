const user = require("../model/userModel.js");
const gateAllTaskController = async (req, res) => {
  try {
    const { id } = req.headers;
    const UserData = await user
      .findById(id)
      .populate({ path: "tasks", options: { sort: { createdAt: -1 } } });
    res.status(200).json({ data: UserData });
  } catch (error) {
    console.log(error);

    res.status(400).json({ message: "internal server Error" });
  }
};

module.exports = gateAllTaskController;
