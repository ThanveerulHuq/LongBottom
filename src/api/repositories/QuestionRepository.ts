import { EntityRepository, Repository } from 'typeorm';
import { Question } from '../models/Question';

@EntityRepository(Question)
export class QuestionRepository extends Repository<Question>  {
    public getQuestionsSorted(): any {

        return this.createQueryBuilder()
            .select('id')
            .addSelect('question')
            .orderBy('sequence')
            .getRawMany();
    }

    public getQuestionTraits(): any {

        return this.createQueryBuilder()
            .select('id')
            .addSelect('doer')
            .addSelect('creator')
            .addSelect('persuader')
            .addSelect('thinker')
            .addSelect('helper')
            .addSelect('organizer')
            .orderBy('sequence')
            .getRawMany();
    }
}
