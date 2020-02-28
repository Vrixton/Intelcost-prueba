const apiUrl = "https://pixabay.com/api/";
const key = "13119377-fc7e10c6305a7de49da6ecb25";

export const url = apiUrl + "?key=" + key;

export class ApiConfig {
  public static ENDPOINT = {
    science: "/science",
    education: "/education",
    people: "/people",
    feelings: "/feelings",
    computer: "/computer",
    buildings: "/buildings"
  };
}
