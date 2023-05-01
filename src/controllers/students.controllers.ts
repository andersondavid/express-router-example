import express, { Request, Response } from "express";
import studentsModel from "../services/students.model";

type StudentT = {
	id: number;
	name: string;
	email: string;
	discipline: string[];
}

type RequestBody<T> = Request<{}, {}, T>

const router = express.Router();


router.get('/all', (req: Request, res: Response) => {
	const allStudents = studentsModel.getAll()
	res.json(allStudents)
})

router.get('/id/:id', (req, res) => {
	const id = parseInt(req.params.id)
	const student = studentsModel.getById(id)
	res.json(student)
})

router.post('/add', (req: RequestBody<StudentT>, res: Response) => {
	const studentBody = req.body
	const newStudent = studentsModel.createStudent(studentBody)
	res.json(newStudent);
})

router.put('/update', (req: RequestBody<StudentT>, res: Response) => {
	const studentBody = req.body
	const studentUpdated = studentsModel.updateStudent(studentBody)
	res.json(studentUpdated)
})

router.delete('/delete/', (req: Request, res: Response) => {
	const studentBody = req.body
	const student = studentsModel.removeStudent(studentBody)
	res.json(student)
})

export default router