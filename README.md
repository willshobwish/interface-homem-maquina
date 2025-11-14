# Interface Homem Máquina - Sistema de venda e troca de refeições

Este projeto é um mockup de sistema web para gestão de compra e venda de refeições do restaurante universitário, desenvolvido com o framework Angular. Ele permite que usuários visualizem perfil, saldo, histórico de transações, realizem compras e vendas de refeições, além de outras funcionalidades relacionadas ao ambiente universitário.

## Funcionalidades

- Visualização de perfil do usuário (nome, saldo, tipo de perfil)
- Histórico de transações com filtro por data
- Compra e venda de refeições com filtro por data
- Visualização do crédito
- Autenticação de usuário
- Páginas de sucesso e erro

## Estrutura do Projeto

```
src/
	index.html
	main.ts
	styles.scss
	app/
		app.config.ts
		app.html
		app.routes.ts
		app.scss
		app.spec.ts
		app.ts
		assets/
		components/
			menu/
			refeicao-compra/
			refeicao-venda/
		pages/
			compra/
			comprado-sucesso/
			fila-compra/
			login/
			pagina-nao-encontrada/
			perfil/
			venda/
			vendido-sucesso/
		pipes/
			filter-by-date-pipe.ts
```

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/willshobwish/ihm.git
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```sh
   npm start
   ```
