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


```bash
controle-ponto/
├── src/
│   ├── app/
│   │   ├── auth/
│   │   │   ├── auth.guard.ts
│   │   │   ├── auth.interceptor.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── login/
│   │   │   │   ├── login.component.ts
│   │   │   │   ├── login.component.html
│   │   │   │   └── login.component.scss
│   │   ├── registro-ponto/
│   │   │   ├── registro-ponto.component.ts
│   │   │   ├── registro-ponto.component.html
│   │   │   ├── registro-ponto.component.scss
│   │   │   ├── edit-point-dialog/
│   │   │   │   ├── edit-point-dialog.component.ts
│   │   │   │   ├── edit-point-dialog.component.html
│   │   │   │   └── edit-point-dialog.component.scss
│   │   ├── services/
│   │   │   ├── notification.service.ts
│   │   │   └── exportar-relatorio.service.ts
│   │   ├── theme/
│   │   │   ├── theme.service.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
│   │   └── ...
│   ├── assets/
│   ├── environments/
│   ├── index.html
│   ├── main.ts
│   └── ...
├── angular.json
├── package.json
└── ...
```

| Pasta                | Descrição                                           |
|----------------------|-----------------------------------------------------|
| `/src/app`           | Contém os componentes principais da aplicação.      |
| `/src/app/auth`           | Contém os componentes e serviços relacionados à autenticação e autorização de usuários. Inclui guardas de rota e interceptadores para gerenciar o acesso.     |
| `/src/app/registro-ponto`           | Abriga os componentes responsáveis pela visualização, registro e edição de pontos. Inclui diálogos para solicitações de ajustes e adições retroativas.    |
| `/src/app/services`           | Contém serviços compartilhados para a aplicação, como notificações e exportação de relatórios. Facilita a comunicação entre componentes e a API.     |
| `/src/app/theme`           | Inclui o serviço para gerenciar temas e configurações de estilo da aplicação, permitindo a alternância entre modo claro e escuro.     |
| `/src/assets`        | Arquivos estáticos, como imagens e ícones.          |
| `/src/environments`  | Configurações de ambiente (dev, prod).              |
| `/src/styles`        | Estilos globais e temas SCSS.                       |

## Personalização de Tema

Este projeto usa Angular Material para alternância entre modo claro e escuro. Para customizar cores, edite o arquivo `src/styles/_themes.scss`.

---
## Licença

Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para obter detalhes.

Se você tiver alguma dúvida ou precisar de assistência, não hesite em entrar em contato conosco.
