export interface Config {
  streamerId: string | number;
  streamerName: string;
  api: string;
  primaryColor: string;
  secondaryColor: string;
  fontString: string;
  font: string;
  youtubeMetatag?: string;
  geoApi: string;
}

export const defaultConfig: Config = {
  streamerId: 18,
  streamerName: "erkole",
  api: "https://compare.topadsservices.com",
  primaryColor: "#1f1f1f",
  secondaryColor: "#33de18",
  fontString: "",
  font: `'Roboto', sans-serif`,
  geoApi: "https://api.ipgeolocation.io/ipgeo",
};

export let configuration: Config = {
  streamerId: 18,
  streamerName: "erkole",
  api: "https://compare.topadsservices.com",
  primaryColor: "#1f1f1f",
  secondaryColor: "#33de18",
  fontString: "",
  font: `'Roboto', sans-serif`,
  geoApi: "https://api.ipgeolocation.io/ipgeo",
};

export const setConfigurationFile = (newConfig: Config = configuration) => {
  configuration = newConfig;
};
