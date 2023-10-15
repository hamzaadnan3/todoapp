import express from "express"
import { deleteTasks, getMyTasks, newTask, updateTask } from "../controllers/task.js"
import { isAuthenticated } from "../middlewares/auth.js"

const router = express.Router()

router.post("/new",isAuthenticated,newTask)
router.get("/myTasks",isAuthenticated,getMyTasks)
router.route("/:id").put(updateTask).delete(deleteTasks)


export default router