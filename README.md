# 🥗 NutriDelicia! - Projeto criado visando ajudar a desenvolver uma alimentação mais saudável!
Dentro da internet, existe um milhão de receitas diferentes que o usuário pode escolher e fazer para o seu
dia a dia. Mas, um problema é: **Encontrar receitas que sejam gostosas e, ao mesmo tempo, que atendam as
necessidades específicas de cada um.**  **Exemplo:** alguém que têm problemas com intolerância a Lactose ou alguém com problemas 
de diabetes.

Neste projeto para a PDA, criei uma API que direcione ao usuário receitas saudáveis de acordo com a sua necessidade: 
**Intolerância a Lactose, Diabetes, restrições ao gluten** ou que simplesmente **buscam opções mais saudáveis** ou **veganas**
nem sempre encontram receitas adequadas de forma rápida e fácil. 

# Exemplos de rotas: 
- GET /receitas -> Esta rota vai mostrar todas as receitas que tem dentro do banco de dados. 
- GET /semLactose -> Esta rota vai mostrar todas as receitas que tem dentro do banco de dados que sejam sem lactose 
- GET /receitas/semGluten -> Rota para receitas sem gluten
- GET /receitas/diabetes -> Rota para receitas para quem têm diabetes 
- GET /receitas/vegano -> Esta rota vai mostrar todas as receitas veganas disponíveis


