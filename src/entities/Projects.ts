import { Entity, PrimaryGeneratedColumn, BaseEntity, Column, ManyToOne, OneToMany } from "typeorm";
import casual from "casual";
import { ConflictError, NotFoundError } from "../helpers/apiErrors";

import Users from "./Users";
import Tasks from "./Tasks";

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

    @OneToMany(() => Tasks, task => task.project)
    	tasks: Tasks[];

    static async createProject(name: string, userId: string) {
    	const uuid = casual.uuid;

    	const projectAlreadyExists = await this.findOne({ where: { name, userId } });
    	if (projectAlreadyExists) throw new ConflictError("Projeto já existe.");

    	const newProject = this.create({ id: uuid, name, userId, createdAt: new Date().toISOString() });
    	await newProject.save();
    	return newProject;
    }

    static async findUserProjects(userId: string) {
    	const projects = await this.find({ 
    		where: { 
    			userId,
    			wasDeleted: false
    		},
    		order: {
    			createdAt: "DESC"
    		}
    	});
    	return projects;
    }

    static async updateProject(id: string, name: string) {
    	const project = await this.findOne({ where: { id } });
    	if (!project) throw new NotFoundError("Projeto já existe.");

    	await this.update({ id }, {
    		name,
    		updatedAt: new Date().toISOString()
    	});
    }

    static async deleteProject(id: string) {
    	const project = await this.findOne({ where: { id } });
    	if (!project) throw new NotFoundError("Projeto não encontrado.");

    	await this.update({ id }, {
    		deletedAt: new Date().toISOString(),
    		wasDeleted: true
    	});
    }
}