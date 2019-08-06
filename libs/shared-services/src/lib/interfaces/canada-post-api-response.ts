export interface ICanadaPostApiResponse {
  Items: ICanadaPostApiResponseItem[];
}

export interface ICanadaPostApiResponseItem {
  Cursor: number,
  Description: string;
  Highlight: string;
  Id: string;
  Next: string;
  Text: string;
  Items?: ICanadaPostApiResponseItem[]
}
