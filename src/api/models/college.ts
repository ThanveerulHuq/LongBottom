import { Entity, PrimaryColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'college' })
export class College {

    @PrimaryColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column({ name: 'name' })
    public name: string;

    @IsNotEmpty()
    @Column({ name: 'city' })
    public city: string;

    @IsNotEmpty()
    @Column({ name: 'state' })
    public state: string;

    @IsNotEmpty()
    @Column({ name: 'type' })
    public type: string;

    @IsNotEmpty()
    @Column({ name: 'link' })
    public link: string;

}
