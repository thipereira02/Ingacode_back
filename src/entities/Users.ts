import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import bcrypt from "bcrypt";
import casual from "casual";

import Sessions from "./Sessions";
import Collaborators from "./Collaborators";
import Projects from "./Projects";

@Entity("users")
export default class Users extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
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

	@Column()
		wasDeleted: boolean;

    @OneToMany(() => Sessions, session => session.user)
    	sessions: Sessions[];

	@OneToMany(() => Collaborators, collaborator => collaborator.user)
		collaborators: Collaborators[];

	@OneToMany(() => Projects, project => project.user)
		projects: Projects[];

	static async createUser(userName: string, password: string) {
    	const hashedPassword = bcrypt.hashSync(password, 12);
    	const uuid = casual.uuid;

    	const userNameExists = await this.findOne({
    		where: {
    			userName
    		}
    	});
    	if (userNameExists) return false;

    	const newUser = this.create({ id: uuid, userName, password: hashedPassword });
    	await newUser.save();
    	return newUser;
	}

	static async findUser(userName: string, password: string) {
    	const user = await this.findOne({
    		where: {
    			userName
    		}
    	});

    	if (user && bcrypt.compareSync(password, user.password)) return user;

    	return null;
	}
}