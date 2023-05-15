import Slot from "./models/Slot.js";

class SlotService {
    async create(slot) {
        const candidate = await Slot.findOne({
            user:       slot.user, 
            doctor:     slot.doctor,
            startAt:    slot.startAt,
            endAt:      slot.endAt
        });
        if (candidate) {
            throw new Error('Slot already exists');
        }
        const newSlot = await Slot.create(slot);
        return newSlot;
    }

    // для получения слотов, которые запланированы на сегодня
    // в будущем можно реализовать расширенный поиск через параметры запроса
    async getToday() {
        const slots = await Slot.find({
            startAt: {
                $gte: today,
                $lt: tomorrow
            }
        });
        return slots;
    }

    async getAll() {
        const slots = await Slot.find();
        return slots;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('id not passed')
        }
        const slot = await Slot.findById(id);
        return slot;
    }

    async update(slot) {
        if (!slot.id) {
            throw new Error('id not passed')
        } 
        const updatedSlot = await Slot.findByIdAndUpdate(slot.id, slot, {new: true}) 
        return updatedSlot
    }

    async delete(id) {
        if (!id) {
            throw new Error("id not passed");
        } 
        const deletedSlot = await Slot.findByIdAndDelete(id) 
        return deletedSlot
    }
}

export default new SlotService();