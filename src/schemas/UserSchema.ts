import joi from "joi";

export const UserSchema = joi.object({
	userName: joi.string().min(3).max(250).required(),
	password: joi.string().pattern(/(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,512}/).required(),
});