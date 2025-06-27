import react from '@vitejs/plugin-react';

export default {
  plugins: [
    react({
      jsxRuntime: 'automatic',
      include: /\.(js|jsx|ts|tsx)$/, // 👈 Add this
    }),
  ],
};
