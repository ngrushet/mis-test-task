import Doctor from "./models/Doctor.js";

class DoctorService {
    async create(doctor) {
        const createdDoctor = await Doctor.create(doctor);
        return createdDoctor;
    }

    async getAll() {
        const doctors = await Doctor.find();
        return doctors;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('id not passed')
        }
        const doctor = await Doctor.findById(id);
        return doctor;
    }

    async update(doctor) {
        if (!doctor.id) {
            throw new Error('id not passed')
        } 
        const updatedDoctor = await Doctor.findByIdAndUpdate(doctor.id, doctor, {new: true}) 
        return updatedDoctor
    }

    async delete(id) {
        if (!id) {
            throw new Error("id not passed");
        } 
        const deletedDoctor = await Doctor.findByIdAndDelete(id) 
        return deletedDoctor
    }
}

export default new DoctorService();