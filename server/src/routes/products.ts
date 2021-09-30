import { Router } from 'express';
import { productController } from '../controllers/products';
import { authController } from '../controllers/auth';

const router = Router();

router.get('/listar/:id?', productController.getProducts);
router.get('/vista-test', productController.getProductsTest);
router.post('/agregar', authController.validateLogin, productController.addProduct);
router.put('/actualizar/:id', authController.validateLogin, productController.updateProduct);
router.delete('/borrar/:id', authController.validateLogin, productController.deleteProduct);

export default router;
