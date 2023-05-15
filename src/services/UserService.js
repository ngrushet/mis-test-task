import User from "./models/User.js";

class UserService {
    async create(user){
        
        const checkUser = await User.findOne({phone: {$eq: user.phone}});
        if (checkUser) {
            throw new Error('User with passed phone already exists');
        }
        const newUser = await User.create(user);
        return newUser;
    }

    async getAll() {
        const users = await User.find();
        return users;
    }

    async getOne(id) {
        if (!id) {
            throw new Error('id not passed')
        }
        const user = await User.findById(id);
        return user;
    }

    async update(user) {
        if (!user.id) {
            throw new Error('id not passed')
        } 
        const updatedUser = await User.findByIdAndUpdate(user.id, user, {new: true}) 
        return updatedUser
    }

    async delete(id) {
        if (!id) {
            throw new Error("id not passed");
        } 
        const deletedUser = await User.findByIdAndDelete(id) 
        return deletedUser
    }
}

export default new UserService();