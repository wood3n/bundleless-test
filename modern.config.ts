import { moduleTools, defineConfig } from '@modern-js/module-tools';

export default defineConfig({
  plugins: [moduleTools()],
  buildConfig: [
    {
      format: 'cjs',
      target: 'es6',
      buildType: 'bundleless',
      outDir: './dist/lib',
      tsconfig: './tsconfig.build.json',
      dts: false,
    },
    {
      format: 'esm',
      target: 'es6',
      buildType: 'bundleless',
      outDir: './dist/es',
      tsconfig: './tsconfig.build.json',
      dts: false,
    },
    {
      format: 'umd',
      target: 'es6',
      platform: 'browser',
      buildType: 'bundle',
      outDir: './dist/umd',
      tsconfig: './tsconfig.build.json',
      dts: false,
    },
    {
      buildType: 'bundleless',
      outDir: './dist/types',
      tsconfig: './tsconfig.build.json',
      dts: {
        only: true,
      },
    },
  ],
});
