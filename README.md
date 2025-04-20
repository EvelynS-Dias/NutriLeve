# 🥗 NutriLeve! - Projeto que visa ajudar a desenvolver uma alimentação mais saudável!
Dentro da internet, existe um milhão de receitas diferentes que o usuário pode escolher e fazer para o seu
dia a dia. Mas, um problema é: **Encontrar receitas que sejam gostosas e, ao mesmo tempo, que atendam as
necessidades específicas de cada um.**  **Exemplo:** alguém que têm problemas com intolerância a Lactose ou alguém com problemas 
de diabetes.

Neste projeto para a PDA, criei uma API que direcione ao usuário receitas saudáveis de acordo com a sua necessidade: 
**Intolerância a Lactose, Diabetes, restrições ao gluten** ou que simplesmente **buscam opções mais saudáveis** ou **veganas**
nem sempre encontram receitas adequadas de forma rápida e fácil.

# Como rodar o código:
-Primeiro coloque "npm install" para instalar as dependências
-Basta rodar no terminal "npm run dev" ou node run src/server.js!
-Testar com Postman ou Insomnia: Utilize ferramentas como o Postman ou Insomnia para testar a API com os endpoints abaixo.

# Exemplos de rotas: 
- GET /receitas -> Esta rota vai mostrar todas as receitas que tem dentro do banco de dados. 
- GET /receitas/semLactose -> Esta rota vai mostrar todas as receitas que tem dentro do banco de dados que sejam sem lactose 
- GET /receitas/semGluten -> Rota para receitas sem gluten
- GET /receitas/diabetes -> Rota para receitas para quem têm diabetes 
- GET /receitas/vegano -> Esta rota vai mostrar todas as receitas veganas disponíveis
- POST /receitas -> Aqui você vai poder criar uma nova receita. Caso ela estiver de acordo com alguma das categorias como Sem Lactose, por exemplo, era irá entrar dentro do filtro.

  EXEMPLO DE COMO A RECEITA DEVE SER ENVIADA NO FORMATO JSON: 

```json 
   {
"nome": "Bolinhos de Chuva",
"paraIntoleranciaLactose": false,
"paraDiabeticos": false,
"semGluten": false, 
"paraVeganos": true,
"ingredientes": [ "1/2 xícara de farinha de trigo",
"1/4 de xícara de açúcar",
"chocolate granulado a gosto",
"canela a gosto",
"1 pitada de sal",
"1/2 colher de fermento químico para bolo",
"aproximadamente 1/4 de xícara de água óleo para fritar"], 
"modoPreparo": ["Misture todos os ingredientes, a água por último aos poucos, porque a massa não pode ficar líquida, nem muito pesada.",
"Mexa delicadamente, até começar a levantar algumas bolhas.",
"Coloque 2 dedos de óleo numa panelinha e ligue o fogo",
"Assim que estiver quente, vá despejando a massa, às colheradas.",
"Retire rapidamente do óleo com um garfo e deixe escorrendo em um prato com papel toalha",
"Depois de frito, polvilhe açúcar e canela por cima."]
} 

