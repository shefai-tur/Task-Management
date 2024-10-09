const user = require("../model/userModel.js");
const task = require("../model/taskModel.js");

const deleteTaskControler = async (req, res) => {
  try {
    const { id } = req.params;
    const userID = req.headers.id;
    let delteTask = await task.findByIdAndDelete(id);
    if (!delteTask) {
      res.status(400).json({ succes: false, massage: "delte Task id Not Found" });
    }
    res.status(200).json({ succes: true, massage: "Delte sucsses" });

    await user.findByIdAndUpdate(userID, { $pull: { tasks:id} });
    
  } catch (error) {
    console.log(error);
    if (!res.headersSent) {
      // Check if headers have not been sent already
      res.status(400).json({ message: "Internal server error" });
    }
   
  }
};

module.exports = deleteTaskControler;
