import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Forçamos '127.0.0.1' para evitar que o SO tente resolver o nome 'localhost' via DNS.
  // Isso impede que a VPN no host intercepte a requisição local como tráfego de rede externa,
  // contornando o bloqueio da Proteção Contra Ameaças e reduzindo a latência.
  server: {
    host: '127.0.0.1', // Força o servidor a rodar no IP em vez de 'localhost'
    port: 5173, // Mantém a porta padrão ou a de sua preferência
    strictPort: true, // Se a porta 5173 estiver ocupada, ele não pula para outra
  },
});
