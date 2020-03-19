import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { StudentDetails } from './studentDetails';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'student_result' })
export class StudentResult {

    @PrimaryColumn('uuid')
    public id: string;

    @ManyToOne(type => StudentDetails)
    @JoinColumn({ name: 'student' })
    public student: StudentDetails;

    @IsNotEmpty()
    @Column({ name: 'doer' })
    public doer: number;

    @IsNotEmpty()
    @Column({ name: 'creator' })
    public creator: number;

    @IsNotEmpty()
    @Column({ name: 'persuader' })
    public persuader: number;

    @IsNotEmpty()
    @Column({ name: 'thinker' })
    public thinker: number;

    @IsNotEmpty()
    @Column({ name: 'helper' })
    public helper: number;

    @IsNotEmpty()
    @Column({ name: 'organizer' })
    public organizer: number;

}
