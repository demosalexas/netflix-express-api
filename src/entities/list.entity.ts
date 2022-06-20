import { Entity, OneToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Show, Profile } from "./index";

@Entity("lists")
class List {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;

  @OneToOne(() => Show)
  @JoinColumn()
  show: Show;
};

export default List;
