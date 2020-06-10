export type Theme = | 'default' | 'dark';

const themeUrl = (theme: Theme) => {
  const antdVersion = '4.3.0'
  if (theme === 'dark') {
    return `https://cdn.jsdelivr.net/npm/antd@${antdVersion}/dist/antd.dark.min.css`;
  }
  return `https://cdn.jsdelivr.net/npm/antd@${antdVersion}/dist/antd.min.css`;
}

/**
 * 切换主题
 * 参考 https://pro.ant.design/docs/dynamic-theme-cn
 * @param theme Theme
 */
export function switchTheme(theme: Theme) {
  let styleLink: HTMLElement | null = document.getElementById('theme-style');
  let body = document.getElementsByTagName('body')[0];
  const themeHref = themeUrl(theme);
  const themeBodyClassName = `${theme}-theme`
  if (styleLink) {
    // 假如存在id为theme-style 的link标签，直接修改其href
    (styleLink as HTMLLinkElement).href = themeHref; // 切换 antd 组件主题
    body.className = themeBodyClassName; // 切换自定义组件的主题
    body.setAttribute('data-theme',theme);
  } else {
    // 不存在的话，则新建一个
    styleLink = document.createElement('link');
    (styleLink as HTMLLinkElement).type = 'text/css';
    (styleLink as HTMLLinkElement).rel = 'stylesheet';
    styleLink.id = 'theme-style';
    (styleLink as HTMLLinkElement).href = themeHref;
    body.className = themeBodyClassName;
    body.setAttribute('data-theme',theme);
    document.body.append(styleLink);
  }
}