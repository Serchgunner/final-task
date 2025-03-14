export default class Page {
  constructor() {
      this.title = 'Swag Labs'
  }

  async open (path) {
      await browser.url(path)
  }
}