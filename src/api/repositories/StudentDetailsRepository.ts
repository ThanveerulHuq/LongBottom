import { EntityRepository, Repository, InsertResult } from 'typeorm';
import { StudentDetails } from '../models/studentDetails';

@EntityRepository(StudentDetails)
export class StudentDetailsRepository extends Repository<StudentDetails>  {

    public insertStudent(student: any): Promise<InsertResult> {
        return this.createQueryBuilder()
            .insert()
            .into(StudentDetails)
            .values(student).execute();
    }

}
