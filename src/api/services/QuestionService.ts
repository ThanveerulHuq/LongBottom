import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { QuestionRepository } from '../repositories/QuestionRepository';

@Service()
export class QuestionService {

    constructor(
        @OrmRepository() private questionRepo: QuestionRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public findQuestionsSorted(): Promise<any> {
        this.log.info('Find all questions');
        return this.questionRepo.getQuestionsSorted();
    }
}
