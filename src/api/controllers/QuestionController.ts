import { Get, JsonController } from 'routing-controllers';
import { QuestionService } from '../services/QuestionService';

@JsonController('/questions')
export class QuestionController {

    constructor(
        private questionService: QuestionService
    ) { }

    @Get('/getSortedQuestion')
    public find(): any {
        return this.questionService.findQuestionsSorted();
    }

}
