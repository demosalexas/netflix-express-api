import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { Season, Genre } from "@entities";

@Entity("shows")
class Show {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  overview: string;

  @Column()
  poster_url: string;

  @Column()
  runtime: number;

  @ManyToMany(type => Genre)
  @JoinTable()
  genres: Genre[];

  @Column({ nullable: false })
  category: string;

  @OneToMany(type => Season, season => season.show)
  seasons: Season[];
};

export default Show;
