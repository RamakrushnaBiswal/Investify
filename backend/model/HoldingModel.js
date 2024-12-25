import { model } from "mongoose";
import HoldingsSchema from "../schemas/HoldingsScehma.js";

const HoldingModel = new model("holding", HoldingsSchema);

export default HoldingModel;
