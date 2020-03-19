import * as bcrypt from 'bcryptjs';
import { Exclude } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import {  Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
    // public static hashPassword(password: string): Promise<string> {
    //     return new Promise((resolve, reject) => {
    //         bcrypt.hash(password, 10, (err, hash) => {
    //             if (err) {
    //                 return reject(err);
    //             }
    //             resolve(hash);
    //         });
    //         resolve('a');
    //     });
    // }
    public static comparePassword(user: User, password: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err, res) => {
                resolve(res === true);
            });
            resolve(true);
        });
    }

    @PrimaryColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column({ name: 'user_name' })
    public userName: string;

    @IsNotEmpty()
    @Column()
    @Exclude()
    public password: string;

    public toString(): string {
        return `${this.userName})`;
    }

    // @BeforeInsert()
    // public async hashPassword(): Promise<void> {
    //     this.password = await User.hashPassword(this.password);
    // }

}
