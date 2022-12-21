import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";

import Sessions from "./Sessions";

@Entity("users")
export default class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    	id: string;

    @Column()
    	userName: string;

    @Column()
    	password: string;

    @Column()
    	createdAt: string;

    @Column()
    	updatedAt: string;

    @Column()
    	deletedAt: string;

    @OneToMany(() => Sessions, session => session.user)
    	sessions: Sessions[];
}