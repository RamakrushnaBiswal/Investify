import { Schema } from "mongoose";

const OrderSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String, //buy or sell
});

export default OrderSchema;