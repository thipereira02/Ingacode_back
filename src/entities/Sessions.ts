
import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne } from "typeorm";
import jwt from "jsonwebtoken";
import casual from "casual";

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

    static async createSession(userId: string) {
    	const token = jwt.sign({ id: userId }, process.env.JWT_SECRET as string, { expiresIn: "1d" });

    	const uuid = casual.uuid;

    	const newSession = this.create({ id: uuid, userId, token });
    	await newSession.save();
    	return newSession;
    }
}