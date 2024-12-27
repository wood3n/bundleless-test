import { defineConfig } from '@rslib/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  // 编译 jsx 需要配置插件
  plugins: [pluginReact()],
  output: {
    target: 'web',
  },
  source: {
    // bundleless 需要设置入口为目录
    entry: {
      index: './src/**',
    },
    tsconfigPath: './tsconfig.build.json',
  },
  lib: [
    {
      format: 'esm',
      bundle: false,
      syntax: 'es2015',
      output: {
        distPath: {
          root: 'dist/es',
        }
      },
      dts: true,
    },
    {
      format: 'cjs',
      bundle: false,
      syntax: 'es2015',
      output: {
        distPath: {
          root: 'dist/lib',
        }
      },
    },
    {
      format: 'umd',
      umdName: 'myLib',
      syntax: 'es2015',
      output: {
        distPath: {
          root: 'dist/umd',
        }
      },
    },
  ]
});