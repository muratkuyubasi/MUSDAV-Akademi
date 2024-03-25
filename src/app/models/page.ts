import { PagePicture } from "./pagePicture";

export interface Page {
  id: string;
  relatedId: string | undefined;
  pageStyleId: number;
  languageId: number;
  title: string;
  preContent: string | undefined;
  pageContent1: string | undefined;
  pageContent2: string | undefined;
  position: number | undefined;
  link: string | undefined;
  pageContentImage: string | undefined;
  blockNote: string | undefined;
  related: Page | undefined;
  inverseRelated: Page[] | undefined;
  pagePictures: PagePicture[] | undefined;
}

export function getPageData() : Page[] {
  return [
    {
      id: "b6b3ebba-e4bc-4bdc-ae7b-dc3b6a3da481",
      relatedId: undefined,
      pageStyleId: 1,
      languageId: 4,
      title: "Unsere Tätigkeit",
      preContent: "",
      pageContent1: "Wir sind ein junges Team von Islamischen Theologen und Theologinnen, welche alle in der Schweiz geboren und aufgewachsen sind. Unser Ziel ist es, unser Fachwissen im Bereich der islamischen Wissenschaften mit unseren persönlichen Erfahrungen zu verknüpfen und den Schweizer Muslimen auf eine verständliche und einfache Weise zu vermitteln und. ",
      pageContent2: "Wir möchten einen Beitrag zu einer offenen und aufgeschlossenen Gesellschaft leisten, indem wir authentisches Wissen über den Islam vermitteln und das wechselseitige Verständnis fördern.",
      position: 1,
      link: undefined,
      pageContentImage: "",
      blockNote: "",
      pagePictures: [],
      related: undefined,
      inverseRelated: []
    },
    {
      id: "a075cbae-1f34-4571-93b3-0972781226c7",
      relatedId: undefined,
      pageStyleId: 1,
      languageId: 4,
      title: "Unser Leitbild ",
      preContent: "",
      pageContent1: "Wissen und Bildung haben im Islam einen sehr hohen Stellenwert. Seit der ersten Offenbarung von Allah dem Allmächtigen an unseren geliebten Propheten Muhammad ﷺ spricht der Koran von der großen Bedeutung des Strebens nach Wissen im Islam. Jeder Muslim unabhängig von Geschlecht, Alter, ethnischer Zugehörigkeit und sozialem Status ist verpflichtet nach Wissen zu streben. Wir alle haben das gleiche Recht auf Bildung und das Streben nach Wissen. ",
      pageContent2: "Diese Aussage von unserem gelibeten Propheten Muhammed (Friede sei auf ihm), wiederspiegelt eines der zentralen Prinzipien des Islam wiedert. Mufid ist ein arabisches Wort und steht für “nützlich”. Die Mufid Bildungstätte hat zur Absicht mit seinen Angeboten nützliches und authentisches Wissen über den Islam zu liefern und somit eine Lücke im System der islamisch-wissenschaftlichen Bildung im Westen zu schliessen.",
      position: 1,
      link: undefined,
      pageContentImage: "",
      blockNote: "Der beste Mensch ist derjenige, der den Menschen nützlich ist.",
      pagePictures: [],
      related: undefined,
      inverseRelated: []
    }
  ]
}
