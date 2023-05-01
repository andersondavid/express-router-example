import { studentOrm } from '../fakeDb'

interface Student {
	id: number;
	name: string;
	email: string;
	discipline: string[];
}

function getAll(): Student[] {
	const allStudents = studentOrm.getAll()
	return allStudents
}

function getById(id: number): Student {
	const student = studentOrm.getId(id)
	return student
}

function createStudent(student: Student): Student {
	const studentCreated = studentOrm.create(student)
	return studentCreated
}

function updateStudent(student: Student): Student {
	const studentUpdated = studentOrm.update(student)
	return studentUpdated
}

function removeStudent(student: Student): Student {
	return studentOrm.remove(student)
}

export default {
	getAll, getById, updateStudent, removeStudent, createStudent
}