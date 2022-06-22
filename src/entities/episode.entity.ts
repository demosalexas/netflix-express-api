import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

import { Season } from "@entities";

@Entity("episodes")
class Episode {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Season, season => season.episodes)
  season: Season;

  @Column()
  title: string;

  @Column()
  overview: string;

  @Column()
  episode_number: number;

  @Column()
  runtime: number;
};

export default Episode;
