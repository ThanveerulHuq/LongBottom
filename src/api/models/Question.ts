import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { OptionLabel } from './optionLabel';
import { OptionWeightage } from './optionWeightage';

@Entity({ name: 'questions' })
export class Question {
    @PrimaryColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column({ name: 'question' })
    public question: string;

    @IsNotEmpty()
    @Column({ name: 'sequence' })
    public sequence: string;

    @ManyToOne(type => OptionLabel)
    @JoinColumn({ name: 'option_label' })
    public optionLabel: OptionLabel;

    @ManyToOne(type => OptionWeightage)
    @JoinColumn({ name: 'option_weightage' })
    public optionWeightage: OptionWeightage;

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
