import DoctorService from "../services/DoctorService.js";

class DoctorController {
    async create(req, res) {
        try {
            const doctor = await DoctorService.create(req.body); 
            return res.status(200).json(doctor)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async getAll(req, res) {
        try {
            const doctors = await DoctorService.getAll();
            return res.status(200).json(doctors)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async getOne(req, res) {
        try {
            const doctor = await DoctorService.getOne(req.params.id);
            return res.status(200).json(doctor)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async update(req, res) {
        try {
            const updatedDoctor = await DoctorService.update(req.body) 
            return res.status(200).json(updatedDoctor)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const deletedDoctor = await DoctorService.delete(req.params.id) 
            return res.status(200).json(deletedDoctor)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }
}

export default new DoctorController();
