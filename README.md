# Sistema de Controle de Ponto - MeuPonto-UI

Este é o front-end do Sistema de Controle de Ponto, desenvolvido com **Angular** e **TypeScript**, usando **Angular Material** como biblioteca de componentes. O sistema permite o registro, edição, e consulta de pontos de usuários, com funcionalidades de adição retroativa, relatórios e um modo escuro para melhor visualização.

## Tecnologias Utilizadas
- **Angular** - Framework para desenvolvimento web.
- **TypeScript** - Linguagem para tipagem estática em JavaScript.
- **Angular Material** - Biblioteca de componentes de UI.
- **JWT Authentication** - Autenticação segura via JSON Web Token.

## Funcionalidades
- **Autenticação**: Login seguro com JWT, garantindo acesso controlado por papéis (usuário, gestor e admin).
- **Registro de Ponto**: Interface para visualizar e registrar pontos (entrada/saída) com edição e solicitação de ajustes.
- **Adição Retroativa**: Possibilidade de solicitar pontos para datas anteriores, com aprovação por gestores.
- **Relatórios e Exportação**: Visualização e filtro de histórico de ponto com opção para exportação em PDF e Excel.
- **Modo Escuro e Responsividade**: Tema escuro e design responsivo para uso em dispositivos móveis.

## Requisitos
- Node.js (>= 18.x)
- Angular CLI (>= 16.x)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Allcb/MeuPonto.UI.git

2. Instale as dependências:
    ```bash
    cd MeuPontoUI
    npm install
    ```

3. Execute o projeto:
    ```bash
    ng serve
    ```

4. Acesse a aplicação em `http://localhost:4200`.

## Build

Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`.

## Running unit tests

Execute `ng test` para executar os testes de unidade via [Karma](https://karma-runner.github.io).

## Estrutura de Pastas

| Pasta                | Descrição                                           |
|----------------------|-----------------------------------------------------|
| `/src/app`           | Contém os componentes principais da aplicação.      |
| `/src/assets`        | Arquivos estáticos, como imagens e ícones.          |
| `/src/environments`  | Configurações de ambiente (dev, prod).              |
| `/src/styles`        | Estilos globais e temas SCSS.                       |

## Personalização de Tema

Este projeto usa Angular Material para alternância entre modo claro e escuro. Para customizar cores, edite o arquivo `src/styles/_themes.scss`.

---
## Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para obter detalhes.

Se você tiver alguma dúvida ou precisar de assistência, não hesite em entrar em contato conosco.
