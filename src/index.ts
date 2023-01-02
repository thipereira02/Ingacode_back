import express from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";

import usersRouter from "./routers/usersRouter";
import authRouter from "./routers/authRouter";
import collaboratorRouter from "./routers/collaboratorRouter";
import projectRouter from "./routers/projectRouter";
import taskRouter from "./routers/taskRouter";
import timeTrackersRouter from "./routers/timeTrackersRouter";
import { errorMiddleware } from "./middlewares/error";

AppDataSource.initialize().then(() => {
	const app = express();
	app.use(cors());
	app.use(express.json());

	app.use(usersRouter);
	app.use(authRouter);
	app.use(collaboratorRouter);
	app.use(projectRouter);
	app.use(taskRouter);
	app.use(timeTrackersRouter);
	app.use(errorMiddleware);

	return app.listen(Number(process.env.PORT), () => {
		console.log(`Server started on port ${process.env.PORT}`);
	});
});