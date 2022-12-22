import joi from "joi";

export const TaskSchema = joi.object({
	name: joi.string().min(3).max(250).required(),
	description: joi.string().min(3).max(65535).required(),
});