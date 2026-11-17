// 展示櫃：本機 index.html 與官網 /icons、/en/icons 共用的版面、樣式、互動。
// 官網版本會另外套上網站自己的頁首頁尾。
import { CATEGORIES, ICONS, VERSION, svgMarkup } from './icons.mjs'

export const REPO = 'https://github.com/ppcvote/ultralab-anim-icons'
export const CDN = `https://cdn.jsdelivr.net/gh/ppcvote/ultralab-anim-icons@v${VERSION}`

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export const T = {
  zh: {
    lang: 'zh-TW',
    title: '動態小圖示：純 SVG、零依賴、複製就會動 | Ultra Lab',
    desc: `Ultra Lab 自己設計的動態小圖示，第一批 ${ICONS.length} 個：掃描、載入、驗證、AI 思考、文字串流、沙漏…純 SVG 與 CSS、零依賴，可換色、可調速度，尊重減少動態效果設定，MIT 授權免費商用。`,
    kicker: 'Ultra Lab 自有品牌',
    h1: '會動的小圖示，<br>複製就能用',
    sub: '純 SVG 與 CSS，一個檔案就會動。顏色跟著文字走，速度一個變數就能調，MIT 授權免費商用。',
    stats: [[String(ICONS.length), '個圖示'], ['6', '類'], ['0', '依賴'], ['MIT', '授權']],
    ctaAll: '看全部圖示',
    ctaUse: '怎麼用',
    drop: `${ICONS.length} 個圖示 · v${VERSION}`,
    ctrl: { color: '顏色', auto: '預設', custom: '自訂顏色', speed: '速度', bg: '底色', dark: '黑', light: '白', panel: '預覽設定' },
    reduced: '你的裝置開了「減少動態效果」，圖示會停在靜態姿勢。這正是它們該有的樣子；想看動態，關掉系統的這個設定再重新整理。',
    open: (n) => `打開 ${n} 的詳細資料`,
    sheet: {
      close: '關閉', copySvg: '複製 SVG', copyClass: '複製 class 用法', copied: '已複製', fail: '複製失敗，請手動選取',
      download: '下載 .svg', use: '適合用在', why: '設計', a11y: '無障礙', a11yNote: '純裝飾、旁邊已有文字時改用 aria-hidden="true"。',
      tabs: ['SVG', 'Class', '<img>'], onDark: '黑底', onLight: '白底',
    },
    useTitle: '三種用法',
    useWays: [
      ['貼上 SVG', '複製 SVG 直接貼進 HTML。樣式已經包在檔案裡，不用載任何東西，顏色跟著文字顏色走。'],
      ['載入 CSS，套 class', '頁面載一次 ul-icons.css（可以直接用 jsDelivr CDN），之後每個圖示只要貼精簡版 SVG。一頁用很多個時最省。'],
      ['當圖片用', '用 &lt;img&gt; 也會動，但抓不到文字顏色，會是黑色。要換色請改用前兩種。'],
    ],
    varTitle: '調整',
    vars: [
      ['--ul-size', '24px', '大小。也可以直接改 width／height。'],
      ['--ul-speed', '1', '速度倍率。2 是兩倍快，0.5 是一半。'],
      ['--ul-stroke', '1.5', '線寬。'],
      ['--ul-play', 'running', '設成 paused 就暫停，例如滑過才播。'],
      ['color', 'currentColor', '圖示顏色就是文字顏色。'],
    ],
    a11yTitle: '無障礙',
    a11y: [
      '每個圖示都有建議的 aria-label（點開圖示看得到），表達狀態時用 role="img" 加上它。',
      '只是裝飾、旁邊已經有文字時，改成 aria-hidden="true"。',
      '使用者開了「減少動態效果」時，動畫全部停下，停在一個看得懂的靜態姿勢。',
      '只動 transform、opacity、stroke-dashoffset，手機上也不會拖慢捲動。',
    ],
    licTitle: '授權',
    lic: 'MIT 授權：個人與商業專案都能免費使用、修改、再發布，保留授權聲明即可。著作權人 Ultra Lab。',
    next: `原始碼在 <a href="${REPO}" target="_blank" rel="noopener noreferrer">GitHub</a>，歡迎開 issue 或送 PR。想要哪個圖示，到 <a href="https://discord.gg/ewS4rWXvWk" target="_blank" rel="noopener noreferrer">Discord</a> 跟我們說。`,
    ctaGit: 'GitHub 原始碼',
    cssLink: '下載 ul-icons.css',
  },
  en: {
    lang: 'en',
    title: 'Motion icons: pure SVG, zero dependencies, copy and it moves | Ultra Lab',
    desc: `Animated micro-icons designed by Ultra Lab, first ${ICONS.length}: scan, loading, verify, AI thinking, text stream, hourglass and more. Pure SVG and CSS with zero dependencies, recolour and retime with one variable, reduced-motion aware, MIT licensed.`,
    kicker: 'Made by Ultra Lab',
    h1: 'Little icons that move.<br>Copy, paste, done.',
    sub: 'Pure SVG and CSS, animated from a single file. They take your text colour, retime with one variable, and are MIT licensed.',
    stats: [[String(ICONS.length), 'icons'], ['6', 'families'], ['0', 'dependencies'], ['MIT', 'licence']],
    ctaAll: 'See all icons',
    ctaUse: 'How to use',
    drop: `${ICONS.length} icons · v${VERSION}`,
    ctrl: { color: 'Colour', auto: 'Auto', custom: 'Custom colour', speed: 'Speed', bg: 'Background', dark: 'Dark', light: 'Light', panel: 'Preview settings' },
    reduced: 'Your device asks for reduced motion, so the icons rest in a still pose. That is exactly how they should behave; turn the setting off and reload to see them move.',
    open: (n) => `Open details for ${n}`,
    sheet: {
      close: 'Close', copySvg: 'Copy SVG', copyClass: 'Copy class usage', copied: 'Copied', fail: 'Copy failed, please select the text',
      download: 'Download .svg', use: 'Good for', why: 'Design', a11y: 'Accessibility', a11yNote: 'If it is purely decorative next to text, use aria-hidden="true" instead.',
      tabs: ['SVG', 'Class', '<img>'], onDark: 'On dark', onLight: 'On light',
    },
    useTitle: 'Three ways to use them',
    useWays: [
      ['Paste the SVG', 'Copy the SVG into your HTML. Styles live inside the file, nothing else to load, and it takes your text colour.'],
      ['Load the CSS, use classes', 'Load ul-icons.css once (straight from the jsDelivr CDN if you like), then paste the slim SVG for each icon. Lightest when a page uses many.'],
      ['Use it as an image', 'It still moves inside &lt;img&gt;, but cannot see your text colour, so it renders black. Use one of the first two to recolour.'],
    ],
    varTitle: 'Tuning',
    vars: [
      ['--ul-size', '24px', 'Size. Setting width and height works too.'],
      ['--ul-speed', '1', 'Speed multiplier. 2 is twice as fast, 0.5 is half.'],
      ['--ul-stroke', '1.5', 'Stroke width.'],
      ['--ul-play', 'running', 'Set to paused to stop it, for example to play on hover.'],
      ['color', 'currentColor', 'The icon colour is your text colour.'],
    ],
    a11yTitle: 'Accessibility',
    a11y: [
      'Each icon ships with a suggested aria-label (open an icon to see it). Use it with role="img" when the icon conveys state.',
      'If it is decorative and text sits next to it, use aria-hidden="true".',
      'When the user asks for reduced motion, every animation stops in a clear still pose.',
      'Only transform, opacity and stroke-dashoffset animate, so scrolling stays smooth on phones.',
    ],
    licTitle: 'Licence',
    lic: 'MIT: free for personal and commercial projects, to use, modify and redistribute, as long as the licence notice stays. Copyright Ultra Lab.',
    next: `The source is on <a href="${REPO}" target="_blank" rel="noopener noreferrer">GitHub</a>; issues and PRs welcome. Want a specific icon? Tell us on <a href="https://discord.gg/ewS4rWXvWk" target="_blank" rel="noopener noreferrer">Discord</a>.`,
    ctaGit: 'Source on GitHub',
    cssLink: 'Download ul-icons.css',
  },
}

