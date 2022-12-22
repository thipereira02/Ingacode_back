import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne } from "typeorm";
import casual from "casual";
import { ConflictError } from "../helpers/apiErrors";

import Users from "./Users";

@Entity("collaborators")
export default class Collaborators extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    	id: string;

    @Column()
    	name: string;

    @Column()
    	createdAt: string;

    @Column()
    	updatedAt: string;

    @Column()
    	deletedAt: string;

    @Column()
    	userId: string;

    @ManyToOne(() => Users, user => user.collaborators)
    	user: Users;

    static async createCollaborator(name: string, userId: string) {
    	const uuid = casual.uuid;

    	const collaboratorAlreadyExists = await this.findOne({ where: { name, userId } });
    	if (collaboratorAlreadyExists) throw new ConflictError("Collaborator already exists.");

    	const newCollaborator = this.create({ id: uuid, name, userId });
    	await newCollaborator.save();
    	return newCollaborator;
    }
}
