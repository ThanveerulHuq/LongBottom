import { EntityRepository, Repository } from 'typeorm';
import { CollegeCourses } from '../models/collegeCourses';

@EntityRepository(CollegeCourses)
export class CollegeCoursesRepository extends Repository<CollegeCourses>  {

    getAllCollegeCourses(courses: string[]) {
        return this.createQueryBuilder('cc')
            .select("cc.duration", "duration")
            .addSelect("cc.fee", 'fee')
            .addSelect("cc.seats", 'seats')
            .addSelect("clg.name", 'name')
            .addSelect("clg.city", 'city')
            .addSelect("clg.state", 'state')
            .addSelect("clg.type", 'type')
            .addSelect("clg.link", 'link')
            .addSelect("crs.course", 'course')
            .leftJoin("cc.course", "crs")
            .leftJoin("cc.college", "clg")
            .where(`crs.course IN (:...courses)`, { courses: courses })
            .getRawMany();
    }

}