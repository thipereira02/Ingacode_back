import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne } from "typeorm";
import { ConflictError } from "../helpers/apiErrors";
import casual from "casual";

import Projects from "./Projects";

@Entity("tasks")
export default class Tasks extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    	id: string;
    
    @Column()
    	name: string;

    @Column()
    	description: string;
    
    @Column()
    	createdAt: string;

    @Column()
    	updatedAt: string;
    
    @Column()
    	deletedAt: string;
    
    @Column()
    	wasDeleted: boolean;
    
    @Column()
    	projectId: string;
    
    @ManyToOne(() => Projects, project => project.tasks)
    	project: Projects;

    static async createTask(name: string, description: string, projectId: string) {
    	const taskAlreadyExists = await this.findOne({ where: { name, projectId } });
    	if (taskAlreadyExists) throw new ConflictError("Task already exists.");

    	const uuid = casual.uuid;

    	const newTask = this.create({ id: uuid, name, description, projectId });
    	await newTask.save();
    	return newTask;
    }
}