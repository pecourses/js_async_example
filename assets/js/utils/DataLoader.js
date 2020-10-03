export default class DataLoader {
    /**
     * 
     * @param {string} url 
     * @param {string} method 
     */
  constructor(url, method) {
    this.url = url;
    this.method = method;
  }

  static async fetch() {
    const response = await fetch(this.url);
    const data = await response[this.method]();

    return data;
  }
}


