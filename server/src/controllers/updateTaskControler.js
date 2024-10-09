const task = require("../model/taskModel.js");
const user = require("../model/userModel.js");

const updateTaskControler = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc } = req.body;
    const updateTask = await task.findByIdAndUpdate(id, {
      title: title,
      desc: desc,
    });
    if (!updateTask) {
      res
        .status(400)
        .json({ succes: false, massage: "Update Task id Not Found" });
    }
    res.status(200).json({ succes: true, massage: "Update sucsses" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ succes: false, massage: "server internal error" });
  }
};
const updateImpTaskControler = async (req, res) => {
  try {
    const { id } = req.params;
    const taskData = await task.findById(id);
    const ImpTask = taskData.importent;
    const updateTask = await task.findByIdAndUpdate(id, {
      importent : !ImpTask,
    });
    if (!updateTask) {
      res
        .status(400)
        .json({ succes: false, massage: "Update Task id Not Found" });
    }
    res.status(200).json({ succes: true, massage: "Update sucsses" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ succes: false, massage: "server internal error" });
  }
};
const updateComplateTaskControler = async (req, res) => {
  try {
    const { id } = req.params;
    const taskData = await task.findById(id);
    const CmpTask = taskData.complate;
    const updateTask = await task.findByIdAndUpdate(id, {complate : !CmpTask });
    if (!updateTask) {
      res
        .status(400)
        .json({ succes: false, massage: "Update Task id Not Found" });
    }
    res.status(200).json({ succes: true, massage: "Update sucsses" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ succes: false, massage: "server internal error" });
  }
};

const gatImportantTaskController = async (req, res) => {
  try {
    const { id } = req.headers;
    const Data = await user.findById(id).populate({
      path: "tasks",
      match: { importent: true },
      options: { sort: { createdAt: -1 } },
    });

    const ImpTaskData = Data.tasks;
    res.status(200).json({ data: ImpTaskData });
  } catch (error) {
    console.log(error);

    res.status(400).json({ message: "internal server Error" });
  }
};
const gatComplateTaskController = async (req, res) => {
  try {
    const { id } = req.headers;
    const Data = await user.findById(id).populate({
      path: "tasks",
      match: { complate: true },
      options: { sort: { createdAt: -1 } },
    });

    const CmpTaskData = Data.tasks;
    res.status(200).json({ data: CmpTaskData });
  } catch (error) {
    console.log(error);

    res.status(400).json({ message: "internal server Error" });
  }
};
const gatInComplateTaskController = async (req, res) => {
  try {
    const { id } = req.headers;
    const Data = await user.findById(id).populate({
      path: "tasks",
      match: { complate: false },
      options: { sort: { createdAt: -1 } },
    });

    const CmpTaskData = Data.tasks;
    res.status(200).json({ data: CmpTaskData });
  } catch (error) {
    console.log(error);

    res.status(400).json({ message: "internal server Error" });
  }
};
module.exports = {
  updateTaskControler,
  updateImpTaskControler,
  updateComplateTaskControler,
  gatImportantTaskController,
  gatComplateTaskController,
  gatInComplateTaskController,
};
