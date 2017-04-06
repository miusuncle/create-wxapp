# `babel-helper` 使用说明

## 生成 babel-helper.js 文件

生成目录：`src/vendor/babel-helper.js`

生成命令

- `output-type` 指定输出格式，可选值有 `global`、`umd` 及 `var`
- `whitelist` 指定要包含的 helper 方法

```
./node_modules/.bin/babel-external-helpers --output-type umd --whitelist "classCallCheck,createClass,defineEnumerableProperties,defaults,defineProperty,extends,get,inherits,objectDestructuringEmpty,objectWithoutProperties,possibleConstructorReturn,set,slicedToArray,slicedToArrayLoose,toArray,toConsumableArray" > src/vendor/babel-helpers.js
```

## 支持的 helper 方法

- typeof
- jsx
- asyncIterator
- asyncGenerator
- asyncGeneratorDelegate
- asyncToGenerator
- classCallCheck
- createClass
- defineEnumerableProperties
- defaults
- defineProperty
- extends
- get
- inherits
- instanceof
- interopRequireDefault
- interopRequireWildcard
- newArrowCheck
- objectDestructuringEmpty
- objectWithoutProperties
- possibleConstructorReturn
- selfGlobal
- set
- slicedToArray
- slicedToArrayLoose
- taggedTemplateLiteral
- taggedTemplateLiteralLoose
- temporalRef
- temporalUndefined
- toArray
- toConsumableArray

## 参考

- [babel-plugin-external-helpers](https://babeljs.io/docs/plugins/external-helpers/)