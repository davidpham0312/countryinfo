export interface CountryProps {
  name: CountryNameProps;
  flag: string;
  population: number;
  region: string;
  languages: CountryLanguageProps;
  flags: CountryFlagProps;
}
export interface CountryListProps {
  listCollection: CountryProps[];
}

export interface CountryNameProps {
  common: string;
  official: string;
}

export type CountryLanguageProps= {
  [key: string]: string;
}
export interface CountryFlagProps {
  svg: string,
  alt: string,
  width: any
}