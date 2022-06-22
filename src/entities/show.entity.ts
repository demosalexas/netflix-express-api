import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from "typeorm";

import { Season, Genre } from "@entities";
import { ShowCategoryEnum } from "@enums";

@Entity("shows")
class Show {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  overview: string;

  @Column({ nullable: true })
  poster_url: string;

  @Column({ nullable: true })
  runtime: number;

  @ManyToMany(type => Genre)
  @JoinTable()
  genres: Genre[];

  @Column({ type: "enum", default: ShowCategoryEnum.MOVIE, enum: ShowCategoryEnum })
  category: ShowCategoryEnum;

  @OneToMany(type => Season, season => season.show)
  seasons: Season[];
};

export default Show;
