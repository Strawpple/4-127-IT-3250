import { Router } from 'express';
import defaults from '../controllers/adoptionController.js';
const { addadoption } = defaults;

const router = Router();

router.post('/adoption', addadoption);

export const routes = router;