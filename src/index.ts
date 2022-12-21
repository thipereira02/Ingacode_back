import express from 'express'
import cors from 'cors'
import { AppDataSource } from './data-source'

AppDataSource.initialize().then(() => {
	const app = express()
    app.use(cors())
	app.use(express.json())

	return app.listen(Number(process.env.PORT), () => {
        console.log(`Server started on port ${process.env.PORT}`)
    })
})