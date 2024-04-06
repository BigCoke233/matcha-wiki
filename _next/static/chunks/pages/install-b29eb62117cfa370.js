(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[768],{7720:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/install",function(){return t(1384)}])},1384:function(e,n,t){"use strict";t.r(n),t.d(n,{__toc:function(){return r}});var i=t(5893),s=t(2673),a=t(8092),c=t(5745);t(7954);var l=t(2643);let r=[{depth:2,value:"安装 Typecho",id:"安装-typecho"},{depth:3,value:"环境要求",id:"环境要求"},{depth:3,value:"获取程序本体",id:"获取程序本体"},{depth:3,value:"开始安装",id:"开始安装"},{depth:2,value:"使用 Matcha 主题",id:"使用-matcha-主题"},{depth:3,value:"获取主题文件",id:"获取主题文件"},{depth:3,value:"安装并启用主题",id:"安装并启用主题"}];function h(e){let n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",ul:"ul",li:"li",a:"a",pre:"pre",code:"code",span:"span",strong:"strong"},(0,l.a)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"安装和使用"}),"\n",(0,i.jsx)(n.p,{children:"这篇教程将会讲述基础的安装 Typecho 程序和使用 Matcha 主题的方法，如果你已经掌握了这些，请跳过这一部分。"}),"\n",(0,i.jsx)(n.h2,{id:"安装-typecho",children:"安装 Typecho"}),"\n",(0,i.jsx)(n.p,{children:"Matcha 主题是为 Typecho 设计的博客主题，只能在 Typecho 上使用，所以你必须先安装 Typecho。"}),"\n",(0,i.jsx)(n.h3,{id:"环境要求",children:"环境要求"}),"\n",(0,i.jsx)(n.p,{children:"Typecho 对环境的要求如下："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"PHP 5.1 以上"}),"\n",(0,i.jsx)(n.li,{children:"Mysql, PostgreSQL, SQLite 任意一种数据库支持，并在 PHP 中安装了相关扩展"}),"\n",(0,i.jsx)(n.li,{children:"CURL 或者 Socket 扩展支持"}),"\n",(0,i.jsx)(n.li,{children:"mbstring 或者 iconv 扩展支持"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"但鉴于你使用的是 Matcha 主题，我们建议你按照以下的要求配置环境："}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"PHP 7.0.0 以上"}),"\n",(0,i.jsx)(n.li,{children:"CURL 拓展支持"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"其他的与 Typecho 要求相同。"}),"\n",(0,i.jsx)(n.h3,{id:"获取程序本体",children:"获取程序本体"}),"\n",(0,i.jsxs)(n.p,{children:["在 ",(0,i.jsx)(n.a,{href:"http://typecho.org/",children:"Typecho 官网"})," 下载最新 1.2.0 稳定版，尽管 Matcha 主题在旧的版本也能够正常运行，但我们建议你使用最新的稳定版，因为 Matcha 主题在开发过程中不会考虑旧版本的兼容性。"]}),"\n",(0,i.jsx)(n.h3,{id:"开始安装",children:"开始安装"}),"\n",(0,i.jsx)(n.p,{children:"将你获取的文件解压，将如下结构的文件放入你的网站根目录。"}),"\n",(0,i.jsx)(n.pre,{"data-language":"text","data-theme":"default",children:(0,i.jsxs)(n.code,{"data-language":"text","data-theme":"default",children:[(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"/admin/"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"/install/"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"/usr/"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"/var/"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"/index.php"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"/install.php"})})]})}),"\n",(0,i.jsx)(n.p,{children:"访问你的网站，根据提示进行安装。"}),"\n",(0,i.jsx)(n.h2,{id:"使用-matcha-主题",children:"使用 Matcha 主题"}),"\n",(0,i.jsx)(n.p,{children:"Matcha 主题的安装步骤与其他大多数主题无异。"}),"\n",(0,i.jsx)(n.h3,{id:"获取主题文件",children:"获取主题文件"}),"\n",(0,i.jsxs)(n.p,{children:["在主题仓库的 ",(0,i.jsx)(n.a,{href:"https://github.com/BigCoke233/matcha/releases",children:"Releases"})," 页面下载最新版主题的 zip 压缩包，或者直接下载仓库的 ",(0,i.jsx)(n.code,{children:"main"})," 分支。"]}),"\n",(0,i.jsxs)(n.p,{children:["需要特别注意的是，在 Releases 页面（即 发行包页面）下载到的主题版本为",(0,i.jsx)(n.strong,{children:"发行版"}),"或",(0,i.jsx)(n.strong,{children:"先行版"}),"：版本号形如 ",(0,i.jsx)(n.code,{children:"1.0.0"})," 的版本为发行版；版本号形如 ",(0,i.jsx)(n.code,{children:"1.1.0-beta.1"})," 的为先行版。\n在仓库页面（即主题的 github 主页）直接下载到的版本称作",(0,i.jsx)(n.strong,{children:"发行版"}),"，发行版也有自己的版本号，即 ",(0,i.jsx)(n.code,{children:"当前最新发行版版本号-alpha+最近一次 commit 的哈希码前七位"}),"，不过大部分时候不会使用。"]}),"\n",(0,i.jsx)(n.p,{children:"**稳定性上，发行版 > 先行版 > 开发版；内容新旧程度上，开发版 > 先行版 > 发行版。**我们建议尽量使用发行版或先行版，开发版可能会有未被发现的 bug。"}),"\n",(0,i.jsx)(n.h3,{id:"安装并启用主题",children:"安装并启用主题"}),"\n",(0,i.jsxs)(n.p,{children:["将获到的主题文件解压，确保文件夹名称为 ",(0,i.jsx)(n.code,{children:"matcha"}),"，如果不是，请重命名。"]}),"\n",(0,i.jsxs)(n.p,{children:["将 ",(0,i.jsx)(n.code,{children:"matcha"})," 文件夹放入 Typecho 安装目录下的 ",(0,i.jsx)(n.code,{children:"usr/themes/"})," 目录，然后登陆后台，点击 控制台-外观，找到 Matcha 主题，点击启用即可。"]})]})}let o={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.a)(),e.components);return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)},pageOpts:{filePath:"pages/install.mdx",route:"/install",pageMap:[{kind:"Meta",data:{index:"介绍",install:"安装和使用",config:"主题设置",page_template:"页面模板",extension:"拓展功能"}},{kind:"MdxPage",name:"config",route:"/config"},{kind:"MdxPage",name:"extension",route:"/extension"},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"install",route:"/install"},{kind:"MdxPage",name:"page_template",route:"/page_template"}],flexsearch:{codeblocks:!0},title:"安装和使用",headings:r},pageNextRoute:"/install",nextraLayout:a.ZP,themeConfig:c.Z};n.default=(0,s.j)(o)},5745:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var i=t(5893);t(7294);let s="My detailed reading notes from computer science books";var a=t(1163),c={logo:(0,i.jsx)(function(){return(0,i.jsxs)("h1",{children:[(0,i.jsx)("strong",{children:"Matcha"})," \xb7 使用指南"]})},{}),project:{link:"https://github.com/BigCoke233/matcha-doc"},docsRepositoryBase:"https://github.com/BigCoke233/matcha-doc/blob/main",footer:{text:"The Typecho theme, Matcha"},head:function(){let e="Reading notes";return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#fff"}),(0,i.jsx)("meta",{httpEquiv:"Content-Language",content:"en"}),(0,i.jsx)("meta",{name:"description",content:s}),(0,i.jsx)("meta",{property:"og:title",content:e}),(0,i.jsx)("meta",{property:"og:description",content:s}),(0,i.jsx)("meta",{name:"apple-mobile-web-app-title",content:e}),(0,i.jsx)("link",{rel:"icon",type:"image/x-icon",href:"".concat("/reading-notes","/favicon.ico")})]})},feedback:{content:()=>(0,i.jsx)(i.Fragment,{children:"Question? Give me feedback →"}),labels:"feedback"},useNextSeoProps:function(){let{route:e}=(0,a.useRouter)(),n={description:s};return"/"!==e?n.titleTemplate="%s – Reading notes":n.titleTemplate="%s",n},i18n:[]}}},function(e){e.O(0,[763,888,774,179],function(){return e(e.s=7720)}),_N_E=e.O()}]);