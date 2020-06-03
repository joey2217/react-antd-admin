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
{{f({id:'hello'})}}
...
```

- [Example](https://github.com/formatjs/formatjs/tree/master/packages/react-intl/examples)
