import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { SchoolsRepository } from '../repositories/SchoolsRepository';
import { StudentDetailsRepository } from '../repositories/StudentDetailsRepository';

@Service()
export class StudentService {

    constructor(
        @OrmRepository() private schoolsRepo: SchoolsRepository,
        @OrmRepository() private studentDetailsRepository: StudentDetailsRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public getAllSchools(): Promise<any> {
        this.log.info('fetching all schools');
        return this.schoolsRepo.getAllSchools();
    }

    public async addStudent(student: any): Promise<any> {
        this.log.info('adding student');
        const dbStudent = {
            name: student.name,
            contactNo: student.cNumber,
            standard: student.standard,
            school: 1,
            mail: student.email,
            user: 1,
            groups: 1,
        };
        try {
            const insertResult = await this.studentDetailsRepository.insertStudent(dbStudent);
            if (insertResult.raw.serverStatus === 2) {
                return { studentId: insertResult.raw.insertId };
            }
        } catch{
            return { error: 'error inserting student' };
        }
    }
}
