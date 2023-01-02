import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne, OneToMany } from "typeorm";
import { ConflictError, NotFoundError } from "../helpers/apiErrors";
import casual from "casual";

import Projects from "./Projects";
import TimeTrackers from "./TimeTrackers";

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

    @OneToMany(() => TimeTrackers, timeTracker => timeTracker.task)
    	timeTrackers: TimeTrackers[];

    static async createTask(name: string, description: string, projectId: string) {
    	const taskAlreadyExists = await this.findOne({ where: { name, projectId } });
    	if (taskAlreadyExists) throw new ConflictError("Task already exists.");

    	const uuid = casual.uuid;

    	const newTask = this.create({ id: uuid, name, description, projectId, createdAt: new Date().toISOString() });
    	await newTask.save();
    	return newTask;
    }

    static async findTasks(projectId: string) {
    	const tasks = await this.find({ 
    		where: { 
    			projectId
    		},
    		relations: {
    			timeTrackers: true
    		}
    	});
    	return tasks;
    }

    static async updateTask(name: string, description: string, projectId: string, taskId: string) {
    	const task = await this.findOne({ where: { id: taskId, projectId } });
    	if (!task) throw new NotFoundError("Task não encontrada.");

    	await this.update({ id: taskId }, { 
    		name, 
    		description,
    		updatedAt: new Date().toISOString()
    	});
    }

    static async deleteTask(projectId: string, taskId: string) {
    	const task = await this.findOne({ where: { id: taskId, projectId } });
    	if (!task) throw new NotFoundError("Task não encontrada.");

    	await this.update({ id: taskId
    	}, {
    		wasDeleted: true,
    		deletedAt: new Date().toISOString()
    	});
    }
}