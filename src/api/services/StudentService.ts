import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { SchoolsRepository } from '../repositories/SchoolsRepository';

@Service()
export class StudentService {

    constructor(
        @OrmRepository() private schoolsRepo: SchoolsRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public getAllSchools(): Promise<any> {
        this.log.info('fetching all schools');
        return this.schoolsRepo.getAllSchools();
    }
}
