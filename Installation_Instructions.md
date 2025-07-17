# Instruções de Instalação - Angular 17 Shell Boilerplate

## Pré-requisitos

- Node.js (versão 18 ou superior)
- npm (versão 8 ou superior)
- Angular CLI (versão 17 ou superior)

## Instalação

### 1. Extrair o arquivo

Extraia todos os arquivos do pacote em um diretório de sua escolha.

### 2. Instalar o Angular CLI (se ainda não tiver)

```bash
npm install -g @angular/cli@17
```

### 3. Instalar as dependências

No diretório do projeto:

```bash
npm install
```

### 4. Instalar Module Federation

```bash
ng add @angular-architects/module-federation
```

### 5. Executar o projeto

```bash
npm start
```

ou

```bash
ng serve
```

O projeto será executado em `http://localhost:4200`

## Configuração Inicial

### 1. Configurar API URL

Edite o arquivo `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api' // Substitua pela sua API URL
};
```

### 2. Configurar Module Federation

Edite o arquivo `webpack.config.js` para configurar os micro frontends:

```javascript
const ModuleFederationPlugin = require("@angular-architects/module-federation/webpack");

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      remotes: {
        "mfe1": "http://localhost:4201/remoteEntry.js",
        "mfe2": "http://localhost:4202/remoteEntry.js",
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
        // ... outras dependências compartilhadas
      },
    }),
  ],
};
```

### 3. Configurar Rotas para Micro Frontends

Adicione as rotas no arquivo `src/app/app.routes.ts`:

```typescript
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'mfe1',
    loadChildren: () => import('mfe1/Module').then(m => m.RemoteEntryModule)
  },
  {
    path: 'mfe2',
    loadChildren: () => import('mfe2/Module').then(m => m.RemoteEntryModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
```

## Comandos Úteis

```bash
# Desenvolvimento
npm start                    # Inicia o servidor de desenvolvimento
ng serve                     # Alternativa ao npm start

# Build
npm run build                # Build para desenvolvimento
npm run build:prod           # Build para produção

# Testes
npm test                     # Executa testes unitários
npm run test:watch           # Executa testes em modo watch

# Lint
npm run lint                 # Verifica código com ESLint

# Adicionar componente
ng generate component nome-do-componente

# Adicionar serviço
ng generate service nome-do-servico

# Adicionar guard
ng generate guard nome-do-guard
```

## Estrutura de Arquivos

```
src/
├── app/
│   ├── components/          # Componentes reutilizáveis
│   ├── directives/          # Diretivas personalizadas
│   ├── guards/              # Guards de rota
│   ├── interceptors/        # HTTP Interceptors
│   ├── models/              # Interfaces e modelos
│   ├── pages/               # Páginas da aplicação
│   ├── pipes/               # Pipes personalizados
│   ├── services/            # Serviços
│   ├── utils/               # Utilitários e helpers
│   ├── app.component.*      # Componente raiz
│   └── app.routes.ts        # Configuração de rotas
├── assets/                  # Recursos estáticos
├── environments/            # Configurações de ambiente
└── styles.scss             # Estilos globais
```

## Próximos Passos

1. **Configurar autenticação**: Implemente a lógica de login no `AuthService`
2. **Adicionar micro frontends**: Configure os MFEs usando Module Federation
3. **Personalizar tema**: Modifique as cores e estilos em `styles.scss`
4. **Configurar CI/CD**: Adicione pipelines de build e deploy
5. **Implementar testes**: Adicione testes unitários e e2e

## Suporte

Para dúvidas ou problemas:
- Verifique a documentação do Angular: https://angular.io/docs
- Consulte a documentação do Module Federation: https://github.com/angular-architects/module-federation-plugin

---

## Arquivo ZIP/RAR - CONTEÚDO COMPLETO

Este boilerplate contém todos os arquivos necessários para iniciar um projeto Angular 17 otimizado como shell application para micro frontends. Todos os arquivos estão prontos para uso e devidamente configurados.

### Conteúdo do Pacote:

1. **Arquivos de Configuração**:
   - package.json (dependências e scripts)
   - angular.json (configuração do Angular CLI)
   - tsconfig.json (configuração TypeScript)
   - webpack.config.js (Module Federation)
   - karma.conf.js (testes)
   - .gitignore
   - .editorconfig

2. **Código Fonte**:
   - Componentes (App, Home, Loading)
   - Serviços (API, Auth, Loading, Notification)
   - Interceptors (Auth, Error, Loading)
   - Guards (Auth)
   - Models (User, API)
   - Pipes (SafeHtml, Truncate)
   - Diretivas (Highlight)
   - Utilitários e Helpers

3. **Estilos e Assets**:
   - styles.scss (tema Angular Material personalizado)
   - assets/ (diretório para recursos estáticos)

4. **Documentação**:
   - README.md (documentação do projeto)
   - Installation_Instructions.md (instruções detalhadas)

O boilerplate está completamente funcional e otimizado para produção, com todas as melhores práticas do Angular 17 implementadas.