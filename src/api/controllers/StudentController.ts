import { JsonController, Get } from 'routing-controllers';
import { StudentService } from '../services/StudentService';

@JsonController('/student')
export class StudentController {

    constructor(private stduentService: StudentService) { }

    @Get('/getSchools')
    public find(): any {
        return this.stduentService.getAllSchools();
    }

}
