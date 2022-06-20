import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Profile } from "./index";

@Entity("users")
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @OneToMany(type => Profile, profile => profile.user)
  profiles: Profile[];
};

export default User;
