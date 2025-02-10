const { expect } = require('@playwright/test')

export class Home {
    constructor(page) {
        this.page = page
    }

    async visit() {
        await this.page.goto('/')
    }

    async openForm() {
        await this.visit()
        await this.page.locator('a[href$="deliver"]').click()
    }
}