import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Show, User } from "./index";

@Entity("profiles")
class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, user => user.profiles)
  user: User;

  @Column()
  name: string;
};

export default Profile;
