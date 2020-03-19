import { EntityRepository, Repository } from 'typeorm';
import { Skillset } from '../models/skillset';

@EntityRepository(Skillset)
export class SkillsetRepository extends Repository<Skillset>  {

    public findAll(): Promise<Array<{ name: string, cumulative_index: string }>> {
        return this.createQueryBuilder()
            .select('name')
            .addSelect('cumulative_index')
            .getRawMany();
    }
}