// 給頁內腳本的資料：每個圖示的三種複製內容
export function clientData(lang, { cssUrl, svgUrl }) {
  const en = lang === 'en'
  const t = T[lang]
  return {
    t: t.sheet,
    cats: Object.fromEntries(CATEGORIES.map((c) => [c.id, en ? c.en : c.zh])),
    icons: ICONS.map((ic) => {
      const aria = en ? ic.ariaEn : ic.ariaZh
      const slim = svgMarkup(ic, { style: false, lang })
      return {
        n: ic.name, cat: ic.cat, title: en ? ic.en : `${ic.zh} ${ic.en}`, aria,
        use: en ? ic.useEn : ic.useZh, why: en ? ic.whyEn : ic.whyZh,
        svg: svgMarkup(ic, { style: true, lang }),
        cls: `<link rel="stylesheet" href="${cssUrl}">\n${slim}`,
        img: `<img src="${svgUrl(ic.name)}" width="24" height="24" alt="${aria}">`,
        file: svgUrl(ic.name),
      }
    }),
  }
}

export function mainHtml(lang, { cssHref }) {
  const en = lang === 'en'
  const t = T[lang]
  const sw = [
    ['', t.ctrl.auto, 'auto'],
    ['#5EEAD4', en ? 'Mint' : '薄荷', 'mint'],
    ['#B9A4FF', en ? 'Lilac' : '淡紫', 'lilac'],
    ['#F2C879', en ? 'Amber' : '琥珀', 'amber'],
    ['#FF8A7A', en ? 'Coral' : '珊瑚', 'coral'],
  ]
  const swatches = sw.map(([c, label, id], i) => `<button type="button" class="ic-sw ic-sw-${id}" data-color="${c}" aria-pressed="${i === 0}" aria-label="${esc(label)}" title="${esc(label)}"></button>`).join('')
  const windowAll = ICONS.map((ic) => svgMarkup(ic, { style: false, lang, decorative: true })).join('')
  const cats = CATEGORIES.map((c, ci) => {
    const tiles = ICONS.filter((ic) => ic.cat === c.id).map((ic) => `<button type="button" class="ic-tile" data-n="${ic.name}" aria-label="${esc(t.open(ic.name))}">${svgMarkup(ic, { style: false, lang })}<span class="ic-tile-n">${ic.name}</span><span class="ic-tile-z">${esc(en ? ic.en : ic.zh)}</span></button>`).join('')
    return `<section class="ic-cat" style="--i:${ci}" aria-labelledby="ic-c-${c.id}"><header><p class="ic-cat-no">${String(ci + 1).padStart(2, '0')}</p><h2 id="ic-c-${c.id}">${esc(en ? c.en : c.zh)}${en ? '' : `<span>${esc(c.en)}</span>`}</h2><p class="ic-cat-note">${esc(en ? c.noteEn : c.noteZh)}</p></header><div class="ic-tiles">${tiles}</div></section>`
  }).join('')
  const ways = t.useWays.map(([h, p], i) => `<li><span>${i + 1}</span><h3>${h}</h3><p>${p}</p></li>`).join('')
  const vars = t.vars.map(([k, d, p]) => `<tr><th scope="row"><code>${k}</code></th><td><code>${d}</code></td><td>${p}</td></tr>`).join('')
  const a11y = t.a11y.map((p) => `<li>${esc(p)}</li>`).join('')
  return `<section class="ic-hero">
<div class="ic-wrap ic-hero-grid">
<div class="ic-hero-copy">
<p class="ic-kicker">${t.kicker}<span>Motion Icons</span></p>
<h1>${t.h1}</h1>
<p class="ic-sub">${t.sub}</p>
<dl class="ic-stats">${t.stats.map(([a, b]) => `<div><dt>${a}</dt><dd>${b}</dd></div>`).join('')}</dl>
<p class="ic-cta"><a class="ic-btn" href="#icons">${t.ctaAll}</a><a class="ic-ghost" href="#use">${t.ctaUse}</a><a class="ic-ghost" href="${REPO}" target="_blank" rel="noopener noreferrer">${t.ctaGit} ↗</a></p>
</div>
<div class="ic-window" aria-hidden="true"><p class="ic-window-tag">${t.drop}</p><div class="ic-window-grid">${windowAll}</div></div>
</div>
</section>
<p class="ic-wrap ic-reduced" id="ic-reduced" hidden>${t.reduced}</p>
<div class="ic-ctrl" id="ic-ctrl" role="region" aria-label="${t.ctrl.panel}">
<div class="ic-wrap ic-ctrl-in">
<div class="ic-ctrl-g ic-ctrl-color" role="group" aria-label="${t.ctrl.color}"><span class="ic-ctrl-l">${t.ctrl.color}</span>${swatches}<label class="ic-sw ic-sw-pick" title="${t.ctrl.custom}"><span class="ic-vh">${t.ctrl.custom}</span><input type="color" id="ic-pick" value="#7DD3FC"></label></div>
<label class="ic-ctrl-g ic-ctrl-speed"><span class="ic-ctrl-l">${t.ctrl.speed}</span><input type="range" id="ic-speed" min="0.25" max="2" step="0.25" value="1"><output id="ic-speed-o" for="ic-speed">1×</output></label>
<div class="ic-ctrl-g ic-seg" role="group" aria-label="${t.ctrl.bg}"><span class="ic-ctrl-l">${t.ctrl.bg}</span><button type="button" data-bg="dark" aria-pressed="true">${t.ctrl.dark}</button><button type="button" data-bg="light" aria-pressed="false">${t.ctrl.light}</button></div>
</div>
</div>
<section class="ic-wrap ic-cats" id="icons" aria-label="${en ? 'Icons' : '圖示'}">${cats}</section>
<section class="ic-wrap ic-use" id="use">
<h2>${t.useTitle}</h2>
<ol class="ic-ways">${ways}</ol>
<div class="ic-use-grid">
<div><h3>${t.varTitle}</h3><div class="ic-table"><table><tbody>${vars}</tbody></table></div>
<pre class="ic-code"><code>${esc(`.toolbar .ul-i {\n  --ul-size: 20px;\n  --ul-speed: 1.5;\n  color: #5EEAD4;\n}\n.card:not(:hover) .ul-i { --ul-play: paused; }`)}</code></pre></div>
<div><h3>${t.a11yTitle}</h3><ul class="ic-list">${a11y}</ul><h3>${t.licTitle}</h3><p class="ic-p">${t.lic}</p><p class="ic-p"><a class="ic-link" href="${cssHref}" download>${t.cssLink} ↓</a></p><p class="ic-p ic-next">${t.next}</p></div>
</div>
</section>
<div class="ic-scrim" id="ic-scrim" hidden></div>
<div class="ic-sheet" id="ic-sheet" role="dialog" aria-modal="true" aria-labelledby="ic-s-title" hidden>
<div class="ic-sheet-grab" aria-hidden="true"></div>
<button type="button" class="ic-x" id="ic-x" aria-label="${t.sheet.close}"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg></button>
<div class="ic-duo"><div class="ic-duo-d"><span>${t.sheet.onDark}</span><div class="ic-duo-i" id="ic-pv-d"></div></div><div class="ic-duo-l"><span>${t.sheet.onLight}</span><div class="ic-duo-i" id="ic-pv-l"></div></div></div>
<div class="ic-sheet-body">
<p class="ic-s-cat" id="ic-s-cat"></p>
<h2 id="ic-s-title"></h2>
<p class="ic-s-name"><code id="ic-s-name"></code></p>
<div class="ic-s-actions"><button type="button" class="ic-btn" data-copy="svg">${t.sheet.copySvg}</button><button type="button" class="ic-ghost" data-copy="cls">${t.sheet.copyClass}</button></div>
<dl class="ic-s-facts"><div><dt>${t.sheet.use}</dt><dd id="ic-s-use"></dd></div><div><dt>${t.sheet.why}</dt><dd id="ic-s-why"></dd></div><div><dt>${t.sheet.a11y}</dt><dd><code id="ic-s-aria"></code><small>${esc(t.sheet.a11yNote)}</small></dd></div></dl>
<div class="ic-tabs" role="tablist">${t.sheet.tabs.map((x, i) => `<button type="button" role="tab" data-tab="${['svg', 'cls', 'img'][i]}" aria-selected="${i === 0}">${esc(x)}</button>`).join('')}<a class="ic-dl" id="ic-dl" download>${t.sheet.download}</a></div>
<div class="ic-codebox"><pre><code id="ic-s-code"></code></pre><button type="button" class="ic-copy" id="ic-copy-tab">${en ? 'Copy' : '複製'}</button></div>
</div>
</div>
<p class="ic-vh" id="ic-live" aria-live="polite"></p>`
}

export const SHOWCASE_CSS = `
:root{--ic-bg:#05030B;--ic-ink:#F4F1FA;--ic-dim:#A8A2B8;--ic-faint:#8F899F;--ic-line:rgba(232,224,255,.09);--ic-acc:#5EEAD4;--ic-surf:rgba(20,15,38,.66);--ic-mono:'JetBrains Mono',ui-monospace,Consolas,monospace;--ic-sans:'Outfit','Noto Sans TC','PingFang TC','Microsoft JhengHei',system-ui,sans-serif;--ic-ease:cubic-bezier(.16,1,.3,1);--ic-top:64px}
.ic code,.ic pre,.ic-kicker,.ic-ctrl-l,.ic-tile-n,.ic-stats dt,.ic-tabs button{font-variant-ligatures:none;font-feature-settings:'liga' 0,'calt' 0}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%;scroll-padding-top:150px}
body.ic{margin:0;background:var(--ic-bg);color:var(--ic-ink);font-family:var(--ic-sans);font-size:16px;line-height:1.7;-webkit-font-smoothing:antialiased}
body.ic::before{content:'';position:fixed;inset:0;z-index:-1;pointer-events:none;background:radial-gradient(900px 480px at 85% -10%,rgba(138,92,255,.16),transparent 62%),radial-gradient(700px 420px at -10% 30%,rgba(20,184,166,.09),transparent 60%)}
.ic a{color:inherit}
.ic :focus-visible{outline:2px solid var(--ic-acc);outline-offset:3px}
.ic-wrap{max-width:1200px;margin:0 auto;padding:0 20px}
.ic-vh{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.ic-kicker{margin:0;display:flex;gap:12px;align-items:center;font-family:var(--ic-mono);font-size:12px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--ic-acc)}
.ic-kicker span{color:var(--ic-faint);font-weight:400;letter-spacing:.14em}
.ic-kicker span::before{content:'';display:inline-block;width:18px;height:1px;margin:0 12px 3px 0;background:rgba(232,224,255,.25);vertical-align:middle}

.ic-hero{padding:40px 0 36px}
.ic-hero-grid{display:grid;gap:36px;align-items:center}
.ic-hero-grid>*{min-width:0}
.ic-hero h1{margin:18px 0 0;font-weight:700;font-size:clamp(2.1rem,7vw,3.6rem);line-height:1.14;letter-spacing:.01em;color:#fff;text-wrap:balance}
.ic-en .ic-hero h1{letter-spacing:-.03em;line-height:1.06}
.ic-sub{margin:20px 0 0;max-width:30em;font-size:1.06rem;color:var(--ic-dim)}
.ic-stats{display:flex;flex-wrap:wrap;gap:8px 28px;margin:26px 0 0;padding:0}
.ic-stats div{display:flex;align-items:baseline;gap:7px}
.ic-stats dt{font-family:var(--ic-mono);font-size:20px;font-weight:700;color:#fff}
.ic-stats dd{margin:0;font-size:13px;color:var(--ic-faint)}
.ic-cta{display:flex;flex-wrap:wrap;gap:12px;margin:28px 0 0}
.ic-btn,.ic-ghost{display:inline-flex;align-items:center;justify-content:center;height:46px;padding:0 20px;border-radius:9px;font:600 15px/1 var(--ic-sans);text-decoration:none;white-space:nowrap;cursor:pointer;transition:transform .25s var(--ic-ease),background-color .25s,border-color .25s,color .25s}
.ic-btn{border:0;background:var(--ic-acc);color:#05030B}
.ic-btn:hover{background:#8BF2E2}
.ic-ghost{border:1px solid rgba(232,224,255,.22);background:transparent;color:var(--ic-ink)}
.ic-ghost:hover{border-color:rgba(94,234,212,.6)}
.ic-btn:active,.ic-ghost:active,.ic-tile:active{transform:scale(.98)}
.ic-btn.is-done,.ic-ghost.is-done{background:#fff;color:#05030B;border-color:#fff}

.ic-window{position:relative;padding:22px;border-radius:18px;background:linear-gradient(155deg,rgba(36,27,70,.55),rgba(10,8,22,.9));box-shadow:inset 0 0 0 1px rgba(232,224,255,.08),0 40px 90px -50px rgba(138,92,255,.55)}
.ic-window-tag{margin:0 0 16px;font-family:var(--ic-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ic-faint)}
.ic-window-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:6px;color:#fff}
.ic-window-grid .ul-i{--ul-size:24px;display:block;margin:11px auto}
.ic-window-grid .ul-i:nth-child(odd){color:#fff}.ic-window-grid .ul-i:nth-child(even){color:#DCD6EA}

.ic-reduced{margin-bottom:18px;font-size:14px;color:var(--ic-dim)}
.ic-reduced:not([hidden]){display:block;padding-top:12px;padding-bottom:12px;border-left:2px solid var(--ic-acc)}

/* 控制列：手機固定在底部、桌機黏在頁首下方 */
.ic-ctrl{position:fixed;left:0;right:0;bottom:0;z-index:50;background:rgba(9,7,19,.92);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);border-top:1px solid var(--ic-line);padding-bottom:env(safe-area-inset-bottom)}
.ic-ctrl-in{display:grid;grid-template-columns:1fr auto;gap:8px 14px;padding-top:10px;padding-bottom:10px;align-items:center}
.ic-ctrl-g{display:flex;align-items:center;gap:8px;min-width:0}
.ic-ctrl-color{grid-column:1/-1;overflow-x:auto;scrollbar-width:none;padding:4px}
.ic-ctrl-l{flex:none;font-family:var(--ic-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--ic-faint);margin-right:2px}
.ic-sw{flex:none;position:relative;width:30px;height:30px;padding:0;border-radius:50%;border:1px solid rgba(232,224,255,.18);background:var(--sw);cursor:pointer;transition:transform .2s var(--ic-ease),box-shadow .2s}
.ic-sw[aria-pressed="true"]{box-shadow:0 0 0 2px var(--ic-bg),0 0 0 3.5px #fff}
.ic-sw:hover{transform:scale(1.08)}
.ic-sw-auto{--sw:linear-gradient(135deg,#fff 50%,#0B0A10 50%)}
.ic-sw-mint{--sw:#5EEAD4}.ic-sw-lilac{--sw:#B9A4FF}.ic-sw-amber{--sw:#F2C879}.ic-sw-coral{--sw:#FF8A7A}
.ic-sw-pick{--sw:conic-gradient(#FF8A7A,#F2C879,#5EEAD4,#7DD3FC,#B9A4FF,#FF8A7A);overflow:hidden}
.ic-sw-pick input{position:absolute;inset:0;opacity:0;width:100%;height:100%;cursor:pointer;border:0;padding:0}
.ic-sw-pick.is-on{box-shadow:0 0 0 2px var(--ic-bg),0 0 0 3.5px #fff}
.ic-ctrl-speed{min-width:0}
.ic-ctrl-speed input{flex:1;min-width:80px;accent-color:var(--ic-acc);height:28px}
.ic-ctrl-speed output{flex:none;width:44px;font-family:var(--ic-mono);font-size:13px;color:#fff;text-align:right}
.ic-seg{gap:0}
.ic-seg .ic-ctrl-l{margin-right:8px}
.ic-seg button{height:32px;padding:0 13px;border:1px solid rgba(232,224,255,.16);background:transparent;color:var(--ic-dim);font:500 13px/1 var(--ic-sans);cursor:pointer}
.ic-seg button:first-of-type{border-radius:999px 0 0 999px}
.ic-seg button:last-of-type{border-radius:0 999px 999px 0;border-left:0}
.ic-seg button[aria-pressed="true"]{background:rgba(94,234,212,.12);border-color:rgba(94,234,212,.5);color:#fff}
.ic-seg .ic-ctrl-l{display:none}
body.ic{padding-bottom:calc(110px + env(safe-area-inset-bottom))}

/* 圖示櫃 */
.ic-cats{display:grid;gap:34px 22px;padding-top:28px;padding-bottom:20px;--ic-fg:#fff;--ic-tile:var(--ic-surf);--ic-tile-line:rgba(232,224,255,.08)}
.ic-cats.is-light{--ic-fg:#0B0A10;--ic-tile:#F6F4FA;--ic-tile-line:rgba(11,10,16,.08)}
.ic-cat header{display:grid;grid-template-columns:auto 1fr;column-gap:12px;align-items:baseline;margin-bottom:12px}
.ic-cat-no{grid-row:1/3;margin:0;font-family:var(--ic-mono);font-size:12px;color:var(--ic-acc)}
.ic-cat h2{margin:0;font-size:18px;font-weight:600;color:#fff;line-height:1.3}
.ic-cat h2 span{margin-left:10px;font-family:var(--ic-mono);font-size:11px;font-weight:400;letter-spacing:.14em;text-transform:uppercase;color:var(--ic-faint)}
.ic-cat-note{margin:2px 0 0;font-size:13px;color:var(--ic-faint)}
.ic-tiles{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
.ic-tile{position:relative;display:grid;place-items:center;align-content:center;gap:4px;aspect-ratio:1/1;padding:12px 4px 8px;min-width:0;border:0;border-radius:14px;background:var(--ic-tile);box-shadow:inset 0 0 0 1px var(--ic-tile-line);color:var(--ic-color,var(--ic-fg));font:inherit;cursor:pointer;transition:transform .35s var(--ic-ease),box-shadow .35s,background-color .35s}
.ic-tile:hover{transform:translateY(-3px);box-shadow:inset 0 0 0 1px rgba(94,234,212,.4),0 24px 50px -32px rgba(94,234,212,.4)}
.ic-tile .ul-i{--ul-size:32px;margin-bottom:8px}
.ic-tile-n{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ic-tile-n{font-family:var(--ic-mono);font-size:12px;color:var(--ic-ink);opacity:.85}
.ic-tile-z{font-size:12px;color:var(--ic-faint);line-height:1.3}
.ic-cats.is-light .ic-tile-n{color:#2A2633}.ic-cats.is-light .ic-tile-z{color:#6B6578}
@media (prefers-reduced-motion:no-preference){.ic-cat{animation:ic-up .8s var(--ic-ease) both;animation-delay:calc(80ms + var(--i)*60ms)}}
@keyframes ic-up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}

/* 用法 */
.ic-use{padding-top:56px;padding-bottom:64px;border-top:1px solid var(--ic-line);margin-top:36px}
.ic-use h2{margin:0 0 22px;font-size:clamp(1.5rem,4vw,2rem);font-weight:700;color:#fff}
.ic-use h3{margin:0 0 10px;font-size:16px;font-weight:600;color:#fff}
.ic-ways{list-style:none;margin:0 0 40px;padding:0;display:grid;gap:14px}
.ic-ways li{position:relative;padding:20px 20px 18px;border-radius:14px;background:var(--ic-surf);box-shadow:inset 0 0 0 1px var(--ic-line)}
.ic-ways li>span{font-family:var(--ic-mono);font-size:12px;color:var(--ic-acc)}
.ic-ways h3{margin:6px 0 6px}
.ic-ways p{margin:0;font-size:15px;color:var(--ic-dim)}
.ic-use-grid{display:grid;gap:36px}
.ic-use-grid>*{min-width:0}
.ic-table{overflow-x:auto;margin-bottom:16px}
.ic-table table{width:100%;border-collapse:collapse;font-size:14px}
.ic-table th,.ic-table td{padding:10px 12px 10px 0;border-bottom:1px solid var(--ic-line);text-align:left;vertical-align:top;color:var(--ic-dim);font-weight:400}
.ic-table th code{color:var(--ic-acc)}
.ic-table code,.ic-code code{font-family:var(--ic-mono);font-size:13px}
.ic-code{margin:0;padding:16px;border-radius:9px;background:#0C0919;box-shadow:inset 0 0 0 1px var(--ic-line);overflow-x:auto;color:#DCD6EA;line-height:1.6}
.ic-list{margin:0 0 26px;padding-left:1.1em;color:var(--ic-dim);font-size:15px}
.ic-list li{margin-bottom:6px}
.ic-p{margin:0 0 12px;font-size:15px;color:var(--ic-dim)}
.ic-link{color:var(--ic-acc)!important;text-decoration:none}
.ic-next a{color:var(--ic-acc)}

/* 詳細面板：手機從底部滑出，桌機在右側 */
.ic-scrim{position:fixed;inset:0;z-index:90;background:rgba(3,2,8,.62);-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);opacity:0;transition:opacity .3s}
.ic-scrim.is-on{opacity:1}
.ic-sheet{position:fixed;left:0;right:0;bottom:0;z-index:100;max-height:88vh;max-height:88dvh;overflow-y:auto;overscroll-behavior:contain;border-radius:20px 20px 0 0;background:#0D0A1C;box-shadow:0 -1px 0 rgba(232,224,255,.1),0 -30px 80px -20px rgba(0,0,0,.7);transform:translateY(100%);transition:transform .42s var(--ic-ease);padding-bottom:env(safe-area-inset-bottom)}
.ic-sheet.is-on{transform:translateY(0)}
.ic-sheet.is-drag{transition:none}
.ic-sheet-grab{position:sticky;top:0;z-index:2;height:52px;display:grid;place-items:center;background:#0D0A1C;touch-action:none}
.ic-sheet-grab::after{content:'';width:40px;height:4px;border-radius:4px;background:rgba(232,224,255,.25)}
.ic-x{position:absolute;top:6px;right:10px;z-index:3;width:40px;height:40px;display:grid;place-items:center;border:1px solid rgba(232,224,255,.14);border-radius:50%;background:#0D0A1C;color:#fff;cursor:pointer}
.ic-x:hover{border-color:rgba(94,234,212,.6)}
.ic-duo{display:grid;grid-template-columns:1fr 1fr;margin:0 14px;border-radius:14px;overflow:hidden;box-shadow:inset 0 0 0 1px var(--ic-line)}
.ic-duo>div{position:relative;display:grid;place-items:center;height:170px}
.ic-duo span{position:absolute;left:12px;top:10px;font-family:var(--ic-mono);font-size:10px;letter-spacing:.14em;text-transform:uppercase}
.ic-duo-d{background:#05030B;color:var(--ic-color,#fff)}.ic-duo-d span{color:#8F899F}
.ic-duo-l{background:#F6F4FA;color:var(--ic-color-l,#0B0A10)}.ic-duo-l span{color:#8A8496}
.ic-duo .ul-i{--ul-size:84px}
.ic-sheet-body{padding:20px 20px 26px}
.ic-s-cat{margin:0;font-family:var(--ic-mono);font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--ic-acc)}
.ic-sheet h2{margin:6px 0 0;font-size:24px;font-weight:700;color:#fff;line-height:1.25}
.ic-s-name{margin:4px 0 0}
.ic-s-name code{font-family:var(--ic-mono);font-size:13px;color:var(--ic-faint)}
.ic-s-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:18px 0 6px}
.ic-s-actions>*{width:100%;padding:0 10px}
.ic-s-facts{margin:16px 0 0;padding:0}
.ic-s-facts div{padding:12px 0;border-top:1px solid var(--ic-line)}
.ic-s-facts dt{font-size:12px;color:var(--ic-faint);margin-bottom:2px}
.ic-s-facts dd{margin:0;font-size:15px;color:var(--ic-ink)}
.ic-s-facts dd code{display:inline-block;font-family:var(--ic-mono);font-size:12.5px;color:var(--ic-acc);word-break:break-all}
.ic-s-facts dd small{display:block;margin-top:4px;font-size:12.5px;color:var(--ic-faint)}
.ic-tabs{display:flex;align-items:center;gap:4px;margin:14px 0 8px;border-top:1px solid var(--ic-line);padding-top:14px}
.ic-tabs button{height:32px;padding:0 12px;border:0;border-radius:999px;background:transparent;color:var(--ic-dim);font:500 13px/1 var(--ic-mono);cursor:pointer}
.ic-tabs button[aria-selected="true"]{background:rgba(232,224,255,.1);color:#fff}
.ic-dl{margin-left:auto;font-size:13px;color:var(--ic-acc)!important;text-decoration:none;white-space:nowrap}
.ic-codebox{position:relative}
.ic-codebox pre{margin:0;max-height:240px;overflow:auto;padding:48px 14px 14px;border-radius:9px;background:#05030B;box-shadow:inset 0 0 0 1px var(--ic-line)}
.ic-codebox code{display:block;font-family:var(--ic-mono);font-size:12px;line-height:1.6;color:#CFC8E0;white-space:pre-wrap;word-break:break-all}
.ic-copy{position:absolute;top:8px;right:8px;height:30px;padding:0 12px;border:1px solid rgba(232,224,255,.18);border-radius:7px;background:#14102A;color:#fff;font:500 12px/1 var(--ic-sans);cursor:pointer}
.ic-copy.is-done{background:var(--ic-acc);color:#05030B;border-color:var(--ic-acc)}
body.ic-lock{overflow:hidden}

@media (min-width:640px){
  .ic-ways{grid-template-columns:repeat(3,1fr)}
}
@media (min-width:960px){
  body.ic{padding-bottom:0}
  .ic-hero{padding:80px 0 64px}
  .ic-hero-grid{grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:72px}
  .ic-window{padding:28px}
  .ic-window-grid .ul-i{--ul-size:28px;margin:14px auto}
  .ic-ctrl{position:sticky;top:var(--ic-top);bottom:auto;background:rgba(5,3,11,.86);border-top:1px solid var(--ic-line);border-bottom:1px solid var(--ic-line)}
  .ic-ctrl-in{display:flex;gap:34px;padding-top:12px;padding-bottom:12px}
  .ic-ctrl-color{overflow:visible}
  .ic-ctrl-speed{flex:0 1 300px}
  .ic-seg{margin-left:auto}
  .ic-seg .ic-ctrl-l{display:inline}
  .ic-cats{gap:40px;padding-top:48px}
  .ic-cat{display:grid;grid-template-columns:200px minmax(0,1fr);gap:28px;align-items:start}
  .ic-cat header{grid-template-columns:auto 1fr;padding-top:10px}
  .ic-tiles{grid-template-columns:repeat(6,minmax(0,1fr));gap:12px}
  .ic-tile{padding:18px 8px 14px}
  .ic-tile .ul-i{--ul-size:40px;margin-bottom:12px}
  .ic-use-grid{grid-template-columns:1.1fr 1fr;gap:56px}
  .ic-scrim{background:rgba(3,2,8,.45)}
  .ic-sheet{left:auto;top:0;bottom:0;width:440px;max-height:none;border-radius:0;transform:translateX(100%);box-shadow:-1px 0 0 rgba(232,224,255,.1),-30px 0 80px -20px rgba(0,0,0,.7)}
  .ic-sheet.is-on{transform:translateX(0)}
  .ic-sheet-grab::after{display:none}
  .ic-duo{margin:0 14px}
  .ic-duo>div{height:200px}
}
@media (prefers-reduced-motion:reduce){.ic-sheet,.ic-scrim,.ic-tile,.ic-btn,.ic-ghost{transition:none}}
`

export const SHOWCASE_JS = `(function(){
var D=window.__IC||{},T=D.t||{},byN={};(D.icons||[]).forEach(function(x){byN[x.n]=x});
var root=document.querySelector('.ic-cats'),sheet=document.getElementById('ic-sheet'),scrim=document.getElementById('ic-scrim'),live=document.getElementById('ic-live');
var tab='svg',cur=null,lastFocus=null,st=document.documentElement.style;
// 顏色、速度、底色寫進 CSS 變數，圖示櫃與詳細面板一起變
function setColor(c){if(c){st.setProperty('--ic-color',c);st.setProperty('--ic-color-l',c)}else{st.removeProperty('--ic-color');st.removeProperty('--ic-color-l')}}
[].forEach.call(document.querySelectorAll('.ic-sw[data-color]'),function(b){b.addEventListener('click',function(){[].forEach.call(document.querySelectorAll('.ic-sw'),function(x){x.setAttribute&&x.setAttribute('aria-pressed','false');x.classList.remove('is-on')});b.setAttribute('aria-pressed','true');setColor(b.dataset.color)})});
var pick=document.getElementById('ic-pick');if(pick)pick.addEventListener('input',function(){[].forEach.call(document.querySelectorAll('.ic-sw[data-color]'),function(x){x.setAttribute('aria-pressed','false')});pick.parentNode.classList.add('is-on');setColor(pick.value)});
var sp=document.getElementById('ic-speed'),so=document.getElementById('ic-speed-o');if(sp)sp.addEventListener('input',function(){st.setProperty('--ul-speed',sp.value);so.textContent=(+sp.value)+'×'});
[].forEach.call(document.querySelectorAll('.ic-seg button'),function(b){b.addEventListener('click',function(){[].forEach.call(document.querySelectorAll('.ic-seg button'),function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});root.classList.toggle('is-light',b.dataset.bg==='light')})});
try{if(matchMedia('(prefers-reduced-motion: reduce)').matches)document.getElementById('ic-reduced').hidden=false}catch(e){}
function code(){return cur?cur[tab]:''}
function render(){document.getElementById('ic-s-code').textContent=code();[].forEach.call(document.querySelectorAll('.ic-tabs [role=tab]'),function(b){b.setAttribute('aria-selected',b.dataset.tab===tab?'true':'false')})}
function slim(n){var t=document.querySelector('.ic-tile[data-n="'+n+'"] svg');return t?t.outerHTML:''}
function open(n,push){var x=byN[n];if(!x)return;cur=x;lastFocus=document.activeElement;
document.getElementById('ic-pv-d').innerHTML=slim(n);document.getElementById('ic-pv-l').innerHTML=slim(n);
document.getElementById('ic-s-cat').textContent=(D.cats||{})[x.cat]||'';document.getElementById('ic-s-title').textContent=x.title;document.getElementById('ic-s-name').textContent='ul-'+x.n;
document.getElementById('ic-s-use').textContent=x.use;document.getElementById('ic-s-why').textContent=x.why;document.getElementById('ic-s-aria').textContent='role="img" aria-label="'+x.aria+'"';
var dl=document.getElementById('ic-dl');dl.href=x.file;dl.setAttribute('download',x.n+'.svg');
render();scrim.hidden=false;sheet.hidden=false;document.body.classList.add('ic-lock');sheet.scrollTop=0;
requestAnimationFrame(function(){requestAnimationFrame(function(){sheet.classList.add('is-on');scrim.classList.add('is-on')})});
if(push!==false){try{history.pushState({ic:n},'','#'+n)}catch(e){}}
setTimeout(function(){document.getElementById('ic-x').focus({preventScroll:true})},60)}
function close(fromPop){if(!cur)return;cur=null;sheet.classList.remove('is-on');scrim.classList.remove('is-on');sheet.style.transform='';document.body.classList.remove('ic-lock');
setTimeout(function(){if(!cur){sheet.hidden=true;scrim.hidden=true}},420);
if(!fromPop){try{if(history.state&&history.state.ic)history.back();else history.replaceState(null,'',location.pathname+location.search)}catch(e){}}
if(lastFocus&&lastFocus.focus)lastFocus.focus({preventScroll:true})}
[].forEach.call(document.querySelectorAll('.ic-tile'),function(b){b.addEventListener('click',function(){open(b.dataset.n)})});
document.getElementById('ic-x').addEventListener('click',function(){close()});scrim.addEventListener('click',function(){close()});
document.addEventListener('keydown',function(e){if(!cur)return;if(e.key==='Escape')close();if(e.key==='Tab'){var f=sheet.querySelectorAll('button,a[href],[tabindex]:not([tabindex="-1"])');if(!f.length)return;var a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}});
window.addEventListener('popstate',function(){var n=location.hash.slice(1);if(byN[n])open(n,false);else close(true)});
[].forEach.call(document.querySelectorAll('.ic-tabs [role=tab]'),function(b){b.addEventListener('click',function(){tab=b.dataset.tab;render()})});
function copy(text,btn,label){function ok(){var o=btn.textContent;btn.classList.add('is-done');btn.textContent=T.copied||'Copied';if(live)live.textContent=T.copied||'Copied';setTimeout(function(){btn.classList.remove('is-done');btn.textContent=o},1400);try{window.gtag&&gtag('event','icon_copy',{icon:cur&&cur.n,kind:label})}catch(e){}}
function fb(){var ta=document.createElement('textarea');ta.value=text;ta.setAttribute('readonly','');ta.style.position='fixed';ta.style.opacity='0';document.body.appendChild(ta);ta.select();var r=false;try{r=document.execCommand('copy')}catch(e){}document.body.removeChild(ta);if(r)ok();else if(live)live.textContent=T.fail||''}
if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(text).then(ok,fb);else fb()}
[].forEach.call(document.querySelectorAll('[data-copy]'),function(b){b.addEventListener('click',function(){if(!cur)return;var k=b.dataset.copy;tab=k;render();copy(cur[k],b,k)})});
document.getElementById('ic-copy-tab').addEventListener('click',function(){copy(code(),this,tab)});
// 手機：拉住面板頂端往下滑就關
var grab=sheet.querySelector('.ic-sheet-grab'),y0=null,dy=0;
function ts(e){if(sheet.scrollTop>0&&e.currentTarget!==grab)return;y0=e.touches[0].clientY;dy=0;sheet.classList.add('is-drag')}
function tm(e){if(y0===null)return;dy=Math.max(0,e.touches[0].clientY-y0);if(dy>0){sheet.style.transform='translateY('+dy+'px)';if(e.cancelable&&e.currentTarget===grab)e.preventDefault()}}
function te(){if(y0===null)return;sheet.classList.remove('is-drag');y0=null;if(dy>90)close();else sheet.style.transform='';dy=0}
[grab,sheet.querySelector('.ic-duo')].forEach(function(el){if(!el)return;el.addEventListener('touchstart',ts,{passive:true});el.addEventListener('touchmove',tm,{passive:false});el.addEventListener('touchend',te)});
var h=location.hash.slice(1);if(byN[h]){try{history.replaceState(null,'',location.pathname+location.search)}catch(e){}open(h)}
})();`
