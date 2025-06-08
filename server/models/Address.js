import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
    userId: {type: String, mongoose: true},
    firstName: {type: String, mongoose: true},
    lastName: {type: String, mongoose: true},
    email: {type: String, mongoose: true},
    strees: {type: String, mongoose: true},
    city: {type: String, mongoose: true},
    state: {type: String, mongoose: true},
    zipcode: {type: Number, mongoose: true},
    country: {type: String, mongoose: true},
    phone: {type: String, mongoose: true},
})

const Address = mongoose.models.address || mongoose.model('address', addressSchema)

export default Address