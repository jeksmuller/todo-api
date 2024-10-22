import { Router } from "express";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todo.js";
import { todoIconUpload } from "../middlewares/upload.js";


// create a router
const todoRouter = Router();

// Define routes
todoRouter.get('/todos/count', countTodos),

todoRouter.post('/todos', todoIconUpload.single('icon'), addTodo)

todoRouter.get('/todos', getTodos);

todoRouter.get('/todos/:id'),


todoRouter.patch('/todos/:id', updateTodo);

todoRouter.delete('/todos/:id', deleteTodo);

// Export router
export default todoRouter;