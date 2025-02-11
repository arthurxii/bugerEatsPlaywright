[![CI BugerEats Tests](https://github.com/arthurxii/bugerEatsPlaywright/actions/workflows/workflow.yml/badge.svg)](https://github.com/arthurxii/bugerEatsPlaywright/actions/workflows/workflow.yml)
## Descrição do projeto

Projeto de testes e2e automatizados para aplicação BugerEats https://buger-eats.vercel.app/ utilizando Playwright e Javascript

## Tecnologias Utilizadas
- Javascript
- Playwright

## Como executar 

1. Clonar o repositório e instalar as depências do projeto
```
git clone https://github.com/arthurxii/bugerEatsPlaywright.git
```

```
npm install
```

1. Executar os testes em modo headless (Sem interface gráfica do playwright)
```
npx playwright test
```

Após a execução dos testes, executar o comando abaixo para visualizar o relatório
```
npx playwright show-report
```

2. Executar os testes com a interface gráfica do Playwright
```
npx playwright --ui
```

## Integração Contínua

Para esse projeto foi implementada a integração contínua com o GitHub Actions, a partir do arquivo de configuração "workflow.yml". A cada vez que for realizado um push ou pull request na branch main do projeto, a pipeline é executada para garantir que a aplicação está funcionando corretamente.
