/* eslint-disable @typescript-eslint/no-explicit-any */
import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne } from "typeorm";
import { NotFoundError, ConflictError } from "../helpers/apiErrors";
import casual from "casual";

import Tasks from "./Tasks";
import Collaborators from "./Collaborators";

@Entity("timeTrackers")
export default class TimeTrackers extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    	id: string;

    @Column()
    	startDate: string;

    @Column()
    	endDate: string;

    @Column()
    	timeZoneId: string;

    @Column()
    	createdAt: string;

    @Column()
    	updatedAt: string;

    @Column()
    	deletedAt: string;

    @Column()
    	wasDeleted: boolean;

    @Column()
    	taskId: string;

    @Column()
    	collaboratorId: string;

    @ManyToOne(() => Tasks, task => task.timeTrackers)
    	task: Tasks;

    @ManyToOne(() => Collaborators, collaborator => collaborator.timeTrackers)
    	collaborator: Collaborators;

    static async createTimeTracker(startDate: string, endDate: string, timeZoneId: string, taskId: string, collaboratorId: any) {
    	const taskExists = await Tasks.findOne({ where: { id: taskId }});
    	if (!taskExists) throw new NotFoundError("Task não encontrada.");

    	const uuid = casual.uuid;
    	const newTimeTracker = this.create({ 
    		id: uuid, 
    		startDate, 
    		endDate, 
    		timeZoneId, 
    		taskId, 
    		collaboratorId, 
    		createdAt: new Date().toISOString() 
    	});
    	await newTimeTracker.save();
    	return newTimeTracker;
    }

    static async getTaskTimeTrackers(taskId: string) {
    	const timeTrackers = await this.find({ 
    		where: { 
    			taskId
    		},
    		relations: ["collaborator"]
    	});
    	return timeTrackers;
    }
}
