import { UserType } from "@/types";
import dbConnection from "../connection";
import User from "../schema/user";

const getUser = async (id: string): Promise<UserType> => {

    try {
        dbConnection();
        const user = await User.findById(id);

        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to get user!" + err);
    }
};

export default getUser;