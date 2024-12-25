import { model } from "mongoose";

import OrderSchema from "../schemas/OrderSchema.js";

const OrderModel = new model("order", OrderSchema);

export default OrderModel;