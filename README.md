## Exemplo de Servidor Express com Rotas

Este projeto apenas representa uma aplicação de servidor com express com rotas em nivel de `router`.
O principal API em uso é `express.Router()`, ela nos permite criar rotas separadas e organizadas para separas as regras de negocios do app.

Criamos dois exemplos de rotas para exemplificar: `students` e `teacher`.
Os controllers responsaveis por gerenciar as requisições e respostas do servidor então em arquivos separados, sendos eles `students.controller.ts` e `teacher.controller.ts`.
Iniciamos o roteamento criando uma instancia de `express.Router()` em cada controller. Após configurarmos as rotas, devemos inicializadas no `app` com:

`app.use('< Base da Rota >', < Controller >)`

onde 'Base da Rota' seria a o inicio da rota após o nome de dominio com `clients/` por exemplo.

### Rodar localmente

1 - Clone o repositorio
2 - Instale os pacotes de dependencia (`pnpm i`)
3 - Inicie o servidor de desenvolvimento (`pnpm dev`)# express-router-exemple
