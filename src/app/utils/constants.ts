export const APP_CONSTANTS = {
    APP_NAME: 'Angular 17 Shell',
    VERSION: '1.0.0',
    COPYRIGHT: '© 2024 Sua Empresa',
    
    // API
    API_TIMEOUT: 30000,
    RETRY_ATTEMPTS: 3,
    
    // Storage Keys
    STORAGE_KEYS: {
      TOKEN: 'auth_token',
      USER: 'current_user',
      PREFERENCES: 'user_preferences'
    },
    
    // Routes
    ROUTES: {
      HOME: '/',
      LOGIN: '/login',
      PROFILE: '/profile'
    },
    
    // Messages
    MESSAGES: {
      ERRORS: {
        NETWORK: 'Erro de conexão. Verifique sua internet.',
        UNAUTHORIZED: 'Acesso não autorizado.',
        FORBIDDEN: 'Acesso negado.',
        NOT_FOUND: 'Recurso não encontrado.',
        SERVER_ERROR: 'Erro interno do servidor.'
      },
      SUCCESS: {
        SAVED: 'Dados salvos com sucesso!',
        DELETED: 'Item excluído com sucesso!',
        UPDATED: 'Dados atualizados com sucesso!'
      }
    }
  };
  