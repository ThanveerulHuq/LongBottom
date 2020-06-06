import { EntityRepository, Repository } from 'typeorm';
import { CourseNameCourses } from '../models/courseNameCourses';

@EntityRepository(CourseNameCourses)
export class CourseNameCoursesRepository extends Repository<CourseNameCourses>  {

    getAllCoursesByCourseName(courseName: string) {
        return this.createQueryBuilder('cnmc')
            .select("c.course", "course")
            .addSelect("cn.courseName", 'courseName')
            .leftJoin("cnmc.course", "c")
            .leftJoin("cnmc.courseName", "cn")
            .where(`cn.courseName = :courseName`, { courseName })
            .getRawMany();
    }

}