import { Router } from "express";


const router = Router();

router.post('/file')

router.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Erro interno no servidor');
})

export default router;