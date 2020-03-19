import { Entity, PrimaryColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'students_detail' })
export class StudentDetails {

    @PrimaryColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column({ name: 'name' })
    public name: number;

}
