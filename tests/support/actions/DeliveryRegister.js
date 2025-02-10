const { expect } = require('@playwright/test')

export class DeliveryRegister {
    constructor(page) {
        this.page = page
    }

    async submit() {
        await this.page.getByRole('button', {name : 'Cadastre-se para fazer entregas'}).click()
    }

    async deliveryForm(deliveryMan) {
        await this.page.getByPlaceholder('Nome completo').fill(deliveryMan.nome)
        await this.page.getByPlaceholder('CPF somente números').fill(deliveryMan.cpf)
        await this.page.getByPlaceholder('E-mail').fill(deliveryMan.email)
        await this.page.getByPlaceholder('Whatsapp').fill(deliveryMan.telefone)

        await this.page.getByPlaceholder('CEP').fill(deliveryMan.cep)
        await this.page.getByRole('button', {name: 'Buscar CEP'}).click
        await this.page.getByPlaceholder('Número').fill(deliveryMan.numero)
        await this.page.getByPlaceholder('Complemento').fill(deliveryMan.complemento)
        // await page.getByRole('listitem').filter({ hasText: 'Moto' }).click();
        await this.page.locator('li').filter({ hasText: deliveryMan.metodo }).click();
        await page.getByText('Foto da sua CNH').setInputFiles('/tests/support/fixtures' + deliveryMan.cnh)

        await this.page.submit()
    }
}