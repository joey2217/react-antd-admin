# ReactAntdAdmin

## [Ant Design](https://ant-design.gitee.io/index-cn)

## I18n - [react-intl](https://formatjs.io/docs/react-intl/)

- Install

```sh
yarn add react-intl
# or
npm install react-intl --save
```

- IntlWrapper

  [Detail]('./src/language/index.tsx')

- Usage

```tsx
import {useIntl} from 'react-intl';
...
const {formatMessage:f} =useIntl();
...
{f({id:'hello'})}
...
```

- [Example](https://github.com/formatjs/formatjs/tree/master/packages/react-intl/examples)

## MOCK

[Vercel Serverless Functions](https://vercel.com/docs/v2/serverless-functions/introduction)

### 优点

- 开发,线上(必须使用该服务)可同时使用

### Tip

- No more than 12 Serverless Functions can be added to a Deployment on the Hobby plan. Create a team (Pro plan) to deploy more.

## [GGEditor](https://github.com/gaoli/GGEditor)-可视化图编辑器