# bundleless-test

bundleless 也就是不 bundle，不对 "dependencies" 以及 "peerDependencies" 下的第三方依赖进行打包处理，仅对项目的模块进行转换处理。

以下对一些工具进行 bundleless 打包测试，模块代码包含 react 组件和普通的 ts 代码。

## esbuild

⭐⭐⭐

1. 不支持生成 umd 格式产物；
2. 不支持配置文件配置；
3. bundleless 打包需要设置`bundle:false`，同时指定`entry`为文件夹，`entry`支持 glob 匹配，对于不想转换的模块可通过 glob 忽略。
4. 不支持生成 ts 类型定义文件，可以使用`tsc --project [tsconfig.json]`来生成。

## unbuild

⭐⭐⭐

1. 基于 esbuild，不支持生成 umd 格式产物；
2. 配置有点乱，对 jsx 转换无法读取到 tsconfig 里面的配置，都转换成了`React.createElement`。

## tsup

⭐⭐⭐⭐

1. 基于 esbuild 编译代码，不支持生成`umd`产物；
2. bundleless 打包需要设置`bundle:false`，同时指定`entry`为文件夹，`entry`支持 glob 匹配，对于不想转换的模块可通过 glob 忽略。

## @modern-js/module-tools

⭐⭐⭐⭐⭐

1. `esm`和`cjs`产物基于 esbuild 编译代码，`umd`产物时会使用 swc；
2. 配置简单，上手即用，提供的`buildPreset`就能满足打包需求，无需编写额外的 nodejs 文件处理代码。
