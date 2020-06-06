import { EntityRepository, Repository } from 'typeorm';
import { Course } from '../models/course';

@EntityRepository(Course)
export class CourseRepository extends Repository<Course>  {

    getCoursesByKey(q: string) {
        return this.createQueryBuilder('crs')
            .select("DISTINCT crs.course", "name")
            .where("crs.course LIKE (:q)", { q: '%' + q + '%' })
            .take(10)
            .getRawMany();
    }

}