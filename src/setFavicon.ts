import logo from 'figma:asset/62ea191f6ec12eb5eebb3b716eecf37b3badd2bc.png';

function setFavicon(href: string) {
  let link = document.querySelector("link[rel*='icon']") as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.href = href;
}

setFavicon(logo);
