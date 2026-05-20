import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['test/**/*.test.ts'],
    env: {
      VITE_GA_ID: 'G-TEST123',
    },
  },
})
