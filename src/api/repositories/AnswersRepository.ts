import { EntityRepository, Repository, InsertResult } from 'typeorm';
import { Answers } from '../models/answers';

@EntityRepository(Answers)
export class AnswersRepository extends Repository<Answers>  {

    public insertAnswers(answers: any): Promise<InsertResult> {
        return this.createQueryBuilder()
            .insert()
            .into(Answers)
            .values(answers).execute();
    }
}
