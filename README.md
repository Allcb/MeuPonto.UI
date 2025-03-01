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

# Estrutura do Projeto `Meu Ponto - UI`

## Estrutura de Pastas

```bash
MeuPonto.UI/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── guards/
│   │   │   ├── interceptors/
│   │   │   │── layout/                 
│   │   │   ├── services/
│   │   │   └── pipes/
│   │   │── features/
│   │   │   ├── auth/
│   │   │   │   ├── login/
│   │   │   │   ├── cadrastro/
│   │   │   │   └── alterar-senha/
│   │   │   │── ponto/
│   │   │   │   ├── registro/
│   │   │   │   ├── historico/
│   │   │   │   └── ajuste/
│   │   │   │── dashboard/
│   │   │   │   └── services/
│   │   │   ├── error/
│   │   ├── shared/ 
│   │   │   ├── components/  
│   │   │   ├── directives/         
│   │   │   ├── enum/         
│   │   │   ├── models/         
│   │   │   ├── modules/         
│   │   │   ├── services/         
│   │   │   └── utils/          
│   │   ├── theme/
│   │   └── ...
│   ├── assets/
│   │   ├── images/
│   │   ├── scss/
│   │   │   ├── _constants.scss
│   ├── environments/
│   │   │── environment.ts     
│   │   │── environment.dev.ts     
│   │   │── environment.staging.ts     
│   │   └── environment.prod.ts
│   ├── index.html
│   ├── main.ts
│   └── ...
├── angular.json
├── package.json
└── ...
```

## Descrição das Pastas e Arquivos

| Pasta/Arquivo                     | Descrição                                                                 |
|-----------------------------------|---------------------------------------------------------------------------|
| **`/src/app`**                    | Contém os componentes principais da aplicação, organizados em módulos e funcionalidades. |
| **`/src/app/core`**               | Contém os componentes e serviços essenciais compartilhados em toda a aplicação. |
| **`/src/app/core/guards`**        | Inclui guardas de rota, como `auth.guard.ts`, que controlam o acesso a rotas específicas com base na autenticação do usuário. |
| **`/src/app/core/interceptors`**  | Contém interceptadores, como `auth.interceptor.ts`, que manipulam requisições HTTP (ex.: adicionando tokens de autenticação). |
| **`/src/app/core/layout`**        | Contém os componentes de layout da aplicação, como cabeçalho, rodapé e barra lateral. |
| **`/src/app/core/layout/header`** | Componentes relacionados ao cabeçalho da aplicação.                       |
| **`/src/app/core/layout/footer`** | Componentes relacionados ao rodapé da aplicação.                          |
| **`/src/app/core/layout/sidebar`**| Componentes relacionados à barra lateral da aplicação.                    |
| **`/src/app/core/services`**      | Contém serviços globais que podem ser utilizados em toda a aplicação.     |
| **`/src/app/core/pipes`**         | Contém pipes personalizados para transformação de dados.                  |
| **`/src/app/features`**           | Contém módulos e componentes específicos para cada funcionalidade da aplicação. |
| **`/src/app/features/auth`**      | Contém serviços relacionados à autenticação do usuário.     |
| **`/src/app/features/auth/login`**| Componentes e serviços específicos para a funcionalidade de login.        |
| **`/src/app/features/auth/cadastro`**| Componentes e serviços específicos para a funcionalidade de cadastro de usuários. |
| **`/src/app/features/auth/alterar-senha`**| Componentes e serviços específicos para a funcionalidade de alteração de senha. |
| **`/src/app/features/ponto`**     | Contém componentes e serviços relacionados ao registro de ponto.          |
| **`/src/app/features/ponto/registro`**| Componentes e serviços específicos para o registro de ponto.            |
| **`/src/app/features/ponto/historico`**| Componentes e serviços específicos para o histórico de registros de ponto. |
| **`/src/app/features/ponto/ajuste`**| Componentes e serviços específicos para ajustes de registros de ponto.   |
| **`/src/app/features/dashboard`** | Contém componentes e serviços relacionados ao painel de controle da aplicação. |
| **`/src/app/features/dashboard/services`**| Serviços específicos para o painel de controle.                     |
| **`/src/app/shared`**             | Contém componentes, diretivas, modelos e utilitários compartilhados em toda a aplicação. |
| **`/src/app/shared/components`**  | Componentes reutilizáveis que podem ser utilizados em diferentes partes da aplicação. |
| **`/src/app/shared/directives`**  | Diretivas personalizadas que podem ser aplicadas a elementos HTML.        |
| **`/src/app/shared/enum`**        | Contém enums utilizados em toda a aplicação.                              |
| **`/src/app/shared/models`**      | Contém modelos de dados utilizados na aplicação.                          |
| **`/src/app/shared/modules`**     | Contém módulos compartilhados que podem ser importados em diferentes partes da aplicação. |
| **`/src/app/shared/services`**    | Contém serviços compartilhados que podem ser utilizados em diferentes partes da aplicação. |
| **`/src/app/shared/utils`**       | Contém utilitários e funções auxiliares que podem ser utilizados em toda a aplicação. |
| **`/src/app/theme`**              | Inclui o serviço de tema, que gerencia as configurações de estilo (ex.: alternância entre modo claro e escuro). |
| **`/src/app/app.component.*`**    | Componente raiz da aplicação, que define a estrutura básica do layout.    |
| **`/src/app/app.module.ts`**      | Módulo principal da aplicação, onde todos os outros módulos são importados. |
| **`/src/app/app-routing.module.ts`** | Configura as rotas da aplicação, definindo como os componentes são carregados com base na URL. |
| **`/src/assets`**                 | Contém arquivos estáticos, como imagens, ícones e folhas de estilo SCSS globais. |
| **`/src/assets/images`**          | Armazena imagens utilizadas na aplicação.                                 |
| **`/src/assets/scss`**            | Inclui arquivos SCSS para estilos globais e constantes de design (ex.: `_constants.scss`). |
| **`/src/environments`**           | Contém arquivos de configuração para diferentes ambientes (dev, staging, prod). |
| **`/src/index.html`**             | Arquivo HTML principal que serve como ponto de entrada da aplicação.      |
| **`/src/main.ts`**                | Ponto de entrada da aplicação Angular, onde o módulo principal é inicializado. |
| **`/angular.json`**               | Configuração do projeto Angular, incluindo builds, testes e estilos globais. |
| **`/package.json`**               | Define as dependências do projeto e scripts para execução, build e testes. |

## Personalização de Tema

Este projeto usa Angular Material para alternância entre modo claro e escuro. Para customizar cores, edite o arquivo `src/styles/_themes.scss`.

---
## Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para obter detalhes.

Se você tiver alguma dúvida ou precisar de assistência, não hesite em entrar em contato conosco.
