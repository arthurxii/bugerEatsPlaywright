const { test, expect } = require('../support')

const data = require('../support/fixtures/deliveryMan.json')

test('deve cadastrar um entregador de moto com sucesso', async ({ page }) => {
    const deliveryMan = data.deliveryManMoto

    await page.home.openForm()
    await page.deliveryRegister.deliveryForm(deliveryMan)
    await page.popup.haveText('Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')
})

test('deve cadastrar um entregador de bicicleta com sucesso', async ({ page }) => {
    const deliveryMan = data.deliveryManBicicleta

    await page.home.openForm()
    await page.deliveryRegister.deliveryForm(deliveryMan)
    await page.popup.haveText('Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')
})

test('deve cadastrar um entregador de carro/van com sucesso', async ({ page }) => {
    const deliveryMan = data.deliveryManCarro

    await page.home.openForm()
    await page.deliveryRegister.deliveryForm(deliveryMan)
    await page.popup.haveText('Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')
})

test('não deve cadastrar um entregador com email inválido', async({page}) => {
    const deliveryMan = data.deliveryMan_invalidoEmail

    await page.home.openForm()
    await page.deliveryRegister.deliveryForm(deliveryMan)
    await page.deliveryRegister.alertHaveText('Oops! Email com formato inválido.')
})

test('não deve cadastrar um entregador com cpf inválido', async({page}) => {
    const deliveryMan = data.deliveryMan_invalidoCPF

    await page.home.openForm()
    await page.deliveryRegister.deliveryForm(deliveryMan)
    await page.deliveryRegister.alertHaveText('Oops! CPF inválido')
})

test('não deve cadastrar um entregador sem dados obrigatórios preenchidos', async({page}) => {
    await page.home.openForm()
    await page.deliveryRegister.submit()

    await page.deliveryRegister.alertHaveText([
        'É necessário informar o nome',
        'É necessário informar o CPF',
        'É necessário informar o email',
        'É necessário informar o CEP',
        'É necessário informar o número do endereço',
        'Selecione o método de entrega',
        'Adicione uma foto da sua CNH'
    ])
})