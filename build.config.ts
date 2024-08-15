import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig([
  {
    entries: [
      {
        builder: 'mkdist',
        input: './src',
        format: 'esm',
        outDir: 'dist/es',
        ext: 'js',
        typescript: {
          compilerOptions: {
            target: 'es6',
            jsx: 'react-jsx',
          },
        },
      },
      {
        builder: 'mkdist',
        input: './src',
        format: 'cjs',
        outDir: 'dist/lib',
        ext: 'js',
        typescript: {
          compilerOptions: {
            target: 'es6',
            jsx: 'react-jsx',
          },
        },
      },
    ],
  },
]);
