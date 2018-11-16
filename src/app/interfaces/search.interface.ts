import { ISearchDescription } from "./search-description.interface";

export interface ISearch {
  "Search"      :ISearchDescription[];
  "totalResults":number,
  "Response"    :boolean;
}
