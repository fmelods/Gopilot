### Gopilot - Plataforma Web de Aprendizado de Go

<div>

`<h3>`Aprenda Go de forma divertida e interativa através da web`</h3>`

</div>## 📋 Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Executando o Projeto](#executando-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Solução de Problemas](#solução-de-problemas)
- [Próximos Passos](#próximos-passos)
- [Contribuição](#contribuição)
- [Licença](#licença)


## 🔍 Visão Geral

Gopilot é uma plataforma web educacional projetada para ensinar a linguagem de programação Go (Golang) de forma interativa e gamificada. A plataforma oferece uma experiência de aprendizado personalizada com trilhas de aprendizado, exercícios práticos, quizzes e um assistente de IA para ajudar os usuários a dominarem Go.

## ✨ Funcionalidades

- **Trilhas de Aprendizado Personalizadas**: Roteiros adaptados ao nível de experiência e objetivos do usuário
- **Lições Interativas**: Conteúdo teórico e prático sobre Go
- **Exercícios de Codificação**: Pratique com desafios reais de programação diretamente no navegador
- **Quizzes**: Teste seu conhecimento após cada lição
- **Assistente de IA**: Obtenha ajuda e explicações sobre conceitos de Go
- **Acompanhamento de Progresso**: Visualize seu avanço e conquistas
- **Gamificação**: Sistema de níveis, medalhas e sequências diárias
- **Design Responsivo**: Experiência otimizada em dispositivos desktop e móveis


## 🛠️ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) - Framework React com renderização do lado do servidor
- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [shadcn/ui](https://ui.shadcn.com/) - Componentes de UI reutilizáveis
- [Lucide React](https://lucide.dev/) - Biblioteca de ícones
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript


## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18.17 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) ou [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)


## 🚀 Instalação

1. Clone o repositório:

```shellscript
git clone https://github.com/seu-usuario/gopilot-web.git
cd gopilot-web
```


2. Instale as dependências:

```shellscript
npm install
# ou
yarn install
# ou
pnpm install
```


3. Configure as variáveis de ambiente:

```shellscript
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações.




## ▶️ Executando o Projeto

1. Inicie o servidor de desenvolvimento:

```shellscript
npm run dev
# ou
yarn dev
# ou
pnpm dev
```


2. Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.


### Construindo para produção

```shellscript
npm run build
npm run start
# ou
yarn build
yarn start
# ou
pnpm build
pnpm start
```

## 📁 Estrutura do Projeto

```plaintext
gopilot-web/
├── app/                    # Diretório principal do App Router do Next.js
│   ├── api/                # Rotas de API
│   ├── chat/               # Página do assistente de IA
│   ├── dashboard/          # Página do dashboard
│   ├── lesson/             # Página de lições
│   ├── login/              # Página de login
│   ├── quiz/               # Página de quizzes
│   ├── register/           # Página de registro
│   ├── layout.tsx          # Layout principal da aplicação
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/             # Componentes reutilizáveis
│   ├── theme-provider.tsx  # Provedor de tema
│   ├── ui/                 # Componentes de UI (shadcn)
│   └── ...                 # Outros componentes
├── hooks/                  # Hooks personalizados
│   ├── use-mobile.tsx      # Hook para detecção de dispositivo móvel
│   └── use-toast.ts        # Hook para notificações toast
├── lib/                    # Funções utilitárias
│   └── utils.ts            # Funções auxiliares
├── public/                 # Arquivos estáticos
│   └── images/             # Imagens
├── next.config.mjs         # Configuração do Next.js
├── tailwind.config.ts      # Configuração do Tailwind CSS
├── tsconfig.json           # Configuração do TypeScript
└── package.json            # Dependências e scripts
```

## 🔧 Solução de Problemas

### Erro: Module not found

Se você encontrar erros de módulos não encontrados, verifique se todas as dependências foram instaladas corretamente:

```shellscript
npm install
# ou
yarn install
# ou
pnpm install
```

### Erro: TypeScript errors

Para resolver erros de TypeScript:

```shellscript
npm run lint
# ou
yarn lint
# ou
pnpm lint
```

### Problemas com o Tailwind CSS

Se os estilos do Tailwind não estiverem funcionando corretamente:

1. Verifique se o Tailwind está configurado corretamente no `tailwind.config.ts`
2. Certifique-se de que o arquivo `globals.css` está importando o Tailwind:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```


3. Execute o seguinte comando para regenerar os estilos:

```shellscript
npm run dev
```




## 🚀 Próximos Passos

- Implementar autenticação com NextAuth.js
- Adicionar mais lições e exercícios
- Implementar execução de código Go em tempo real
- Adicionar suporte a múltiplos idiomas
- Implementar sistema de comunidade e fórum
- Adicionar integração com GitHub para projetos práticos
- Implementar sistema de certificados


## 👥 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request


## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

<div>`<p>`Desenvolvido com ❤️ para entusiastas da linguagem Go`</p>`

</div>