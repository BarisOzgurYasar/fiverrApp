import express from 'express';
import { login, register } from '../controllers/authController.js';

const router = express.Router();

router.get('/register');
router.get('/login');

export default router;
