
import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne } from "typeorm";

import Users from "./Users";

@Entity("sessions")
export default class Sessions extends BaseEntity {
    @PrimaryGeneratedColumn()
    	id: string;

    @Column()
    	userId: string;

    @Column()
    	token: string;

    @ManyToOne(() => Users, user => user.sessions)
    	user: Users;
}