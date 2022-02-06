import User from "../model/user-schema.js"


export const getUsers = async(request, response) => {
    try {
        let user = await User.find();
        response.status(201).json(user);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

export const addUser = async(request, response) => {
    const user = request.body;
    const newUser = new User(user)

    try {
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}

export const getUserById = async(request, response) => {
    let id = request.params.id;
    try {
        const user = await User.findById(id);
        response.json(user)
    } catch (error) {
        response.error({ message: error.message })
    }

}

export const editUser = async(request, response) => {
    const user = request.body;
    const userEdit = new User(user)

    try {
        await User.updateOne({ _id: request.params.id }, userEdit);
        response.status(201).json(userEdit);
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}


export const deleteUser = async(request, response) => {
    try {
        await User.deleteOne({ _id: request.params.id });
        response.status(201).json("user deleted successfully");
    } catch (error) {
        response.status(409).json({ message: error.message });
    }
}
