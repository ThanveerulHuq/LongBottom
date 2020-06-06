import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { CareerQualification } from './careerQualification';

@Entity({ name: 'course_name' })
export class CourseName {
    @PrimaryColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column({ name: 'course_name' })
    public courseName: string;

    @ManyToOne(type => CareerQualification)
    public careerQualification: CareerQualification;

}