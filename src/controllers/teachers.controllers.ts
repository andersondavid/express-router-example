import express, { Request, Response } from "express";
import teachersModel from "../services/teachers.model";

type TeacherT = {
  id: number;
  name: string;
  email: string;
	discipline: string;
}

type RequestBody<T> = Request<{}, {}, T>

const router = express.Router();


router.get('/all', (req: Request, res: Response) => {
	const allTeachers = teachersModel.getAll()
	res.json(allTeachers)
})

router.get('/id/:id', (req, res) => {
	const id = parseInt(req.params.id)
	const teacher = teachersModel.getById(id)
	res.json(teacher)
})

router.post('/add', (req: RequestBody<TeacherT>, res: Response) => {
	const teacherBody = req.body
	const newTeacher = teachersModel.createTeacher(teacherBody)
	res.json(newTeacher);
})

router.put('/update', (req: RequestBody<TeacherT>, res: Response) => {
	const teacherBody = req.body
	const teacherUpdated = teachersModel.updateTeacher(teacherBody)
	res.json(teacherUpdated)
})

router.delete('/delete/', (req: Request, res: Response) => {
	const teacherBody = req.body
	const teacher = teachersModel.removeTeacher(teacherBody)
	res.json(teacher)
})

export default router