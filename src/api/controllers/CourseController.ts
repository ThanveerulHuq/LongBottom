import { JsonController, Get, Param } from 'routing-controllers';
import { CourseService } from '../services/CourseService';

@JsonController('/courses')
export class CourseController {

    constructor(private courseService: CourseService) { }

    @Get('/getAllColleges/:courses')
    public getAllColleges(@Param('courses') courses: string): any {
        return this.courseService.getAllColleges(courses);
    }

    @Get('/queryCourse/:q')
    public queryCourse(@Param('q') q: string): any {
        return this.courseService.queryCourses(q);
    }



}
