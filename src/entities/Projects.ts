import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne } from "typeorm";
import casual from "casual";
import { ConflictError } from "../helpers/apiErrors";

import Users from "./Users";

@Entity("projects")
export default class Projects extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    	id: string;
    
    @Column()
    	name: string;

    @Column()
    	createdAt: string;

    @Column()
    	deletedAt: string;

    @Column()
    	updatedAt: string;

    @Column()
    	wasDeleted: boolean;

    @Column()
    	userId: string;

    @ManyToOne(() => Users, user => user.projects)
    	user: Users;

    static async createProject(name: string, userId: string) {
    	const uuid = casual.uuid;

    	const projectAlreadyExists = await this.findOne({ where: { name, userId } });
    	if (projectAlreadyExists) throw new ConflictError("Project already exists.");

    	const newProject = this.create({ id: uuid, name, userId });
    	await newProject.save();
    	return newProject;
    }

    static async findUserProjects(userId: string) {
    	const projects = await this.find({ 
    		where: { 
    			userId,
    			wasDeleted: false
    		} 
    	});
    	return projects;
    }
}