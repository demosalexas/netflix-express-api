import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Show, Episode } from "./index";

@Entity("seasons")
class Season {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Show, show => show.seasons)
  show: Show;

  @Column()
  title: string;

  @Column()
  overview: string;

  @Column()
  season_number: number;

  @OneToMany(type => Episode, episode => episode.season)
  episodes: Episode[];
}

export default Season;
