import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("genres")
class Genre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

export default Genre;
