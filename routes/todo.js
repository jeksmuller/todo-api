import { Router } from "express";
import { addTodo, deleteTodo, getTodos, updateTodo, countTodos } from "../controllers/todo.js";
import { todoIconUpload } from "../middlewares/upload.js";
import { isAuthentication } from "../middlewares/auth.js";


// create a router
const todoRouter = Router();

// Define routes
todoRouter.get('/todos/count', countTodos),

todoRouter.post('/todos', todoIconUpload.single('icon'), isAuthentication, addTodo)

todoRouter.get('/todos', getTodos);

todoRouter.get('/todos/:id'),


todoRouter.patch('/todos/:id', isAuthentication, updateTodo);

todoRouter.delete('/todos/:id', deleteTodo);

// Export router
export default todoRouter;