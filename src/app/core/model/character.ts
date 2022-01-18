export interface Character{
  id: number;
  name: string;
  status: string;
  specie: string;
  type: string;
  gender: string;
  origin: {
    name: string,
    url: string
  };
  location: {
    name: string,
    url: string
  };
  image: string;
  episodes: string[];
}
