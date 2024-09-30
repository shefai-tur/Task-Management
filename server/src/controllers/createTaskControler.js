const taskModel = require("../model/taskModel");
const userModel = require("../model/userModel");

const createTaskControler =  async (req, res) => {
  try {
    const { title, desc } = req.body;
    const { id } = req.headers;
    const newTask = new taskModel({ title: title, desc: desc });
    const saveTask = await newTask.save();
    const taskId = saveTask._id;
    await userModel.findByIdAndUpdate(id, { $push: { tasks: taskId._id } });
    res.status(200).json({ message: "Task Created" });
  } catch (error) {
    console.log(error);

    res.status(400).json({ message: "internal server Error" });
  }
};

module.exports = createTaskControler;
