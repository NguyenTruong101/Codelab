import express from 'express';
const router = express.Router();
// import checkAuth from '../middleware/checkAuth.js';
// import register from '../controllers/signUp.js';
import login from '../controllers/admin/adminSignin.js';
// import getCurrentUser from '../Controllers/getCurrentUser.js';

// router.post('/signup', register);
router.post('/signin', login);
// router.get('/get-current-user', checkAuth, getCurrentUser);

export default router;