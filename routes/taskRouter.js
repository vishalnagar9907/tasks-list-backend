const express = require('express');

const {
    handleGetTasksList,
    handleCreateNewTask,
    handleUpdateTaskById
} = require('../controllers/taskController')

const router = express.Router();



router.get('/list_tasks', handleGetTasksList);

router.post('/create_task', handleCreateNewTask);

router.patch('/update_task/:id', handleUpdateTaskById);

module.exports = router
