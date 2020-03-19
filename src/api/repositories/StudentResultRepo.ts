import { EntityRepository, Repository, InsertResult } from 'typeorm';
import { StudentResult } from '../models/studentResult';

@EntityRepository(StudentResult)
export class StudentResultRepository extends Repository<StudentResult>  {

    public insertStudentResult(studentResult: any): Promise<InsertResult> {
        return this.createQueryBuilder()
            .insert()
            .into(StudentResult)
            .values(studentResult)
            .execute();
    }
}
