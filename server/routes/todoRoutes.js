import express from "express";
import { delTodoController, getTodoController, todoController, updateTodoController } from "../controllers/todoController.js";

const router = express.Router();

router.post("/todo", todoController);
router.get("/getTodo", getTodoController);
router.delete("/delTodo/:id", delTodoController);
router.put("/updateTodo/:id", updateTodoController);

export default router;
