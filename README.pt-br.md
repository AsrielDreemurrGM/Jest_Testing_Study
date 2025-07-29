<h1>Jest Testing Study</h1>
<p>
  This repository is also available in <a href="./README.md">English</a>.
</p>
<p>
  Projeto prático voltado para o aprendizado e aplicação de testes em aplicações React utilizando <strong>Jest</strong>, <strong>Testing Library</strong> e <strong>React Redux</strong>. Abrange testes de componentes, interações do usuário, alertas e lógica do Redux, além do uso de ferramentas como Mock Service Worker e cobertura de testes.
</p>
<h2>🧪 O Que Está Sendo Testado</h2>
<ul>
  <li>Renderização e interação de componentes React;</li>
  <li>Store do Redux e ações com <code>preloadedState</code>;</li>
  <li>Comportamento de formulários e eventos de UI com <code>fireEvent</code> e <code>screen</code>;</li>
  <li>Mensagens de alerta e efeitos colaterais disparados por componentes;</li>
  <li>Uso do Mock Service Worker (MSW) para simular APIs;</li>
  <li>Função personalizada de renderização com Provider embutido;</li>
  <li>Testes unitários para funções utilitárias e manipulação de strings;</li>
  <li>Relatórios de cobertura de testes.</li>
</ul>
<h2>⚙️ Tecnologias Utilizadas</h2>
<ul>
  <li>React</li>
  <li>Redux Toolkit</li>
  <li>TypeScript</li>
  <li>Jest</li>
  <li>React Testing Library</li>
  <li>Mock Service Worker (MSW)</li>
</ul>
<h2>📂 Estrutura de Pastas</h2>
<pre><code>
src/
├── components/       # Componentes com seus respectivos testes
├── store/            # Configuração do Redux com estado pré-carregado
├── utils/            # Funções utilitárias e helpers
├── tests/            # Arquivos de teste do Jest e utilitários
└── App.tsx           # Arquivo principal da aplicação
</code></pre>
<h2>📌 Destaques dos Commits</h2>
<ul>
  <li><strong>Testes de Renderização</strong> – Criados para header, lista de produtos e itens no carrinho;</li>
  <li><strong>Refatoração da Store</strong> – Adicionada compatibilidade com <code>preloadedState</code> e função de renderização reutilizável;</li>
  <li><strong>Mock Service Worker</strong> – Integrado para simulação de chamadas à API durante os testes;</li>
  <li><strong>Script de Coverage</strong> – Adicionado script para verificação de cobertura dos testes;</li>
  <li><strong>Teste de Alerta</strong> – Criado teste para validar alertas no componente Produto.</li>
</ul>
<h2>📝 Observações</h2>
<ul>
  <li>Este projeto é apenas para fins de estudo e prática;</li>
  <li>O código é escrito com foco em clareza e entendimento dos testes;</li>
  <li>Jest está configurado para funcionar com TypeScript e testes de DOM no React;</li>
  <li>Comentários foram adicionados no código para explicar a lógica dos testes.</li>
</ul>
