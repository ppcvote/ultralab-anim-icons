#!/usr/bin/env node
// 產生 icons/*.svg、css/ul-icons.css、icons.json、index.html。唯一來源 src/icons.mjs。
// 用法：node build.mjs
import { writeFileSync, mkdirSync } from 'node:fs'
import { ICONS, CATEGORIES, VERSION, svgMarkup, fullCss } from './src/icons.mjs'
import { T, mainHtml, clientData, SHOWCASE_CSS, SHOWCASE_JS } from './src/showcase.mjs'

const here = (p) => new URL(p, import.meta.url)
mkdirSync(here('./icons/'), { recursive: true })
mkdirSync(here('./css/'), { recursive: true })

// 文字規則：不准破折號、不准「您」
const BANNED = /[—–]|您/
const check = (where, s) => { const m = String(s).match(BANNED); if (m) throw new Error(`${where} 含禁用字「${m[0]}」`) }
for (const ic of ICONS) for (const k of ['zh', 'en', 'ariaZh', 'ariaEn', 'useZh', 'useEn', 'whyZh', 'whyEn']) check(`${ic.name}.${k}`, ic[k])
check('T', JSON.stringify(T))
const names = new Set()
for (const ic of ICONS) {
  if (!/^[a-z][a-z-]*$/.test(ic.name) || names.has(ic.name)) throw new Error(`名稱不合法或重複：${ic.name}`)
  names.add(ic.name)
  if (!CATEGORIES.some((c) => c.id === ic.cat)) throw new Error(`${ic.name} 類別不存在`)
  // 只准便宜屬性：keyframes 裡只能出現 transform／opacity／stroke-dashoffset
  const props = [...ic.css(ic.name, ic.dur).matchAll(/@keyframes[^{]+\{([\s\S]*?\})\}/g)].flatMap((m) => [...m[1].matchAll(/([a-z-]+)\s*:/g)].map((x) => x[1]))
  const bad = props.filter((p) => !['transform', 'opacity', 'stroke-dashoffset'].includes(p))
  if (bad.length) throw new Error(`${ic.name} 動到昂貴屬性：${[...new Set(bad)].join(', ')}`)
}

for (const ic of ICONS) writeFileSync(here(`./icons/${ic.name}.svg`), svgMarkup(ic, { style: true, lang: 'en' }) + '\n')
writeFileSync(here('./css/ul-icons.css'), fullCss())
writeFileSync(here('./icons.json'), JSON.stringify({
  name: 'Ultra Lab Motion Icons', version: VERSION, license: 'MIT',
  categories: CATEGORIES.map(({ id, zh, en }) => ({ id, zh, en })),
  icons: ICONS.map(({ name, cat, zh, en, ariaZh, ariaEn, dur }) => ({ name, category: cat, zh, en, ariaZh, ariaEn, duration: dur, file: `icons/${name}.svg`, class: `ul-${name}` })),
}, null, 2) + '\n')

const data = clientData('zh', { cssUrl: 'css/ul-icons.css', svgUrl: (n) => `icons/${n}.svg` })
const html = `<!doctype html>
<html lang="zh-TW">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Ultra Lab Motion Icons v${VERSION}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="css/ul-icons.css">
<style>${SHOWCASE_CSS}:root{--ic-top:0px}</style>
</head>
<body class="ic">
<main id="main">
${mainHtml('zh', { cssHref: 'css/ul-icons.css' })}
</main>
<script>window.__IC=${JSON.stringify(data).replace(/</g, '\\u003c')};</script>
<script>${SHOWCASE_JS}</script>
</body>
</html>
`
writeFileSync(here('./index.html'), html)
console.log(`[ul-icons] ${ICONS.length} 個圖示 → icons/、css/ul-icons.css、icons.json、index.html`)
