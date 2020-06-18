export default class Auth {
  id?: number;
  name: string;
  url: string;
  children?:Auth[];
  constructor(name: string, url: string, id?: number) {
    this.name = name;
    this.url = url;
    this.id = id;
  }
}