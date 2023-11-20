import mongoose from "mongoose";

type ConnectionStatus = {
    isConnected?: number;
}

const connection: ConnectionStatus = {};

const dbConnection = async (): Promise<void> => {
    try {
        if (connection.isConnected) return;

        const db = await mongoose.connect(process.env.MONGO_URI as string);
        connection.isConnected = db.connections[0].readyState as number;
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
    }
};

export default dbConnection;