<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-funciona">Como funciona</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-estrutura-do-projeto">Estrutura</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-executar">Como executar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-scripts-disponiveis">Scripts</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-testes">Testes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-contribuicao">Contribuição</a>
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)

## 💻 Projeto

DevMemory é um jogo da memória feito com React e TypeScript, construído com propósito educacional para praticar conceitos como estado, efeitos, componentes, tipagem e organização de projeto.

O jogo apresenta um tabuleiro com pares de ícones embaralhados. O objetivo é encontrar todos os pares com o menor número de jogadas e no menor tempo possível. O projeto foi desenvolvido para reforçar:

- Organização de componentes e estilos.
- Manipulação de estado e lógica de jogo.
- Tipagem com TypeScript e reutilização de tipos.
- Boas práticas de estrutura e utilitários.

## 🧠 Como funciona

- Tabuleiro: é gerado a partir de uma lista de itens (`src/data/items.ts`), duplicados e embaralhados.
- Jogada: ao clicar em uma carta do tabuleiro:
  - A carta é revelada temporariamente.
  - Quando duas cartas estão reveladas, o jogo verifica se formam um par.
  - Se forem iguais, permanecem abertas (pareadas). Se não, são ocultadas novamente após um pequeno intervalo.
- Controles:
  - Botão de reiniciar para recompor e embaralhar o tabuleiro.
  - Contadores de jogadas e tempo decorrido.
- Finalização:
  - O jogo termina quando todos os pares são encontrados, exibindo o total de jogadas e tempo.

Fluxo típico da lógica:

1. Iniciar jogo: embaralhar itens e resetar contadores.
2. Clicar em item: revelar carta e registrar seleção.
3. Verificar par: comparar duas cartas selecionadas.
4. Atualizar estado: fixar pares corretos ou ocultar novamente.
5. Checar término: se todas as cartas estiverem pareadas, finalizar.

## 🧩 Estrutura do projeto

Principais arquivos e pastas:

- `src/App.tsx`: ponto principal do app; gerencia estado do jogo, ações de clique e reinício.
- `src/AppStyles.ts`: estilos em `styled-components` (ou similar) utilizados pelo app.
- `src/components/`:
  - `Button/`: botão reutilizável (ex.: iniciar/reiniciar jogo).
  - `GridItem/`: componente visual de cada carta do tabuleiro.
  - `InfoItem/`: exibição de informações (tempo, jogadas).
- `src/data/items.ts`: fonte dos itens/ícones que compõem os pares do tabuleiro.
- `src/helpers/formatTimeEllapse.ts`: utilitário para formatar tempo decorrido.
- `src/types/GridItemType.ts`: tipos usados na estrutura do jogo.
- `src/index.tsx` e `src/index.css`: bootstrap da aplicação e estilos globais.
- `public/`: assets públicos e HTML base.
- `tsconfig.json`: configuração do TypeScript.

## ⚙️ Requisitos

- Node.js 16+ (recomendado 18+).
- npm 8+.

## 🚀 Como executar

1. Clone o repositório:
   - `git clone https://github.com/Vinicius-Barbosa-Santos/react_jogo_da_memoria.git`
2. Instale as dependências:
   - `npm install`
3. Inicie o servidor de desenvolvimento:
   - `npm start`
4. Acesse no navegador:
   - `http://localhost:3000`

## 🔧 Scripts disponíveis

- `npm start`: inicia o servidor de desenvolvimento (porta `3000` por padrão).
- `npm test`: executa a suíte de testes (quando aplicável).
- `npm run build`: cria a versão de produção em `build/`.

## 🧪 Testes

- Arquivos de teste ficam em `src/*.test.tsx`.
- Para rodar: `npm test`.

## 📦 Build e deploy

- `npm run build` gera os arquivos otimizados para produção em `build/`.
- O conteúdo de `build/` pode ser servido por qualquer servidor estático (ex.: Netlify, Vercel, GitHub Pages).

## 🤝 Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature/fix: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m "minha feature"`.
4. Push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## 📝 Licença

Este projeto é de uso educacional. Caso queira reutilizar partes do código, dê os devidos créditos.

## 📷 Créditos de ícones

Os ícones do tabuleiro estão em `src/svgs/`. Verifique direitos e uso conforme necessidade.

Agora você pode acessar [`localhost:3000`](http://localhost:3000) do seu navegador.
