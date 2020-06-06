import { Service } from 'typedi/decorators/Service';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { CourseNameCoursesRepository } from '../repositories/CourseNameCoursesRepo';
import { CollegeCoursesRepository } from '../repositories/CollegeCoursesRepo';
import { CourseRepository } from '../repositories/CourseRepo';



@Service()
export class CourseService {

    constructor(
        @OrmRepository() private courseNameCoursesRepository: CourseNameCoursesRepository,
        @OrmRepository() private collegeCoursesRepository: CollegeCoursesRepository,
        @OrmRepository() private courseRepository: CourseRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    async getAllColleges(courses: string) {
        let coursesNew = [];
        this.log.info("in getAllColleges");
        let splitCourses = courses.split(",");
        for (let course of splitCourses) {
            let courseNameCourses = await this.courseNameCoursesRepository.getAllCoursesByCourseName(course);
            if (courseNameCourses.length) {
                coursesNew.push(...courseNameCourses.map(courseName => courseName.course));
            } else {
                coursesNew.push(course);
            }
        }
        return await this.collegeCoursesRepository.getAllCollegeCourses(coursesNew);
    }


    queryCourses(q:string){
        return this.courseRepository.getCoursesByKey(q);
    }

}