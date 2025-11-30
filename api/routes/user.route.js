import express from 'express';
// Don't forget to add .js extension to avoid getting module not found error
import { user } from '../controllers/user.controller.js';

const router = express.Router();
// Define user route handlers here
router.get('/', user);

export default router;
