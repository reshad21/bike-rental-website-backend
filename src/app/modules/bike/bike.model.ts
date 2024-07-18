import { model, Schema } from "mongoose";
import { TBike } from "./bike.interface";

const bikeSchema = new Schema<TBike>(
    {
        // user: { type: Schema.Types.ObjectId, ref: 'User', unique: true, required: [true, 'uid is required'] },
        name: { type: String, required: true },
        description: { type: String, required: true },
        pricePerHour: { type: Number, required: true },
        isAvailable: { type: Boolean, default: true },
        cc: { type: Number, required: true },
        year: { type: Number, required: true },
        model: { type: String, required: true },
        brand: { type: String, required: true },
    },
    {
        timestamps: true,
    },
);


export const Bike = model<TBike>('Bike', bikeSchema);