import { Service } from 'typedi/decorators/Service';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { AnswersRepository } from '../repositories/AnswersRepository';
import { QuestionRepository } from '../repositories/QuestionRepository';
import { TraitsPercentage } from '../types/traits';
import { SkillsetService } from './SkillsetService';
import { StudentResultRepository } from '../repositories/StudentResultRepo';

@Service()
export class AnswersService {

    constructor(
        @OrmRepository() private answersRepo: AnswersRepository,
        @OrmRepository() private questionsRepo: QuestionRepository,
        @OrmRepository() private studentResultRepo: StudentResultRepository,
        private skillsetService: SkillsetService,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public async submitAnswers(body: any): Promise<any> {
        this.log.info('@submitAnswers Service');
        let { answers, student } = body;
        answers = answers.map(({ id, option }) => ({ question: id, option, student }));
        const insertResult = await this.answersRepo.insertAnswers(answers);
        if (insertResult.raw.serverStatus === 2) {
            const traits: any[] = await this.calculateTraitPercentage(answers);
            this.studentResultRepo.insertStudentResult({ ...traits, student });
            return this.getTraitsSorted(traits);
        } else {
            return '';
        }
    }

    public async calculateTraitPercentage(answers: any[]): Promise<any> {
        const allTraits = await this.questionsRepo.getQuestionTraits();
        const traitsIndex: TraitsPercentage = await this.skillsetService.getTraitsIndex();
        const traitsPercentage: TraitsPercentage = { doer: 0, creator: 0, persuader: 0, thinker: 0, helper: 0, organizer: 0 };
        let totalTraitsValue = 0;
        // adding traits with selected option percentage in all answers
        answers.forEach(answer => {
            const questionTrait = allTraits.find(traits => traits.id === answer.question);
            for (const trait in traitsPercentage) {
                if (traitsPercentage.hasOwnProperty(trait)) {
                    traitsPercentage[trait] = traitsPercentage[trait] + (questionTrait[trait] * answer.option * 0.01);
                }
            }
        });
        // multiplying with correction value
        for (const trait in traitsPercentage) {
            if (traitsPercentage.hasOwnProperty(trait) && traitsIndex.hasOwnProperty(trait)) {
                traitsPercentage[trait] = traitsPercentage[trait] * parseFloat(traitsIndex[trait]);
                totalTraitsValue += traitsPercentage[trait];
            }
        }
        // finding percentage
        for (const trait in traitsPercentage) {
            if (traitsPercentage.hasOwnProperty(trait)) {
                traitsPercentage[trait] = (traitsPercentage[trait] / totalTraitsValue) * 100;
            }
        }
        return traitsPercentage;
    }

    getTraitsSorted(traitsPercentage: any) {
        const traitsArray = []
        for (let trait in traitsPercentage) {
            traitsArray.push({ trait: trait, value: traitsPercentage[trait] });
        }
        return traitsArray.sort((traitA, traitB) => {
            return traitB.value - traitA.value;
        });
    }
}
