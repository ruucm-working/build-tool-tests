import { defineConfig } from 'tsup'

export default defineConfig({
    target: 'esnext',
    platform: "browser",
    define: {
        global: 'globalThis'
    },
})
  