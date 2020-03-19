import { Entity, PrimaryColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator/decorator/decorators';

@Entity({ name: 'skillsets' })
export class Skillset {
    @PrimaryColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column({ name: 'name' })
    public name: string;

    @IsNotEmpty()
    @Column({ name: 'cumulative_index' })
    public cumulativeIndex: number;
}
