import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { SkillsetRepository } from '../repositories/SkillsetRepository';

@Service()
export class SkillsetService {

    constructor(
        @OrmRepository() private skillsetRepo: SkillsetRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public async getTraitsIndex(): Promise<any> {
        this.log.info('getting all traits cumulativeIndex');
        const skillSets = await this.skillsetRepo.findAll();
        const traits = {};
        skillSets.forEach(({ name, cumulative_index }) => {
            traits[name] = cumulative_index;
        });
        return traits;
    }

}
