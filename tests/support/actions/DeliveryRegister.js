const { expect } = require('@playwright/test')

export class DeliveryRegister {
    constructor(page) {
        this.page = page
    }

    async submit() {
        await this.page.getByRole('button', { name: 'Cadastre-se para fazer entregas' }).click()
    }

    async deliveryForm(deliveryMan) {
        await this.page.getByPlaceholder('Nome completo').fill(deliveryMan.nome)
        await this.page.getByPlaceholder('CPF somente números').fill(deliveryMan.cpf)
        await this.page.getByPlaceholder('E-mail').fill(deliveryMan.email)
        await this.page.getByPlaceholder('Whatsapp').fill(deliveryMan.telefone)

        await this.page.getByPlaceholder('CEP').fill(deliveryMan.cep)
        await this.page.getByRole('button', { name: 'Buscar CEP' }).click()
        await this.page.getByRole('textbox', { name: 'Número', exact: true }).fill(deliveryMan.numero)
        await this.page.getByPlaceholder('Complemento').fill(deliveryMan.complemento)
        await this.page.locator('li').filter({ hasText: deliveryMan.metodo }).click()
        await this.page.locator('input[type="file"]').setInputFiles('tests/support/fixtures' + deliveryMan.cnh)

        await this.submit()
    }

    async alertHaveText(target) {
        await expect(this.page.locator('.alert-error')).toHaveText(target)
    }
}