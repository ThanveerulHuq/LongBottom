import { Entity, PrimaryColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'option_label' })
export class OptionLabel {

    @PrimaryColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column({ name: 'option1' })
    public option1: string;

    @IsNotEmpty()
    @Column({ name: 'option2' })
    public option2: string;

    @IsNotEmpty()
    @Column({ name: 'option3' })
    public option3: string;

    @IsNotEmpty()
    @Column({ name: 'option4' })
    public option4: string;

    @IsNotEmpty()
    @Column({ name: 'option5' })
    public option5: string;

}
