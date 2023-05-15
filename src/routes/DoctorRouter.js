import Router from 'express';
import DoctorController from '../controllers/DoctorController.js';

const doctorRouter = new Router();

doctorRouter.get    ('/',       DoctorController.getAll)
doctorRouter.get    ('/:id',    DoctorController.getOne)
doctorRouter.post   ('/',       DoctorController.create)
doctorRouter.put    ('/',       DoctorController.update)
doctorRouter.delete ('/:id',    DoctorController.delete)

export default doctorRouter;