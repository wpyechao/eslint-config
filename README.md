# @yc/eslint-config

<a name="@dragon/eslint-config-eslint"></a>
## eslint 规则

<a name="@dragon/eslint-config-eslint-base"></a>
### base（基础配置）

<a name="@dragon/eslint-config-eslint-base-install"></a>
##### 安装

```bash
# npm
npm install @dragon/eslint-config  --save-dev
```
##### 配置

在项目根目录下新建`.eslintrc.js`文件并复制如下内容

```javascript
module.exports = {
  extends: [
    "@dragon/eslint-config"
  ]
}
```
<a name="@dragon/eslint-config-ts"></a>
### typescript

##### 配置
在`.eslintrc.js`文件中添加以下内容

``` javascript
{
  extends: [
    "@dragon/eslint-config",
    "@dragon/eslint-config/typescript",
  ]
}

```

<a name="@dragon/eslint-config-react"></a>
### react

##### 配置

在`.eslintrc.js`文件中添加以下内容

``` javascript
{
  extends: [
    "@dragon/eslint-config/react"
  ]
}

```

<a name="@dragon/eslint-config-prettier"></a>
## 配合 prettier

##### 配置

在`.eslintrc.js`文件中添加以下内容

```javascript
const config = require('@dragon/eslint-config/prettier');

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