import { JsonController, Post, Body } from 'routing-controllers';
import { AnswersService } from '../services/AnswersService';

@JsonController('/answers')
export class AnsewersController {

    constructor(private answersService: AnswersService) { }

    @Post('/submitAnswers')
    public submitAnswers(@Body() body: any[]): any {
        return this.answersService.submitAnswers(body);
    }
}
