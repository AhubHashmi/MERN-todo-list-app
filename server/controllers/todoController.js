import todoModel from "../models/todoModel.js";
import dotenv from "dotenv";

dotenv.config();

export const todoController = async (req, res) => {
  const todo = req.body;
  try {
    const data = await todoModel.create(todo);
    console.log("Saved Successfully");
    res.status(201).send(data);
  } catch (error) {
    console.log("Error in saving todos");
    res.status(500).send({ success: false, error, message: "failed" });
  }
};

export const getTodoController = async (req, res) => {
  try {
    const todos = await todoModel.find();
    res.status(200).json(todos); // Return todos array directly
  } catch (error) {
    console.log("Error in getting todos");
    res.status(500).send({ success: false, error, message: "failed" });
  }
};

export const delTodoController = async (req, res) => {
  try {
    await todoModel.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "ToDos Deleted Successfully",
    });
  } catch (error) {
    console.log("Error in deleting todos");
    res.status(500).send({ success: false, error, message: "failed" });
  }
};

export const updateTodoController = async (req, res) => {
  const todo = req.body;
  try {
    await todoModel.findByIdAndUpdate(req.params.id, todo);
    res.status(200).send({
      success: true,
      message: "ToDos Updated Successfully",
    });
  } catch (error) {
    console.log("Error in updating todos");
    res.status(500).send({ success: false, error, message: "failed" });
  }
};
