import { defineConfig } from 'tsup';

const entries = ['src/**/*.{ts,tsx}', '!**/*.d.ts'];

export default defineConfig([
  {
    entry: entries,
    target: 'es6',
    format: ['esm'],
    outDir: 'dist/es',
    platform: 'browser',
    splitting: false,
    minify: false,
    minifyWhitespace: false,
    minifyIdentifiers: false,
    minifySyntax: false,
    sourcemap: false,
    treeshake: false,
    clean: true,
    bundle: false,
    dts: false,
    tsconfig: './tsconfig.build.json',
  },
  {
    entry: entries,
    target: 'es6',
    format: ['cjs'],
    outDir: 'dist/lib',
    platform: 'node',
    splitting: false,
    minify: false,
    minifyWhitespace: false,
    minifyIdentifiers: false,
    minifySyntax: false,
    sourcemap: false,
    treeshake: false,
    bundle: false,
    dts: false,
    clean: true,
    tsconfig: './tsconfig.build.json',
  },
  {
    entry: entries,
    outDir: 'dist/types',
    format: ['esm'],
    clean: true,
    dts: {
      only: true,
    },
    tsconfig: './tsconfig.build.json',
  },
]);
