import { EntityRepository, Repository } from 'typeorm';
import { Schools } from '../models/Schools';

@EntityRepository(Schools)
export class SchoolsRepository extends Repository<Schools>  {

    public getAllSchools(): Promise<any> {
        return this.createQueryBuilder()
            .select('school_name')
            .addSelect('id')
            .getRawMany();
    }

}
