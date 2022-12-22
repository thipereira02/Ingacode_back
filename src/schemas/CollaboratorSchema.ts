import joi from "joi";

export const CollaboratorSchema = joi.object({
	name: joi.string().min(3).max(250).required(),
});