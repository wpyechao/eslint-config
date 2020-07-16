# @yc/eslint-config

<a name="pyc-eslint"></a>
## eslint 规则

<a name="pyc-eslint-base"></a>
### base（基础配置）

<a name="pyc-eslint-base-install"></a>
##### 安装

```bash
# npm
npm install eslint-config-pyc  --save-dev
```
##### 配置

在项目根目录下新建`.eslintrc.js`文件并复制如下内容

```javascript
module.exports = {
  extends: [
    "pyc"
  ]
}
```
<a name="pyc-ts"></a>
### typescript

##### 配置
在`.eslintrc.js`文件中添加以下内容

``` javascript
{
  extends: [
    "pyc",
    "pyc/typescript",
  ]
}

```

<a name="pyc-react"></a>
### react

##### 配置

在`.eslintrc.js`文件中添加以下内容

``` javascript
{
  extends: [
    "pyc/react"
  ]
}

```

<a name="pyc-prettier"></a>
## 配合 prettier

##### 配置

在`.eslintrc.js`文件中添加以下内容

```javascript
const config = require('pyc/prettier');

module.exports = {
  ...config,
};
```

1.**当`commit`文件的时候执行`pretty-quick`去修复样式问题**

安装
```bash
npm install pretty-quick husky --dev-save
```

在`package.json`中添加如下代码
```json
{ 
  "husky": { 
    "hooks": { 
        "pre-commit": "pretty-quick --staged" 
    } 
  } 
}
```

2.**通过 VSCode 中 ESlint 插件提示并`autoFixOnSave`**

安装
```bash
npm install eslint-plugin-prettier husky --dev-save
```

在 ESLint 配置文件`.eslintrc.js`文件中添加 `prettier` 规则

```javascript
{
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error"
  }
}
```