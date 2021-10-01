# Aplicação criada para praticar os princípios da Clean Architecture

Muitos dos códigos aqui apresentados serão modificados no decorrer do tempo, em função da minha evolução nos estudos de
Clean Architecture

## Detalhes do projeto

Este projeto será um cadastro simples de usuários em um sistema de relacionamento com clientes **(Customer Relantionship Client - CRM)**.  
A princípio será possível somente realizar as operações básicas de **CRUD (CREATE, READ, UPDATE e DELETE)**, com a possibilidade de expansão de funcionalides para operações mais complexas. Para isso, utilizarei do princípio **Open Closed Principle** do **SOLID**, para permitir a extensão da lógica da aplicação, sem que haja a modificação de código já existente.  
Não haverá também sistema de autorização para as operações a princípio.

## Casos de uso

- [x] Criar cliente

  - [x] O sistema deve ser capaz de criar um novo usuário, entretanto, se um mesmo usuário já existir com o e-mail solicitado, uma exceção deverá ser lançada.
  - [x] Os dados de entrada devem ser válidos.

- [ ] Alterar dados do cliente
  - Os dados de entrada devem ser válidos.
- [ ] Visualizar dados de cliente
- [ ] Deletar cliente
- [x] Listar todos os clientes

## Dados do cliente

- Id (identificador único, pode ser um uuid)
- Nome (string)
- Telefone (string)
- Email (string)
- Idade (number)

## Considerações dos requisitos funcionais

- Regras de negócio intrínsecas ao negócio devem estar nas entidades (que não necessariamente são classes, conforme o próprio livro nos apresenta)

## Metodologia aplicada

O projeto será desenvolvido utilizando-se da metodologia **TDD** (Test Driven Development - Desenvolvimento guiado a teste), onde primeiro escreve-se o teste e em seguida o código de produção, induzindo o programdor a sempre manter o sistema bem testado.

## Testes a se fazer

- [ ] Após implementar corretamente a parte de Gateways de bancos de dados na camada de adapters, trocar o ORM na camada de infra para outro. (Exemplo: se eu usar Typeorm, trocar para Sequelize, e vice-versa)
- [ ] Trocar o banco de dados para outro. (Exemplo, se eu estiver usando Postgres, trocar para MySQL, e vice-versa)
- [ ] Trocar de tipo de banco de dados. (Exemplo, trocar de relacional para NOSQL, e vice-versa)
