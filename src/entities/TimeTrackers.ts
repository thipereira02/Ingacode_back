import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne } from "typeorm";

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
}
