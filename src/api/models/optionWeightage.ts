import { Entity, PrimaryColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'option_weightage' })
export class OptionWeightage {

    @PrimaryColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column({ name: 'option1' })
    public option1: number;

    @IsNotEmpty()
    @Column({ name: 'option2' })
    public option2: number;

    @IsNotEmpty()
    @Column({ name: 'option3' })
    public option3: number;

    @IsNotEmpty()
    @Column({ name: 'option4' })
    public option4: number;

    @IsNotEmpty()
    @Column({ name: 'option5' })
    public option5: number;

}
