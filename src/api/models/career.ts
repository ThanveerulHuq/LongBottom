import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { CareerQualification } from './careerQualification';
import { CourseName } from './courseName';

@Entity({ name: 'career' })
export class Career {

    @PrimaryColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column({ name: 'name' })
    public name: string;

    @IsNotEmpty()
    @Column({ name: 'description' })
    public description: string;

    @IsNotEmpty()
    @Column({ name: 'scope' })
    public scope: string;

    @IsNotEmpty()
    @Column({ name: 'salary' })
    public salary: number;

    @Column({ name: 'video' })
    public video: string;

    @ManyToOne(type => CourseName )
    @JoinColumn({ name: 'course_name' })
    public courseName: CourseName;

    @ManyToOne(type => CareerQualification)
    public careerQualification: CareerQualification;

}
