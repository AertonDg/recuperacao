import express from 'express';
import {
 
  produtos,
  registerproduto
} from '../controllers/produtoController.js';

const router = express.Router();

router.post('/', registerproduto);

router.get('/', produtos);


export default router;