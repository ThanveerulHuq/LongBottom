import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { College } from './college';
import { Course } from './course';

@Entity({ name: 'college_courses' })
export class CollegeCourses {

    @PrimaryColumn('uuid')
    public id: string;

    @ManyToOne(type => College)
    @JoinColumn({ name: 'college' })
    public college: College;

    @ManyToOne(type => Course)
    @JoinColumn({ name: 'course' })
    public course: Course;

    @IsNotEmpty()
    @Column({ name: 'duration' })
    public duration: string;

    @IsNotEmpty()
    @Column({ name: 'fee' })
    public fee: string;

    @IsNotEmpty()
    @Column({ name: 'seats' })
    public seats: number;

}
