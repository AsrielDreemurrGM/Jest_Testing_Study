<h1>Jest Testing Study</h1>
<p>
  Este README também está disponível em <a href="./README.pt-br.md">Português</a>.
</p>
<p>
  A hands-on learning project designed to explore testing practices in React applications using <strong>Jest</strong>, <strong>Testing Library</strong>, and <strong>React Redux</strong>. This includes tests for components, user interactions, alerts, and Redux logic, while integrating tools like Mock Service Worker and code coverage reporting.
</p>
<h2>🧪 What’s Being Tested</h2>
<ul>
  <li>React component rendering and interaction;</li>
  <li>Redux store and dispatched actions using <code>preloadedState</code>;</li>
  <li>Form behavior and UI events using <code>fireEvent</code> and <code>screen</code>;</li>
  <li>Alert messages and side effects triggered by components;</li>
  <li>Mock Service Worker (MSW) for API simulations;</li>
  <li>Custom render utilities for provider wrapping;</li>
  <li>Unit tests for utility functions and string operations;</li>
  <li>Test coverage reports.</li>
</ul>
<h2>⚙️ Technologies Used</h2>
<ul>
  <li>React</li>
  <li>Redux Toolkit</li>
  <li>TypeScript</li>
  <li>Jest</li>
  <li>React Testing Library</li>
  <li>Mock Service Worker (MSW)</li>
</ul>
<h2>📂 Folder Structure</h2>
<pre><code>
src/
├── components/       # Components with associated tests
├── store/            # Redux setup with preloaded state
├── utils/            # Utility functions and helpers
├── tests/            # Jest test files and helpers
└── App.tsx           # Main application entry
</code></pre>
<h2>📌 Commit Highlights</h2>
<ul>
  <li><strong>Render Tests</strong> – Created tests for header, product list, and cart items;</li>
  <li><strong>Redux Store Refactor</strong> – Refactored store to support <code>preloadedState</code> and reusable render logic;</li>
  <li><strong>Mock Service Worker</strong> – Integrated MSW to simulate backend API behavior during tests;</li>
  <li><strong>Coverage Script</strong> – Added script to check project coverage;</li>
  <li><strong>Alert Component Test</strong> – Added test to validate product alert logic.</li>
</ul>
<h2>📝 Notes</h2>
<ul>
  <li>This project is for study and practice purposes only;</li>
  <li>Code is written with readability and test clarity in mind;</li>
  <li>Jest is used with TypeScript and configured for React DOM testing;</li>
  <li>Comments are added throughout to explain testing logic.</li>
</ul>
