import { ShowCategoryEnum } from "@enums";

interface CreateShowDTO {
  title: string;
  overview: string;
  category: ShowCategoryEnum;
};

export {
  CreateShowDTO
};
