import SlotService from "../services/SlotService.js";

class SlotController {
    async create(req, res) {
        try {
            const slot = await SlotService.create(req.body); 
            return res.status(200).json(slot)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async getAll(req, res) {
        try {
            const slots = await SlotService.getAll();
            return res.status(200).json(slots)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async getAll(req, res) {
        try {
            const slots = await SlotService.getAll();
            return res.status(200).json(slots)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async getOne(req, res) {
        try {
            const slot = await SlotService.getOne(req.params.id);
            return res.status(200).json(slot)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async update(req, res) {
        try {
            const updatedSlot = await SlotService.update(req.body) 
            return res.status(200).json(updatedSlot)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const deletedSlot = await SlotService.delete(req.params.id) 
            return res.status(200).json(deletedSlot)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }
}

export default new SlotController();
