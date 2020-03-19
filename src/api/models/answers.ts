import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { StudentDetails } from './studentDetails';
import { Question } from './Question';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'answers' })
export class Answers {
    @PrimaryColumn('uuid')
    public id: string;

    @ManyToOne(type => StudentDetails)
    @JoinColumn({ name: 'student' })
    public student: StudentDetails;

    @ManyToOne(type => Question)
    @JoinColumn({ name: 'question' })
    public question: Question;

    @IsNotEmpty()
    @Column({ name: 'option' })
    public option: string;

}
