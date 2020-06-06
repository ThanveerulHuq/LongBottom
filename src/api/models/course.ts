import { Entity, PrimaryColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'course' })
export class Course {
    @PrimaryColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column({ name: 'course' })
    public course: string;

}
