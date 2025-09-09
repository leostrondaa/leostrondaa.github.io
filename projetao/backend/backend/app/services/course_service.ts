import logger from '@adonisjs/core/services/logger'

interface Course {
  id: number
  name: string
  duration: string
}

let courses: Course[] = []
let currentId = 1

export class CourseService {
  getAllCourses() {
    logger.info('index')
    return courses
  }

  createCourse(courseData: Partial<Omit<Course, 'id'>>) {
    logger.info('create')
    if (!courseData.name || !courseData.duration) {
      return null
    }
    const newCourse: Course = { id: currentId++, ...courseData } as Course
    courses.push(newCourse)
    return newCourse
  }

  getCourseById(id: number) {
    logger.info("show")
    return courses.find(course => course.id === id)
  }

  updateCourse(id: number, courseData: Partial<Omit<Course, 'id'>>) {
    logger.info("update")
    if (!courseData.name && !courseData.duration) {
      return null
    }
    const index = courses.findIndex(course => course.id === id)
    if (index !== -1) {
      courses[index] = { ...courses[index], ...courseData, id }
      return courses[index]
    }
    return null
  }

  deleteCourse(id: number) {
    logger.info("delete")
    const index = courses.findIndex(course => course.id === id)
    if (index !== -1) {
      return courses.splice(index, 1)[0] // retorna o curso removido
    }
    return null
  }
}
