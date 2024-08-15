import esbuild from 'esbuild';
import { emptyDir } from 'fs-extra';
import path from 'node:path';
import glob from 'fast-glob';

const entries = glob.sync(['src/**', '!**/*.d.ts']);

const configs = [
  {
    entryPoints: entries,
    bundle: false,
    packages: 'external',
    outdir: 'dist/es',
    minify: false,
    sourcemap: false,
    treeShaking: false,
    splitting: false,
    target: 'es6',
    format: 'esm',
    tsconfig: './tsconfig.build.json',
  },
  {
    entryPoints: entries,
    bundle: false,
    outdir: 'dist/lib',
    minify: false,
    sourcemap: false,
    splitting: false,
    treeShaking: false,
    target: 'es6',
    format: 'cjs',
    tsconfig: './tsconfig.build.json',
  },
];

async function build() {
  // 清理输出目录
  await emptyDir(path.resolve('./dist'));

  // 构建所有配置
  for (let config of configs) {
    try {
      await esbuild.build(config);
    } catch (error) {
      console.error(
        `Build failed for config: ${JSON.stringify(config)}`,
        error,
      );
      process.exit(1);
    }
  }
}

build().catch(err => {
  console.error(err);
  process.exit(1);
});
