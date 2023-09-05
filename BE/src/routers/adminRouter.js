import express from 'express';
const router = express.Router();
// import checkAuth from '../middleware/checkAuth.js';
// import register from '../controllers/signUp.js';
import login from '../controllers/admin/adminSignin.js';
import login from '../controllers/admin/adminSignin.js';
import { createCourseType, deleteCourseType, editCourseType, getAll } from '../controllers/admin/CourseType.js';
// import getCurrentUser from '../Controllers/getCurrentUser.js';

// router.post('/signup', register);
router.post('/signin', login);
// router.get('/get-current-user', checkAuth, getCurrentUser);
router.get('/course-type', getAll);
router.post('/course-type', createCourseType);
router.put('/course-type/:id', editCourseType);
router.delete('/course-type/:id', deleteCourseType);
export default router;