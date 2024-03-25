import { Picture } from "./picture";

export interface PagePicture {
  id: number;
  pageId: string;
  pictureId: string;
  picture: Picture;
}
