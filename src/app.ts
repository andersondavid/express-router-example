import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import teachersRouter from "./controllers/teachers.controllers";
import studentsRouter from "./controllers/students.controllers";


// App em formato de classe
class App {
	public app: express.Application;
	public port: number;
	constructor(initApp: { port: number }) {
		this.app = express();
		this.port = initApp.port;
		this.middlewares();
		this.controllers();
		this.errorHandle();
	}

	private controllers() {
		this.app.use("/teachers", teachersRouter);
		this.app.use("/students", studentsRouter);
	}

	private middlewares() {
		this.app.use(express.json());
		this.app.use(cors());
		this.app.use((_req: Request, _res: Response, next: NextFunction) => {
			console.log('💡 Você passou por um middleware')
			next()
		}) 
	}

	private errorHandle() {
		this.app.use(
			(err: Error, _req: Request, res: Response, _next: NextFunction) => {
				console.error(err.stack);
				res.status(500).send("🚫 Erro interno do servidor!");
			}
		);
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log(`🚀 Running on port 3000!\n🪐 Acesse em: http://localhost:3000`);
		});
	}
}

export default App;
