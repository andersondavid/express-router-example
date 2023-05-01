// Esta implementação servirar apenas para objetivo de exemplo

type StudentT = {
  id: number;
  name: string;
  email: string;
  discipline: string[];
}

type TeacherT = {
  id: number;
  name: string;
  email: string;
  discipline: string;
}

const studentsInitValues: StudentT[] = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "discipline": ["Math", "Physics", "Chemistry"]
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "janesmith@example.com",
    "discipline": ["Science", "Biology", "Geology"]
  },
  {
    "id": 3,
    "name": "Bob Johnson",
    "email": "bobjohnson@example.com",
    "discipline": ["History", "Geography", "Social Studies"]
  },
  {
    "id": 4,
    "name": "Sarah Lee",
    "email": "sarahlee@example.com",
    "discipline": ["English", "Literature", "Writing"]
  },
  {
    "id": 5,
    "name": "David Kim",
    "email": "davidkim@example.com",
    "discipline": ["Art", "Music", "Dance"]
  }
]

const teachersInitValues: TeacherT[] = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "johndoe@example.com",
    "discipline": "Math"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "janesmith@example.com",
    "discipline": "Science"
  },
  {
    "id": 3,
    "name": "Bob Johnson",
    "email": "bobjohnson@example.com",
    "discipline": "History"
  },
  {
    "id": 4,
    "name": "Sarah Lee",
    "email": "sarahlee@example.com",
    "discipline": "English"
  },
  {
    "id": 5,
    "name": "David Kim",
    "email": "davidkim@example.com",
    "discipline": "Art"
  }
]

class fakeOrm<T extends {id: number}> {
  private db: T[]
  constructor(dbInitValues: T[]) {
    this.db = dbInitValues
  }

  public create(item: T) {
    this.db.push(item)
    return item
  }

  public getId(id: number) {
    return this.db.filter(item => item.id === id)[0]
  }

  public getAll() {
    return this.db
  }

  public update(item: T) {
    const itemIndex = this.db.indexOf(item)
    const itemUpdated = this.db.splice(itemIndex, 1, item)
    return itemUpdated[0]
  }

  public remove(item: T) {
    this.db = this.db.filter(itemIndex => itemIndex.id !== item.id)
    return {
      ...item, removed: true
    }
  }
}

const studentOrm = new fakeOrm<StudentT>(studentsInitValues)
const teacherOrm = new fakeOrm<TeacherT>(teachersInitValues)

export { studentOrm, teacherOrm }