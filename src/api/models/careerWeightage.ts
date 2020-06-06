import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Career } from './career';

@Entity({ name: 'career_weightage' })
export class CareerWeightage {

    @PrimaryColumn('uuid')
    public id: string;

    @ManyToOne(type => Career)
    @JoinColumn({ name: 'career' })
    public career: Career;

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
