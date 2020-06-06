import { Entity, PrimaryColumn, JoinColumn, OneToMany } from 'typeorm';
import { Career } from './career';
import { CourseName } from './courseName';

@Entity({ name: 'career_qualification' })
export class CareerQualification {
    @PrimaryColumn('uuid')
    public id: string;

    @OneToMany(type => Career, career => career.careerQualification)
    @JoinColumn({ name: 'career' })
    public career: Career[];

    @OneToMany(type => CourseName, courseName => courseName.careerQualification)
    @JoinColumn({ name: 'course_name' })
    public courseName: CourseName;

}
