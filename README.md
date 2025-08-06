# 🚀 Meu Portfólio - Nícollas Carvalho

Portfólio interativo com tema hacker, animações da matrix e painéis deslizantes desenvolvido com React, TypeScript e Express.

## 🎯 Recursos

- ✅ **Tema Hacker** com animação de chuva da matrix em tempo real
- ✅ **Painéis Deslizantes** interativos para navegação
- ✅ **Cards Flutuantes** com animações suaves
- ✅ **Showcase de Tecnologias** com efeitos hover
- ✅ **Links para Redes Sociais** com sublinhado verde animado
- ✅ **Design Responsivo** para desktop e mobile
- ✅ **Performance Otimizada** com Vite e React 18

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca principal
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animações fluidas
- **shadcn/ui** - Componentes de UI
- **React Icons** - Ícones das tecnologias

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **TypeScript** - Tipagem no backend
- **Drizzle ORM** - ORM para banco de dados

## 📦 Instalação e Configuração

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### 1. Clone o Repositório
```bash
git clone <url-do-seu-repositorio>
cd portfolio-nicollas
```

### 2. Instale as Dependências
```bash
npm install
```

### 3. Configure as Variáveis de Ambiente (Opcional)
Crie um arquivo `.env` na raiz do projeto:
```bash
NODE_ENV=development
PORT=5000
DATABASE_URL=sua_url_do_banco_aqui
```

### 4. Inicie o Servidor de Desenvolvimento
```bash
npm run dev
```

O portfólio estará disponível em: `http://localhost:5000`

## 🚀 Scripts Disponíveis

```bash
# Desenvolvimento - inicia servidor com hot reload
npm run dev

# Build para produção
npm run build

# Executar versão de produção
npm start

# Verificar tipagem TypeScript
npm run check

# Aplicar migrações do banco (se necessário)
npm run db:push
```

## 📁 Estrutura do Projeto

```
portfolio-nicollas/
├── client/                 # Frontend React
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   │   ├── matrix-rain.tsx
│   │   │   ├── sliding-panel.tsx
│   │   │   └── catalog-card.tsx
│   │   ├── pages/          # Páginas da aplicação
│   │   │   ├── home.tsx
│   │   │   └── not-found.tsx
│   │   ├── lib/           # Utilitários e configurações
│   │   ├── hooks/         # Custom hooks
│   │   ├── App.tsx        # Componente raiz
│   │   ├── main.tsx       # Entry point
│   │   └── index.css      # Estilos globais
│   └── index.html         # Template HTML
├── server/                # Backend Express
│   ├── index.ts          # Servidor principal
│   ├── routes.ts         # Rotas da API
│   ├── storage.ts        # Interface de storage
│   └── vite.ts           # Configuração Vite
├── shared/               # Código compartilhado
│   └── schema.ts         # Schemas do banco
├── package.json          # Dependências e scripts
├── vite.config.ts        # Configuração Vite
├── tailwind.config.ts    # Configuração Tailwind
└── tsconfig.json         # Configuração TypeScript
```

## 🎨 Personalização

### Cores do Tema Hacker
As cores principais estão definidas em `client/src/index.css`:
```css
:root {
  --matrix-green: hsl(120, 100%, 50%);
  --dark-green: hsl(120, 100%, 28%);
  --deep-black: hsl(320, 50%, 3%);
  --neon-green: hsl(120, 100%, 57%);
}
```

### Modificar Conteúdo
- **Sobre mim**: Edite o conteúdo em `client/src/pages/home.tsx` no painel "about"
- **Projetos**: Modifique o array `projects` no mesmo arquivo
- **Tecnologias**: Atualize o array `technologies` com suas skills
- **Contatos**: Altere os links das redes sociais no painel "contact"

### Ajustar Animações
- **Intensidade da Matrix**: Modifique os parâmetros em `client/src/components/matrix-rain.tsx`
- **Velocidade das Animações**: Ajuste as durações no Framer Motion em cada componente

## 🌐 Deploy

### Deploy no Replit
1. Faça upload do projeto para o Replit
2. O Replit detectará automaticamente as configurações
3. Clique em "Run" para iniciar o servidor
4. Acesse através da URL gerada pelo Replit

### Deploy em Outras Plataformas
```bash
# Gerar build de produção
npm run build

# Os arquivos estarão em dist/
# Configure seu servidor para servir os arquivos estáticos
```

## 🔧 Desenvolvimento

### Adicionando Novos Componentes
1. Crie o componente em `client/src/components/`
2. Importe e use em `client/src/pages/home.tsx`
3. Adicione estilos necessários em `client/src/index.css`

### Criando Novas Páginas
1. Adicione o arquivo em `client/src/pages/`
2. Registre a rota em `client/src/App.tsx`

### Adicionando APIs
1. Defina rotas em `server/routes.ts`
2. Use o `storage` para operações de dados
3. Teste com curl ou Thunder Client

## 🎯 Funcionalidades Principais

### 1. Animação Matrix Rain
- 200+ caracteres animados simultaneamente
- 3 níveis de intensidade (bright, medium, dim)
- Performance otimizada com cleanup automático

### 2. Painéis Deslizantes
- Transições suaves com Framer Motion
- Navegação por teclado (ESC para fechar)
- Conteúdo organizado por seções

### 3. Cards Interativos
- Efeitos hover com escala e sombra
- Animação de flutuação contínua
- Delays escalonados para entrada

### 4. Responsividade
- Grid adaptativo para diferentes telas
- Texto e elementos redimensionáveis
- Navegação touch-friendly

## 📞 Suporte

Para dúvidas ou problemas:
- 📧 Email: nicollaascarvalho@gmail.com
- 🐱 GitHub: [nicollascarvalh0](https://github.com/nicollascarvalh0)
- 💼 LinkedIn: [nicollascarvalho](https://linkedin.com/in/nicollascarvalho)

---

**Desenvolvido com ❤️ por Nícollas Carvalho usando React + TypeScript**
