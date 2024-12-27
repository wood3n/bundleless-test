# bundleless-test

bundleless 也就是不 bundle，不对 "dependencies" 以及 "peerDependencies" 下的第三方依赖进行打包处理，仅对项目的模块进行转换处理。

以下对一些工具进行 bundleless 打包测试，模块代码包含 react 组件和普通的 ts 代码。

## @modern-js/module-tools

⭐⭐⭐⭐⭐

1. `esm`和`cjs`产物基于 esbuild 编译代码，`umd`产物时会使用 swc；
2. 配置简单，上手即用，提供的`buildPreset`就能满足打包需求，无需编写额外的 nodejs 文件处理代码；
3. `module-tools`还内置了生成模块文档，以及 changelog 的能力，所以`module-tools`比较侧重于一个工具解决工具库开发的场景。

## tsup

⭐⭐⭐⭐

1. 基于 esbuild 编译代码，不支持生成`umd`产物；
2. bundleless 打包需要设置`bundle:false`，同时指定`entry`为文件夹，`entry`支持 glob 匹配，对于不想转换的模块可通过 glob 忽略。

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

## rslib

⭐⭐⭐

rslib 是基于 rust 编写的下一代库构建工具，支持四种 JavaScript 文件的输出格式：esm、cjs、umd 和 mf。

1. 基于 swc 编译代码；
2. 配置简单，和`@modern-js/module-tools`相比，没有内置文档编写，changelog 等能力，能力更专注于构建库；
3. 长远来看，rslib 有望取代 tsup，但是目前 rslib 仍存在一些 bug 需要解决。
