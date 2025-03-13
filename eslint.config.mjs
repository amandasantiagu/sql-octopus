import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  // Estende as configurações do Next.js
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Adiciona o plugin do Prettier para garantir que o ESLint e o Prettier trabalhem juntos
  'plugin:prettier/recommended',
]

export default {
  ...eslintConfig,
  plugins: ['prettier'], // Adiciona o plugin do Prettier
  rules: {
    'prettier/prettier': 'error', // Garante que o Prettier seja tratado como erro
    'react/react-in-jsx-scope': 'off', // Se necessário, desative para React 17+
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'], // Defina as extensões de arquivos a serem verificadas
      rules: {
        // Adicione regras específicas para essas extensões, se necessário
      },
    },
  ],
}
