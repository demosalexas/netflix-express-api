import { Episode, Show } from "../entities";

interface CreateSeasonDto {
  id: string;
  show: Show;
  title: string;
  overview: string;
  season_number?: number;
  episodes?: Episode[];
  permissionLevel?: number;
};

export {
  CreateSeasonDto
};
