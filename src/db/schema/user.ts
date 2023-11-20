import { Schema, model, models } from "mongoose";
import { UserType } from "@/types";

const userSchema = new Schema<UserType>(
    {
        userName: { type: String, required: true, min: 3, max: 20 },
        email: { type: String, required: true},
        password: { type: String, required: true },
        img: { type: String },
        isAdmin: { type: Boolean, default: false },
        isActive: { type: Boolean, default: true },
        phone: { type: String },
        address: { type: String },
    },
    { timestamps: true }
);

const User = models.User || model<UserType>("User", userSchema);

export default User;