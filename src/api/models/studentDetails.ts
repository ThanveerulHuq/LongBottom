import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { User } from './User';
import { Schools } from './Schools';
import { Groups } from './Groups';

@Entity({ name: 'students_details' })
export class StudentDetails {

    @PrimaryColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column({ name: 'name' })
    public name: string;

    @IsNotEmpty()
    @Column({ name: 'contact_no' })
    public contactNo: number;

    @IsNotEmpty()
    @Column({ name: 'standard' })
    public standard: string;

    @IsNotEmpty()
    @Column({ name: 'mail' })
    public mail: string;

    @ManyToOne(type => User)
    @JoinColumn({ name: 'user' })
    public user: User;

    @ManyToOne(type => Schools)
    @JoinColumn({ name: 'school' })
    public school: Schools;

    @ManyToOne(type => Groups)
    @JoinColumn({ name: 'groups' })
    public groups: Groups;

}
