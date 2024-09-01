import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TBike } from './bike.interface';
import { Bike } from './bike.model';

const createBikeIntoDB = async (payload: TBike) => {
    // Check if a bike with the same name and model already exists
    const existingBike = await Bike.findOne({
        name: payload.name,
        model: payload.model,
        year: payload.year,
    });

    if (existingBike) {
        throw new AppError(httpStatus.FORBIDDEN, "Bike with the same name, model, and year already exists!");
    }

    const result = await Bike.create(payload);
    return result;
};

const getAllBikeIntoDB = async () => {
    const result = await Bike.find();
    return result;
}

const getSingleBikeIntoDB = async (id: string) => {
    const result = await Bike.findById(id);
    return result;
}


const updateBikeIntoDB = async (payload: TBike, id: string) => {
    const result = await Bike.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
}

const deleteBikeFromDB = async (payload: TBike, id: string) => {
    const result = await Bike.findByIdAndUpdate(
        id,
        { isAvailable: false },
        { new: true, runValidators: true }
    );
    return result;
}

export const BikeServices = {
    createBikeIntoDB,
    getAllBikeIntoDB,
    getSingleBikeIntoDB,
    updateBikeIntoDB,
    deleteBikeFromDB
};
