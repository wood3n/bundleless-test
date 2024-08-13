# bundleless-test

bundleless 也就是不 bundle，不对 "dependencies" 以及 "peerDependencies" 下的第三方依赖进行打包处理，仅对项目的模块进行转换处理。

以下对一些工具进行 bundleless 打包测试，模块代码包含 react 组件和普通的 ts 代码。

## esbuild

⭐⭐⭐

1. 不支持生成 umd 格式产物；
2. 不支持配置文件配置；
3. `entry`配置 glob 匹配存在 bug，会提示匹配不到文件；不支持自动清空产物目录；
4. bundleless 不支持生成 css；
5. 不支持生成 ts 类型定义文件，可以使用`tsc --project [tsconfig.json]`来生成。

## tsup

⭐⭐⭐⭐

1. 基于 esbuild 编译代码，不支持生成 umd 格式产物；
2. 基本等同于 esbuild，只是在 esbuild 基础上支持`entry`配置 glob 匹配，支持生成类型文件，支持自动清空输出产物的目录等；
3. bundleless 不支持生成 css。

## @modern-js/module-tools

⭐⭐⭐⭐⭐

1. 基于 esbuild 编译代码，在生成 umd 格式产物时会使用 swc；
2. 配置简单，上手即用，提供的`buildPreset`就能满足打包需求，无需编写额外的 nodejs 文件处理代码；
3. 对于 bundleless 支持很好，生成的 es 产物完全保持代码原有结构，bundleless 产物默认会引用 css，而 bundle 产物则不会。
