import { Page } from "./page";

export interface Menu {
  id: number;
  relatedId: number | undefined;
  languageId: number;
  pageId: string | undefined;
  slug: string;
  title: string;
  header: string | undefined;
  link: string | undefined;
  position: number;
  menuOrder: number | undefined;
  related: Menu | undefined;
  inverseRelated: Menu[];
  page: Page | undefined;
  subTitle: string | undefined;
  subText: string | undefined;
}
