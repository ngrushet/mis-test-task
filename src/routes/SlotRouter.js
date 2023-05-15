import Router from 'express';
import SlotController from '../controllers/SlotController.js';

const slotRouter = new Router();

slotRouter.get    ('/',       SlotController.getAll)
slotRouter.get    ('/:id',    SlotController.getOne)
slotRouter.post   ('/',       SlotController.create)
slotRouter.put    ('/',       SlotController.update)
slotRouter.delete ('/:id',    SlotController.delete)

export default slotRouter;