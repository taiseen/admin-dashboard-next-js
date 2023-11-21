import dbConnection from "../connection";
import User from "../schema/user";

const getAllUser = async (query: string) => {
    const regex = new RegExp(query, "i");
    // const ITEM_PER_PAGE = 2;

    try {
        dbConnection();
        // const users = await User.find();

        // const count = await User.find({ username: { $regex: regex } }).count();

        const users = await User.find({ userName: { $regex: regex } })

        //     .limit(ITEM_PER_PAGE)
        //     .skip(ITEM_PER_PAGE * (page - 1));

        return users;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!" + err);
    }
};

export default getAllUser;