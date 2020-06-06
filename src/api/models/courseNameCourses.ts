import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { CourseName } from './courseName';
import { Course } from './course';

@Entity({ name: 'course_names_courses' })
export class CourseNameCourses {
    @PrimaryColumn('uuid')
    public id: string;


    @ManyToOne(type => CourseName)
    @JoinColumn({ name: 'course_name' })
    public courseName: CourseName;

    @ManyToOne(type => Course)
    @JoinColumn({ name: 'course' })
    public course: Course;


}