import { teacherOrm } from '../fakeDb'

type TeacherT = {
  id: number;
  name: string;
  email: string;
	discipline: string;
}

function getAll(): TeacherT[] {
	const allStudents = teacherOrm.getAll()
	return allStudents
}

function getById(id: number): TeacherT {
	const teacher = teacherOrm.getId(id)
	return teacher
}

function createTeacher(teacher: TeacherT): TeacherT {
	const teacherCreated = teacherOrm.create(teacher)
	return teacherCreated
}

function updateTeacher(teacher: TeacherT): TeacherT {
	const teacherUpdated = teacherOrm.update(teacher)
	return teacherUpdated
}

function removeTeacher(teacher: TeacherT): TeacherT {
	return teacherOrm.remove(teacher)
}

export default {
	getAll, getById, updateTeacher, removeTeacher, createTeacher
}