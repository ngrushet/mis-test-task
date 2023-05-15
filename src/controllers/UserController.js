import UserService from "../services/UserService.js";

class UserController {
    async create(req, res) {
        try {
            const user = await UserService.create(req.body); 
            return res.status(200).json(user)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async getAll(req, res) {
        try {
            const users = await UserService.getAll();
            return res.status(200).json(users)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async getOne(req, res) {
        try {
            const user = await UserService.getOne(req.params.id);
            return res.status(200).json(user)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async update(req, res) {
        try {
            const updatedUser = await UserService.update(req.body) 
            return res.status(200).json(updatedUser)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        try {
            const deletedUser = await UserService.delete(req.params.id) 
            return res.status(200).json(deletedUser)
        } catch (e) {
            return res.status(500).json(e.message)
        }
    }
}

export default new UserController();
