import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator/decorator/decorators';
import { User } from './User';

@Entity({ name: 'schools' })
export class Schools {
    @PrimaryColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column({ name: 'school_name' })
    public name: string;

    @IsNotEmpty()
    @Column({ name: 'question' })
    public question: string;

    @IsNotEmpty()
    @Column({ name: 'district' })
    public district: string;

    @IsNotEmpty()
    @Column({ name: 'pincode' })
    public pincode: string;

    @ManyToOne(type => User)
    @JoinColumn({ name: 'created_by' })
    public createdBy: User;

    @IsNotEmpty()
    @Column({ name: 'created at' })
    public createdAt: Date;
}
