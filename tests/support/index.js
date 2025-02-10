const { test: base, expect } = require('@playwright/test')

const { Home } = require('./actions/Home')
const { DeliveryRegister } = require('./actions/DeliveryRegister')
const {Popup} = require('./actions/Components')

const test = base.extend({
    page: async ({ page }, use) => {
        const context = page

        context['home'] = new Home(page)
        context['deliveryRegister'] = new DeliveryRegister(page)
        context['popup'] = new Popup(page)

        await use(page)
    }
})

export { test, expect }