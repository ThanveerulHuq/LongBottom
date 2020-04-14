import { Entity, PrimaryColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity({ name: 'career' })
export class Career {

    @PrimaryColumn('uuid')
    public id: string;
    
    @IsNotEmpty()
    @Column({ name: 'name' })
    public name: string;
    
    @IsNotEmpty()
    @Column({ name: 'description' })
    public description: string;
    
    @IsNotEmpty()
    @Column({ name: 'scope' })
    public scope: string;
    
    @IsNotEmpty()
    @Column({ name: 'salary' })
    public salary: number;
    
    @Column({ name: 'video' })
    public video: string;


}