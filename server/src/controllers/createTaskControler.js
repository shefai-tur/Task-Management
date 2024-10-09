const task = require("../model/taskModel.js");
const user = require("../model/userModel.js");

const createTaskControler = async (req, res) => {
  try {
    const { title, desc } = req.body;
    const { id } = req.headers;

    const newTask = new task({ title, desc });
    const saveTask = await newTask.save();

    const taskId = saveTask._id;
    await user.findByIdAndUpdate(id, { $push: { tasks: taskId._id } });
    res.status(200).json({ message: "Task Created" });
  } catch (error) {
    console.log(error);

    res.status(400).json({ message: "internal server Error" });
  }
};

module.exports = createTaskControler;
