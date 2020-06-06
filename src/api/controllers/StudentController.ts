import { JsonController, Get, Post, Body } from 'routing-controllers';
import { StudentService } from '../services/StudentService';

@JsonController('/student')
export class StudentController {

    constructor(private stduentService: StudentService) { }

    @Get('/getSchools')
    public find(): any {
        return this.stduentService.getAllSchools();
    }

    @Post('/addStudent')
    public addStudent(@Body() body: any): any {
        console.log(body);
        return this.stduentService.addStudent(body);
    }

}
