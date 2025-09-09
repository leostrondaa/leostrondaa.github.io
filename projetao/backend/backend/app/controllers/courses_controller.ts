import type { HttpContext } from '@adonisjs/core/http'
import { CourseService } from '#services/course_service'
import { createCourseValidator, updateCourseValidator } from'#validators/course'
export default class CoursesController {
    /**
    * Display a list of resource
    */
    async index({ response }: HttpContext) {
        const courses = await new CourseService().getAllCourses()
        return response.status(201).json({
            message: 'OK',
            data: courses,
        })
    }
    /**
    * Display form to create a new record
    */
    async create({ }: HttpContext) { }
    /**
    * Handle form submission for the create action
    */
    async store({ request, response }: HttpContext) {
        const payload = await
            request.validateUsing(createCourseValidator)
        const course = await new CourseService().createCourse(payload)
        if (!course) {
            return response.status(422).json({
                message: 'ERROR',
            })
        }
        return response.status(201).json({
            message: 'OK',
            data: course,
        })
    }
    /**
    * Show individual record
    */
    async show({ response, params }: HttpContext) {
        const course = await new CourseService().getCourseById(params.id)
        if (!course) {
            return response.status(404).json({
                message: 'NOT FOUND',
            })
        }
        return response.status(201).json({
            message: 'OK',
            data: course,
        })
    }
    /**
    * Edit individual record
    */
    async edit({ params }: HttpContext) { }
    /**
    * Handle form submission for the edit action
    */
    async update({ params, request, response }: HttpContext) {
        const course = await new CourseService().updateCourse(params.id,
            request.body())
        if (!course) {
            return response.status(422).json({
                message: 'NOT FOUND',
            })
        }
        return response.status(201).json({
            message: 'OK',
            data: course,
        })
    }
    /**
    * Delete record
    */
    async destroy({ params, response }: HttpContext) {
        const course = await new CourseService().deleteCourse(params.id)
        if (!course) {
            return response.status(404).json({
                message: 'NOT FOUND',
            })
        }
        return response.status(201).json({
            message: 'OK',
            data: course,
        })
    }
}