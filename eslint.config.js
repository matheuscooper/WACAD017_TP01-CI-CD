import js from '@eslint/js';

export default [
  {
    files: ['**/*.js', '**/*.jsx'], // Arquivos a serem analisados
    languageOptions: {
      ecmaVersion: 'latest', // Versão mais recente do ECMAScript
      sourceType: 'module', // Para usar ES Modules
      globals: {
        browser: true, // Ambiente de navegador
        node: true,    // Ambiente Node.js
      },
    },
    rules: {
      ...js.configs.recommended.rules, // Regras recomendadas pelo ESLint
    },
  },
];
