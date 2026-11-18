// Ultra Lab Motion Icons：唯一資料來源。build.mjs 由這裡產生 icons/*.svg、css/ul-icons.css、index.html。
// 規格：24×24 viewBox、線寬 1.5（可用 --ul-stroke 改）、currentColor、--ul-speed 調速、--ul-size 調大小、
// --ul-play 暫停；動畫只動 transform／opacity／stroke-dashoffset；沒有動畫時（減少動態效果）停在一個看得懂的靜態姿勢。
// Source of truth for Ultra Lab Motion Icons. MIT License, (c) Ultra Lab.

export const VERSION = '0.3.1'

export const CATEGORIES = [
  { id: 'signal', zh: '訊號', en: 'Signal', noteZh: '有東西在傳、在被讀取。', noteEn: 'Something is being sent or read.' },
  { id: 'form', zh: '形體', en: 'Form', noteZh: '幾何本身就是狀態。', noteEn: 'Geometry as a state.' },
  { id: 'orbit', zh: '軌道', en: 'Orbit', noteZh: '持續運轉，但不催你。', noteEn: 'Always moving, never rushing.' },
  { id: 'progress', zh: '進程', en: 'Progress', noteZh: '一步一步，看得見走到哪。', noteEn: 'Step by step, you see where it is.' },
  { id: 'write', zh: '書寫', en: 'Write', noteZh: '文字正在出現，或等你開口。', noteEn: 'Words appearing, or waiting for yours.' },
  { id: 'object', zh: '器物', en: 'Object', noteZh: '實驗室桌上的東西，會自己動。', noteEn: 'Things on the lab bench, quietly alive.' },
]

// 動畫宣告：時長與延遲都除以 --ul-speed，2 就是兩倍快；play-state 讀 --ul-play
const A = (name, kf, dur, timing = 'ease-in-out', delay = 0) =>
  `animation:ul-${name}-${kf} calc(${dur}s / var(--ul-speed,1)) ${timing} calc(${delay}s / var(--ul-speed,1)) infinite;animation-play-state:var(--ul-play,running)`

// 共用：沒有 transform-origin 的地方一律以畫布中心為準
export const BASE_CSS = `.ul-i{width:var(--ul-size,24px);height:var(--ul-size,24px);stroke-width:var(--ul-stroke,1.5);overflow:visible;vertical-align:middle;flex:none}
.ul-i *{transform-box:view-box;transform-origin:12px 12px}
@media (prefers-reduced-motion:reduce){.ul-i *{animation:none!important}}`

const DOT = 'fill="currentColor" stroke="none"'
// 無限符號軌道（兩個半徑 4 的圓弧＋四段曲線，起點在正中央）
const INF = 'M12 12c-2-2.7-3.6-4-5.5-4a4 4 0 0 0 0 8c1.9 0 3.5-1.3 5.5-4s3.6-4 5.5-4a4 4 0 0 1 0 8c-1.9 0-3.5-1.3-5.5-4Z'
// 八齒齒輪外框：齒頂半徑 9、齒根 6.8，每齒 45 度
const GEAR = (() => {
  const P = (r, deg) => { const a = (deg * Math.PI) / 180; return `${+(12 + r * Math.cos(a)).toFixed(2)} ${+(12 + r * Math.sin(a)).toFixed(2)}` }
  const pts = []
  for (let i = 0; i < 8; i++) { const c = i * 45 - 90; pts.push(P(6.8, c - 15), P(9, c - 8), P(9, c + 8), P(6.8, c + 15)) }
  return `M${pts.join('L')}Z`
})()

export const ICONS = [
  // ── 訊號 Signal ──
  {
    name: 'scan', cat: 'signal', zh: '掃描', en: 'Scan', ariaZh: '掃描中', ariaEn: 'Scanning', dur: 2.6,
    useZh: '讀取檔案、檢查網址、辨識圖片時', useEn: 'Reading a file, checking a URL, recognising an image',
    whyZh: '四個圓角取景框夾住一條掃描線上下來回，後面拖一條淡影；線經過中央時取景框微微收緊，像在對焦。',
    whyEn: 'A scan line glides between four rounded viewfinder corners with a faint trail; the corners tighten slightly as it crosses the centre, like focusing.',
    body: `<path class="c" d="M4 8.5V6a2 2 0 0 1 2-2h2.5M15.5 4H18a2 2 0 0 1 2 2v2.5M20 15.5V18a2 2 0 0 1-2 2h-2.5M8.5 20H6a2 2 0 0 1-2-2v-2.5"/><path class="t" d="M7.5 12h9" opacity=".3"/><path class="l" d="M7.5 12h9"/>`,
    css: (n, d) => `.ul-${n} .l{${A(n, 'sweep', d)}}
.ul-${n} .t{${A(n, 'sweep', d, 'ease-in-out', -(d - 0.14))}}
.ul-${n} .c{${A(n, 'focus', d)}}
@keyframes ul-${n}-sweep{0%,100%{transform:translateY(-5px)}50%{transform:translateY(5px)}}
@keyframes ul-${n}-focus{0%,50%,100%{transform:scale(1)}25%,75%{transform:scale(.95)}}`,
  },
  {
    name: 'broadcast', cat: 'signal', zh: '發送', en: 'Broadcast', ariaZh: '訊號發送中', ariaEn: 'Broadcasting', dur: 2.2,
    useZh: '直播中、推播送出、即時連線', useEn: 'Live, push sent, real-time link',
    whyZh: '中心點先輕輕一縮，兩層弧線由內往外依序亮起再退回，像一次一次的呼吸，不閃爍。',
    whyEn: 'The centre dot gives a small pulse, then two pairs of arcs light up from inside out and settle back. A breath, not a blink.',
    body: `<circle class="d" cx="12" cy="12" r="1.75" ${DOT}/><path class="a1" d="M8.6 8.6a4.8 4.8 0 0 0 0 6.8M15.4 8.6a4.8 4.8 0 0 1 0 6.8"/><path class="a2" d="M5.8 5.8a8.8 8.8 0 0 0 0 12.4M18.2 5.8a8.8 8.8 0 0 1 0 12.4"/>`,
    css: (n, d) => `.ul-${n} .d{${A(n, 'beat', d, 'ease-out')}}
.ul-${n} .a1{${A(n, 'wave', d, 'ease-in-out', -(d - 0.18))}}
.ul-${n} .a2{${A(n, 'wave', d, 'ease-in-out', -(d - 0.46))}}
@keyframes ul-${n}-beat{0%,30%,100%{transform:scale(1)}10%{transform:scale(.7)}}
@keyframes ul-${n}-wave{0%,60%,100%{opacity:.18}20%{opacity:1}}`,
  },
  // ── 形體 Form ──
  {
    name: 'spark', cat: 'form', zh: '靈光', en: 'Spark', ariaZh: 'AI 思考中', ariaEn: 'Thinking', dur: 3.2,
    useZh: 'AI 思考、生成建議、新功能提示', useEn: 'AI thinking, suggestions, a new feature hint',
    whyZh: '四芒星轉 90 度回到原樣，中途收小再放開；右上的小十字在它最小時亮一下。轉完剛好重疊，所以迴圈看不到接縫。',
    whyEn: 'A four-point star turns 90 degrees, shrinking and opening on the way; a small cross glints at its smallest moment. 90 degrees lands on itself, so the loop has no seam.',
    body: `<path class="s" d="M12 4Q13 11 20 12Q13 13 12 20Q11 13 4 12Q11 11 12 4Z"/><path class="g" d="M18.8 2.6v3.6M17 4.4h3.6"/>`,
    css: (n, d) => `.ul-${n} .s{${A(n, 'turn', d, 'cubic-bezier(.65,0,.35,1)')}}
.ul-${n} .g{transform-origin:18.8px 4.4px;${A(n, 'glint', d)}}
@keyframes ul-${n}-turn{0%{transform:rotate(0) scale(1)}40%{transform:rotate(45deg) scale(.78)}80%,100%{transform:rotate(90deg) scale(1)}}
@keyframes ul-${n}-glint{0%,22%{opacity:0;transform:scale(.3)}42%{opacity:1;transform:scale(1)}70%,100%{opacity:0;transform:scale(.3)}}`,
  },
  {
    name: 'layers', cat: 'form', zh: '疊層', en: 'Layers', ariaZh: '整合中', ariaEn: 'Merging', dur: 2.8,
    useZh: '整合資料、合併版本、堆疊模型', useEn: 'Merging data, combining versions, stacking models',
    whyZh: '三層由上往下依序拉開再落回，間距像在呼吸；只動位置不變形，所以小尺寸也不糊。',
    whyEn: 'Three layers part one after another and settle back, the gaps breathing. Only position moves, so it stays crisp at small sizes.',
    body: `<path class="l3" d="M3.5 16 12 20.5 20.5 16"/><path class="l2" d="M3.5 12 12 16.5 20.5 12"/><path class="l1" d="M12 3.5 20.5 8 12 12.5 3.5 8Z"/>`,
    css: (n, d) => `.ul-${n} .l1{${A(n, 'up', d)}}
.ul-${n} .l2{${A(n, 'mid', d, 'ease-in-out', -(d - 0.1))}}
.ul-${n} .l3{${A(n, 'down', d, 'ease-in-out', -(d - 0.2))}}
@keyframes ul-${n}-up{0%,70%,100%{transform:translateY(0)}35%{transform:translateY(-2.6px)}}
@keyframes ul-${n}-mid{0%,70%,100%{transform:translateY(0)}35%{transform:translateY(-.9px)}}
@keyframes ul-${n}-down{0%,70%,100%{transform:translateY(0)}35%{transform:translateY(1.1px)}}`,
  },
  // ── 軌道 Orbit ──
  {
    name: 'loading-orbit', cat: 'orbit', zh: '載入軌道', en: 'Loading orbit', ariaZh: '載入中', ariaEn: 'Loading', dur: 1.6,
    useZh: '頁面、清單、按鈕送出後的等待', useEn: 'Waiting for a page, a list, or a submitted button',
    whyZh: '弧線一邊繞一邊在 5% 到 85% 之間伸縮，旋轉和伸縮用不同週期，看久了不會覺得在重播。',
    whyEn: 'The arc spins while stretching between 5% and 85% of the ring; spin and stretch run on different cycles, so it never feels like a replay.',
    body: `<circle cx="12" cy="12" r="8" opacity=".18"/><g class="g"><path class="a" d="M12 4a8 8 0 1 1 0 16a8 8 0 1 1 0-16" pathLength="100" stroke-dasharray="85 95" stroke-dashoffset="55"/></g>`,
    css: (n, d) => `.ul-${n} .g{${A(n, 'spin', d, 'linear')}}
.ul-${n} .a{${A(n, 'arc', d * 1.75)}}
@keyframes ul-${n}-spin{to{transform:rotate(360deg)}}
@keyframes ul-${n}-arc{from{stroke-dashoffset:55}to{stroke-dashoffset:-125}}`,
  },
  {
    name: 'connecting', cat: 'orbit', zh: '連線', en: 'Connecting', ariaZh: '連線中', ariaEn: 'Connecting', dur: 3.6,
    useZh: '連接帳號、同步裝置、和伺服器握手', useEn: 'Linking an account, syncing devices, a server handshake',
    whyZh: '內外兩條軌道反向運轉、速度不同，兩顆點每隔一陣子會對齊一次，像兩端終於接上。',
    whyEn: 'Inner and outer orbits turn in opposite directions at different speeds; every so often the two dots line up, like both ends finally meeting.',
    body: `<circle cx="12" cy="12" r="8" opacity=".18"/><circle cx="12" cy="12" r="4.5" opacity=".18"/><circle cx="12" cy="12" r="1.25" ${DOT}/><g class="o1"><circle cx="12" cy="4" r="1.6" ${DOT}/></g><g class="o2"><circle cx="12" cy="16.5" r="1.25" ${DOT}/></g>`,
    css: (n, d) => `.ul-${n} .o1{${A(n, 'cw', d, 'linear')}}
.ul-${n} .o2{${A(n, 'ccw', d * 0.6, 'linear')}}
@keyframes ul-${n}-cw{to{transform:rotate(360deg)}}
@keyframes ul-${n}-ccw{to{transform:rotate(-360deg)}}`,
  },
  // ── 進程 Progress ──
  {
    name: 'steps', cat: 'progress', zh: '步驟', en: 'Steps', ariaZh: '步驟進行中', ariaEn: 'In progress', dur: 3.4,
    useZh: '多步驟流程：上傳、分析、完成', useEn: 'Multi-step flows: upload, analyse, done',
    whyZh: '三個節點依序點亮，中間的線一段一段畫過去；全亮後停一拍，再一起淡出重來。',
    whyEn: 'Three nodes light up in turn as the links draw between them; all lit, it holds a beat, then fades together and starts again.',
    body: `<path d="M7 12h3M14 12h3" opacity=".2"/><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/><circle class="f1" cx="5" cy="12" r="2" ${DOT}/><circle class="f2" cx="12" cy="12" r="2" ${DOT}/><circle class="f3" cx="19" cy="12" r="2" ${DOT}/><path class="k1" d="M7 12h3" pathLength="1" stroke-dasharray="1 1.2"/><path class="k2" d="M14 12h3" pathLength="1" stroke-dasharray="1 1.2"/>`,
    css: (n, d) => `.ul-${n} .f1{transform-origin:5px 12px;${A(n, 'f1', d)}}
.ul-${n} .f2{${A(n, 'f2', d)}}
.ul-${n} .f3{transform-origin:19px 12px;${A(n, 'f3', d)}}
.ul-${n} .k1{${A(n, 'k1', d)}}
.ul-${n} .k2{${A(n, 'k2', d)}}
@keyframes ul-${n}-f1{0%{opacity:0;transform:scale(.3)}8%,84%{opacity:1;transform:scale(1)}94%,100%{opacity:0;transform:scale(1)}}
@keyframes ul-${n}-k1{0%,8%{stroke-dashoffset:1.1;opacity:1}28%,84%{stroke-dashoffset:0;opacity:1}94%{stroke-dashoffset:0;opacity:0}100%{stroke-dashoffset:1.1;opacity:0}}
@keyframes ul-${n}-f2{0%,28%{opacity:0;transform:scale(.3)}36%,84%{opacity:1;transform:scale(1)}94%,100%{opacity:0;transform:scale(1)}}
@keyframes ul-${n}-k2{0%,36%{stroke-dashoffset:1.1;opacity:1}56%,84%{stroke-dashoffset:0;opacity:1}94%{stroke-dashoffset:0;opacity:0}100%{stroke-dashoffset:1.1;opacity:0}}
@keyframes ul-${n}-f3{0%,56%{opacity:0;transform:scale(.3)}64%,84%{opacity:1;transform:scale(1)}94%,100%{opacity:0;transform:scale(1)}}`,
  },
  {
    name: 'verify', cat: 'progress', zh: '驗證', en: 'Verify', ariaZh: '驗證完成', ariaEn: 'Verified', dur: 3.4,
    useZh: '檢查通過、付款成功、安全驗證', useEn: 'Checks passed, payment done, security verified',
    whyZh: '六角形外框先一筆畫完，勾再畫進來，最後整個輕輕一彈。用六角形不用圓，看起來像一枚印章。',
    whyEn: 'The hexagon draws in one stroke, the tick follows, and the whole mark gives a small lift. A hexagon instead of a circle, so it reads like a seal.',
    body: `<path d="M12 3.5l7.4 4.25v8.5L12 20.5l-7.4-4.25v-8.5Z" opacity=".18"/><g class="g"><path class="h" d="M12 3.5l7.4 4.25v8.5L12 20.5l-7.4-4.25v-8.5Z" pathLength="1" stroke-dasharray="1 1.2"/><path class="k" d="M8.6 12.3l2.3 2.3 4.5-4.8" pathLength="1" stroke-dasharray="1 1.2"/></g>`,
    css: (n, d) => `.ul-${n} .h{${A(n, 'hex', d)}}
.ul-${n} .k{${A(n, 'tick', d)}}
.ul-${n} .g{${A(n, 'lift', d)}}
@keyframes ul-${n}-hex{0%{stroke-dashoffset:1.1;opacity:1}34%,86%{stroke-dashoffset:0;opacity:1}96%{stroke-dashoffset:0;opacity:0}100%{stroke-dashoffset:1.1;opacity:0}}
@keyframes ul-${n}-tick{0%,34%{stroke-dashoffset:1.1;opacity:1}50%,86%{stroke-dashoffset:0;opacity:1}96%{stroke-dashoffset:0;opacity:0}100%{stroke-dashoffset:1.1;opacity:0}}
@keyframes ul-${n}-lift{0%,50%,68%,100%{transform:scale(1)}58%{transform:scale(1.07)}}`,
  },
  // ── 書寫 Write ──
  {
    name: 'stream', cat: 'write', zh: '串流', en: 'Stream', ariaZh: '文字輸出中', ariaEn: 'Writing', dur: 4,
    useZh: 'AI 回覆生成中、自動撰寫、摘要產生', useEn: 'AI reply generating, auto-writing, summarising',
    whyZh: '三行字由左往右寫出來，游標跟著走、換行時跳下一行；寫完游標柔和地眨兩下，整段淡出再寫一次。',
    whyEn: 'Three lines write left to right with the caret riding along and hopping to the next line; when done, the caret softly blinks twice and the text fades to write again.',
    body: `<path class="t1" d="M4 7h16" pathLength="1" stroke-dasharray="1 1.2"/><path class="t2" d="M4 12h12" pathLength="1" stroke-dasharray="1 1.2"/><path class="t3" d="M4 17h7" pathLength="1" stroke-dasharray="1 1.2"/><path class="c" d="M0-2.6v5.2" transform="translate(12.8 17)"/>`,
    css: (n, d) => `.ul-${n} .t1{${A(n, 't1', d, 'linear')}}
.ul-${n} .t2{${A(n, 't2', d, 'linear')}}
.ul-${n} .t3{${A(n, 't3', d, 'linear')}}
.ul-${n} .c{transform-origin:0 0;${A(n, 'caret', d, 'linear')}}
@keyframes ul-${n}-t1{0%{stroke-dashoffset:1.1;opacity:1}24%,84%{stroke-dashoffset:0;opacity:1}92%,100%{stroke-dashoffset:0;opacity:0}}
@keyframes ul-${n}-t2{0%,25%{stroke-dashoffset:1.1;opacity:1}44%,84%{stroke-dashoffset:0;opacity:1}92%,100%{stroke-dashoffset:0;opacity:0}}
@keyframes ul-${n}-t3{0%,45%{stroke-dashoffset:1.1;opacity:1}58%,84%{stroke-dashoffset:0;opacity:1}92%,100%{stroke-dashoffset:0;opacity:0}}
@keyframes ul-${n}-caret{0%{transform:translate(5.8px,7px);opacity:1}24%{transform:translate(21.8px,7px)}25%{transform:translate(5.8px,12px)}44%{transform:translate(17.8px,12px)}45%{transform:translate(5.8px,17px)}58%{transform:translate(12.8px,17px);opacity:1}63%{opacity:0}68%{opacity:1}73%{opacity:0}78%{opacity:1}84%{transform:translate(12.8px,17px);opacity:1}92%{transform:translate(12.8px,17px);opacity:0}93%{transform:translate(5.8px,7px);opacity:0}100%{transform:translate(5.8px,7px);opacity:1}}`,
  },
  {
    name: 'prompt', cat: 'write', zh: '提示列', en: 'Prompt', ariaZh: '等待輸入', ariaEn: 'Awaiting input', dur: 2.4,
    useZh: '命令列、輸入框空白時、等你下指令', useEn: 'A command line, an empty input, waiting for your instruction',
    whyZh: '箭頭往前輕推一下，底線游標穩定地眨；節奏放慢到像在等人，不像在催人。',
    whyEn: 'The chevron nudges forward once and the underscore caret blinks at a calm pace. It waits for you rather than hurrying you.',
    body: `<path class="ch" d="M5 7.5l4.5 4.5L5 16.5"/><path class="cu" d="M12.5 16.5h6.5"/>`,
    css: (n, d) => `.ul-${n} .ch{${A(n, 'nudge', d)}}
.ul-${n} .cu{${A(n, 'blink', d, 'linear')}}
@keyframes ul-${n}-nudge{0%,30%,100%{transform:translateX(0)}12%{transform:translateX(1.2px)}}
@keyframes ul-${n}-blink{0%,22%,50%,72%,100%{opacity:1}25%,47%,75%,97%{opacity:0}}`,
  },
  // ── 器物 Object ──
  {
    name: 'flask', cat: 'object', zh: '燒瓶', en: 'Flask', ariaZh: '實驗中', ariaEn: 'Experimenting', dur: 2.4,
    useZh: '實驗功能、測試版、正在試新東西', useEn: 'Experimental features, beta, trying something new',
    whyZh: 'Ultra Lab 的「Lab」。瓶裡液面輕輕晃，三顆氣泡錯開時間從底部冒出瓶口、邊升邊淡。',
    whyEn: 'The Lab in Ultra Lab. The liquid line sways gently while three bubbles rise out of the neck at staggered times, fading as they go.',
    body: `<path d="M9 3.5h6M10 3.5V9l-5 8.6a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3L14 9V3.5"/><path class="w" d="M8 14h8"/><circle class="b1" cx="11.1" cy="17.6" r="1" ${DOT}/><circle class="b2" cx="12.9" cy="18.2" r=".8" ${DOT}/><circle class="b3" cx="12" cy="16.6" r=".7" ${DOT}/>`,
    css: (n, d) => `.ul-${n} .w{transform-origin:12px 14px;${A(n, 'sway', d * 1.5)}}
.ul-${n} .b1{transform-origin:11.1px 17.6px;${A(n, 'rise', d, 'cubic-bezier(.45,0,.6,1)')}}
.ul-${n} .b2{transform-origin:12.9px 18.2px;${A(n, 'rise', d, 'cubic-bezier(.45,0,.6,1)', -d / 3)}}
.ul-${n} .b3{transform-origin:12px 16.6px;${A(n, 'rise', d, 'cubic-bezier(.45,0,.6,1)', (-d * 2) / 3)}}
@keyframes ul-${n}-sway{0%,100%{transform:rotate(0)}25%{transform:rotate(-4deg)}75%{transform:rotate(4deg)}}
@keyframes ul-${n}-rise{0%{opacity:0;transform:translateY(0) scale(.5)}18%{opacity:1;transform:translateY(-2.4px) scale(1)}75%{opacity:.85}100%{opacity:0;transform:translateY(-13px) scale(.75)}}`,
  },
  {
    name: 'hourglass', cat: 'object', zh: '沙漏', en: 'Hourglass', ariaZh: '請稍候', ariaEn: 'Please wait', dur: 4.2,
    useZh: '排隊中、算圖中、比較久的等待', useEn: 'Queued, rendering, the longer waits',
    whyZh: '上層的沙往下陷、下層慢慢堆起，中間一串沙粒往下落；漏完整個翻面。翻過去的畫面跟開頭一模一樣，所以一直漏下去也看不到接縫。',
    whyEn: 'Sand sinks above and piles below while grains fall through the neck; when it runs out, the glass flips. The flipped frame matches the first one, so it can run forever without a seam.',
    body: `<g class="g"><path d="M6.5 3.5h11M6.5 20.5h11M8 3.5v1.8c0 2.6 1.8 4.2 4 6.7 2.2-2.5 4-4.1 4-6.7V3.5M8 20.5v-1.8c0-2.6 1.8-4.2 4-6.7 2.2 2.5 4 4.1 4 6.7v1.8"/><path class="st" d="M10.2 7h3.6" transform="matrix(.6 0 0 1 0 1)"/><path class="sb" d="M10.2 17h3.6" transform="matrix(.55 0 0 1 0 0)"/><path class="fl" d="M12 13v3.2" stroke-dasharray=".01 1.6"/></g>`,
    css: (n, d) => `.ul-${n} .g{${A(n, 'flip', d)}}
.ul-${n} .st{transform-origin:12px 7px;${A(n, 'top', d, 'linear')}}
.ul-${n} .sb{transform-origin:12px 17px;${A(n, 'bot', d, 'linear')}}
.ul-${n} .fl{${A(n, 'fall', d, 'linear')}}
@keyframes ul-${n}-flip{0%,70%{transform:rotate(0)}90%,100%{transform:rotate(180deg)}}
@keyframes ul-${n}-top{0%{opacity:1;transform:translateY(0) scaleX(1)}64%{opacity:1;transform:translateY(2.6px) scaleX(.12)}66%,100%{opacity:0;transform:translateY(2.6px) scaleX(.12)}}
@keyframes ul-${n}-bot{0%{opacity:0;transform:translateY(1.2px) scaleX(0)}6%{opacity:1}64%,100%{opacity:1;transform:translateY(0) scaleX(1)}}
@keyframes ul-${n}-fall{0%{opacity:0;stroke-dashoffset:0}4%,60%{opacity:1}66%,100%{opacity:0;stroke-dashoffset:-6.44}}`,
  },
  // ── 第 2 階段（v0.2.0）新增 24 個 ──
  // 訊號 Signal
  {
    name: 'listen', cat: 'signal', zh: '收音', en: 'Listen', ariaZh: '聆聽中', ariaEn: 'Listening', dur: 1.8,
    useZh: '語音輸入、錄音中、AI 正在聽', useEn: 'Voice input, recording, the AI is listening',
    whyZh: '麥克風裡兩道格柵由下往上亮，外弧向外漾出一圈淡影，像聲音被收進去。',
    whyEn: 'Two grille lines light from bottom to top while a faint echo of the stand arc spreads outward, like sound being taken in.',
    body: `<rect x="9" y="3.5" width="6" height="10.5" rx="3"/><path class="g1" d="M11 10.5h2"/><path class="g2" d="M11 7.5h2"/><path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v2.5M9.5 20.5h5"/><path class="e" d="M5.5 11.5a6.5 6.5 0 0 0 13 0" opacity="0"/>`,
    css: (n, d) => `.ul-${n} .g1{${A(n, 'lv', d)}}
.ul-${n} .g2{${A(n, 'lv', d, 'ease-in-out', -(d - 0.18))}}
.ul-${n} .e{transform-origin:12px 11.5px;${A(n, 'echo', d, 'ease-out')}}
@keyframes ul-${n}-lv{0%,55%,100%{opacity:.3}25%{opacity:1}}
@keyframes ul-${n}-echo{0%{opacity:0;transform:scale(1)}12%{opacity:.6}70%,100%{opacity:0;transform:scale(1.25)}}`,
  },
  {
    name: 'wifi-search', cat: 'signal', zh: '找訊號', en: 'Wi-Fi search', ariaZh: '搜尋網路中', ariaEn: 'Searching for network', dur: 2.6,
    useZh: '連線中斷、搜尋網路、離線重連', useEn: 'Connection lost, finding a network, reconnecting',
    whyZh: '三道弧由近到遠一格一格亮起，全亮停一下再一起退淡，像訊號一格格找回來。',
    whyEn: 'Three arcs light up one by one from near to far, hold when full, then dim together, like bars coming back.',
    body: `<circle class="d" cx="12" cy="17.5" r="1.25" ${DOT}/><path class="a1" d="M9.17 14.67a4 4 0 0 1 5.66 0"/><path class="a2" d="M6.34 11.84a8 8 0 0 1 11.32 0"/><path class="a3" d="M3.51 9.01a12 12 0 0 1 16.98 0"/>`,
    css: (n, d) => `.ul-${n} .d{transform-origin:12px 17.5px;${A(n, 'beat', d)}}
.ul-${n} .a1{${A(n, 'a1', d)}}
.ul-${n} .a2{${A(n, 'a2', d)}}
.ul-${n} .a3{${A(n, 'a3', d)}}
@keyframes ul-${n}-beat{0%,20%,100%{transform:scale(1)}8%{transform:scale(.7)}}
@keyframes ul-${n}-a1{0%{opacity:.2}12%,78%{opacity:1}90%,100%{opacity:.2}}
@keyframes ul-${n}-a2{0%,14%{opacity:.2}26%,78%{opacity:1}90%,100%{opacity:.2}}
@keyframes ul-${n}-a3{0%,28%{opacity:.2}40%,78%{opacity:1}90%,100%{opacity:.2}}`,
  },
  {
    name: 'radar', cat: 'signal', zh: '雷達', en: 'Radar', ariaZh: '偵測中', ariaEn: 'Detecting', dur: 2.4,
    useZh: '監測、偵測異常、找附近的東西', useEn: 'Monitoring, spotting anomalies, finding what is nearby',
    whyZh: '掃描線拖著兩道漸淡的殘影繞圈，掃到右上那一點時，點亮起再慢慢消失。',
    whyEn: 'The sweep turns with two fading after-images; when it passes the blip, the blip flares and slowly fades.',
    body: `<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5" opacity=".25"/><g class="s"><path d="M12 12V3.5"/><path d="M12 12V3.5" transform="rotate(-16)" opacity=".4"/><path d="M12 12V3.5" transform="rotate(-32)" opacity=".15"/></g><circle class="b" cx="16.2" cy="7.8" r="1.2" ${DOT}/>`,
    css: (n, d) => `.ul-${n} .s{${A(n, 'spin', d, 'linear')}}
.ul-${n} .b{transform-origin:16.2px 7.8px;${A(n, 'blip', d, 'linear')}}
@keyframes ul-${n}-spin{to{transform:rotate(360deg)}}
@keyframes ul-${n}-blip{0%,11%{opacity:0;transform:scale(.4)}14%{opacity:1;transform:scale(1.15)}22%{transform:scale(1)}70%,100%{opacity:0;transform:scale(1)}}`,
  },
  {
    name: 'notify', cat: 'signal', zh: '新通知', en: 'Notify', ariaZh: '有新通知', ariaEn: 'New notification', dur: 3,
    useZh: '收件匣、新訊息、待處理提醒', useEn: 'Inbox, new message, something waiting for you',
    whyZh: '右上角的點彈出來，外圈漾開一次，框輕輕震兩下；框在點旁邊留了缺口，線不會疊在一起。',
    whyEn: 'The dot pops in the corner, a ring spreads out once and the frame gives a small buzz; the frame leaves a gap by the dot so lines never collide.',
    body: `<path class="f" d="M13 5H7.5A3.5 3.5 0 0 0 4 8.5v8A3.5 3.5 0 0 0 7.5 20h8a3.5 3.5 0 0 0 3.5-3.5V11M8 12h6M8 15.5h4"/><circle class="r" cx="18" cy="6" r="2.5" opacity="0"/><circle class="d" cx="18" cy="6" r="2.5" ${DOT}/>`,
    css: (n, d) => `.ul-${n} .d{transform-origin:18px 6px;${A(n, 'pop', d)}}
.ul-${n} .r{transform-origin:18px 6px;${A(n, 'ring', d, 'ease-out')}}
.ul-${n} .f{transform-origin:11.5px 12.5px;${A(n, 'buzz', d)}}
@keyframes ul-${n}-pop{0%{opacity:0;transform:scale(0)}10%{opacity:1;transform:scale(1.25)}18%,82%{opacity:1;transform:scale(1)}92%,100%{opacity:0;transform:scale(0)}}
@keyframes ul-${n}-ring{0%,10%{opacity:0;transform:scale(1)}12%{opacity:.7}45%,100%{opacity:0;transform:scale(2.1)}}
@keyframes ul-${n}-buzz{0%,10%,30%,100%{transform:rotate(0)}14%{transform:rotate(-5deg)}18%{transform:rotate(4deg)}22%{transform:rotate(-3deg)}26%{transform:rotate(2deg)}}`,
  },
  // 形體 Form
  {
    name: 'morph', cat: 'form', zh: '變形', en: 'Morph', ariaZh: '轉換中', ariaEn: 'Transforming', dur: 3,
    useZh: '格式轉換、套用樣式、重新生成', useEn: 'Converting formats, applying a style, regenerating',
    whyZh: '方形一邊轉一邊淡成圓，再轉回方形；方形轉 90 度回到原樣，所以一直變也沒有接縫。',
    whyEn: 'The square turns as it dissolves into a circle and back again; 90 degrees lands on itself, so the morph loops without a seam.',
    body: `<rect class="sq" x="6" y="6" width="12" height="12" rx="2"/><circle class="ci" cx="12" cy="12" r="7" opacity="0"/>`,
    css: (n, d) => `.ul-${n} .sq{${A(n, 'sq', d)}}
.ul-${n} .ci{${A(n, 'ci', d)}}
@keyframes ul-${n}-sq{0%{opacity:1;transform:rotate(0) scale(1)}30%,50%{opacity:0;transform:rotate(45deg) scale(.8)}80%,100%{opacity:1;transform:rotate(90deg) scale(1)}}
@keyframes ul-${n}-ci{0%{opacity:0;transform:scale(.75)}30%,50%{opacity:1;transform:scale(1)}80%,100%{opacity:0;transform:scale(.75)}}`,
  },
  {
    name: 'facets', cat: 'form', zh: '切面', en: 'Facets', ariaZh: '運算中', ariaEn: 'Computing', dur: 3.6,
    useZh: '運算、模型推論、資料比對', useEn: 'Computing, model inference, matching data',
    whyZh: '兩個三角形反向各轉 120 度，半路疊成同一個三角形再分開；轉完剛好回到六芒的樣子。',
    whyEn: 'Two triangles turn 120 degrees in opposite directions, merging into one triangle halfway before parting; they end exactly where they began.',
    body: `<path class="u" d="M12 4 18.93 16H5.07Z"/><path class="w" d="M12 20 5.07 8h13.86Z"/>`,
    css: (n, d) => `.ul-${n} .u{${A(n, 'cw', d, 'cubic-bezier(.65,0,.35,1)')}}
.ul-${n} .w{${A(n, 'ccw', d, 'cubic-bezier(.65,0,.35,1)')}}
@keyframes ul-${n}-cw{0%{transform:rotate(0)}70%,100%{transform:rotate(120deg)}}
@keyframes ul-${n}-ccw{0%{transform:rotate(0)}70%,100%{transform:rotate(-120deg)}}`,
  },
  {
    name: 'prism', cat: 'form', zh: '稜鏡', en: 'Prism', ariaZh: '分析中', ariaEn: 'Analysing', dur: 3.4,
    useZh: '拆解資料、分析結果、一變多', useEn: 'Breaking data down, analysis results, one into many',
    whyZh: '一道光從左邊畫進稜鏡，右邊依序分成三道；全部畫完停一拍再淡出，重新打光。',
    whyEn: 'A beam draws into the prism from the left and splits into three rays one after another; it holds, fades and shines again.',
    body: `<path d="M12 6l5 9H7Z"/><path class="i" d="M2.5 11.5h6.4" pathLength="1" stroke-dasharray="1 1.2"/><path class="r1" d="M15.4 10.2 21.5 7.5" pathLength="1" stroke-dasharray="1 1.2"/><path class="r2" d="M15.8 11.6 21.5 12" pathLength="1" stroke-dasharray="1 1.2"/><path class="r3" d="M16.6 13 21.5 16.5" pathLength="1" stroke-dasharray="1 1.2"/>`,
    css: (n, d) => `.ul-${n} .i{${A(n, 'i', d)}}
.ul-${n} .r1{${A(n, 'r1', d)}}
.ul-${n} .r2{${A(n, 'r2', d)}}
.ul-${n} .r3{${A(n, 'r3', d)}}
@keyframes ul-${n}-i{0%{stroke-dashoffset:1.1;opacity:1}22%,82%{stroke-dashoffset:0;opacity:1}92%{stroke-dashoffset:0;opacity:0}100%{stroke-dashoffset:1.1;opacity:0}}
@keyframes ul-${n}-r1{0%,22%{stroke-dashoffset:1.1;opacity:1}38%,82%{stroke-dashoffset:0;opacity:1}92%{stroke-dashoffset:0;opacity:0}100%{stroke-dashoffset:1.1;opacity:0}}
@keyframes ul-${n}-r2{0%,26%{stroke-dashoffset:1.1;opacity:1}42%,82%{stroke-dashoffset:0;opacity:1}92%{stroke-dashoffset:0;opacity:0}100%{stroke-dashoffset:1.1;opacity:0}}
@keyframes ul-${n}-r3{0%,30%{stroke-dashoffset:1.1;opacity:1}46%,82%{stroke-dashoffset:0;opacity:1}92%{stroke-dashoffset:0;opacity:0}100%{stroke-dashoffset:1.1;opacity:0}}`,
  },
  {
    name: 'wave', cat: 'form', zh: '波紋', en: 'Wave', ariaZh: '擴散中', ariaEn: 'Spreading', dur: 2.6,
    useZh: '觸控回饋、擴散分享、影響範圍', useEn: 'Touch feedback, sharing outward, reach',
    whyZh: '中心點輕輕一敲，兩圈波紋錯開半拍向外擴散、邊擴邊淡，永遠有一圈在走。',
    whyEn: 'The centre taps once and two rings spread outward half a beat apart, fading as they grow, so one is always on its way.',
    body: `<circle class="d" cx="12" cy="12" r="1.5" ${DOT}/><circle class="w1" cx="12" cy="12" r="8.5"/><circle class="w2" cx="12" cy="12" r="8.5" transform="scale(.55)"/>`,
    css: (n, d) => `.ul-${n} .w1{${A(n, 'wave', d, 'cubic-bezier(.2,.6,.35,1)')}}
.ul-${n} .w2{${A(n, 'wave', d, 'cubic-bezier(.2,.6,.35,1)', -d / 2)}}
.ul-${n} .d{${A(n, 'tap', d / 2)}}
@keyframes ul-${n}-wave{0%{opacity:0;transform:scale(.18)}15%{opacity:1}100%{opacity:0;transform:scale(1)}}
@keyframes ul-${n}-tap{0%,30%,100%{transform:scale(1)}10%{transform:scale(.7)}}`,
  },
  // 軌道 Orbit
  {
    name: 'sync', cat: 'orbit', zh: '同步', en: 'Sync', ariaZh: '同步中', ariaEn: 'Syncing', dur: 2.4,
    useZh: '雲端同步、資料更新、雙向對齊', useEn: 'Cloud sync, updating data, two-way alignment',
    whyZh: '兩支箭頭一起轉半圈然後停住，像一次一次確認；轉半圈剛好換位，迴圈看不出來。',
    whyEn: 'Two arrows turn half a circle together and pause, like a check-in; half a turn swaps them exactly, so the loop is invisible.',
    body: `<g class="g"><path d="M5 12a7 7 0 0 1 11.95-4.95M17.2 3.6v3.6h-3.6M19 12a7 7 0 0 1-11.95 4.95M6.8 20.4v-3.6h3.6"/></g>`,
    css: (n, d) => `.ul-${n} .g{${A(n, 'turn', d, 'cubic-bezier(.65,0,.35,1)')}}
@keyframes ul-${n}-turn{0%{transform:rotate(0)}55%,100%{transform:rotate(180deg)}}`,
  },
  {
    name: 'infinity', cat: 'orbit', zh: '無限', en: 'Infinity', ariaZh: '持續處理中', ariaEn: 'Processing', dur: 2.4,
    useZh: '背景作業、持續訓練、不知道要多久的等待', useEn: 'Background jobs, continuous training, waits of unknown length',
    whyZh: '一段光沿著無限符號一直跑，底下留著淡淡的軌跡，告訴你它沒有卡住。',
    whyEn: 'A segment of light runs along an infinity track that stays faintly visible, telling you nothing is stuck.',
    body: `<path d="${INF}" opacity=".18"/><path class="r" d="${INF}" pathLength="100" stroke-dasharray="24 76"/>`,
    css: (n, d) => `.ul-${n} .r{${A(n, 'run', d, 'linear')}}
@keyframes ul-${n}-run{from{stroke-dashoffset:0}to{stroke-dashoffset:-100}}`,
  },
  {
    name: 'gear', cat: 'orbit', zh: '齒輪', en: 'Gear', ariaZh: '處理中', ariaEn: 'Working', dur: 1.6,
    useZh: '設定套用中、系統處理、自動化執行', useEn: 'Applying settings, system work, automation running',
    whyZh: '齒輪一次轉一齒（45 度）再停一下，像機械在走；八個齒對稱，每一步都接得剛好。',
    whyEn: 'The gear advances one tooth (45 degrees) and rests, like a mechanism ticking; eight symmetric teeth make every step seamless.',
    body: `<path class="g" d="${GEAR}"/><circle cx="12" cy="12" r="2.5"/>`,
    css: (n, d) => `.ul-${n} .g{${A(n, 'tick', d, 'cubic-bezier(.5,0,.2,1)')}}
@keyframes ul-${n}-tick{0%{transform:rotate(0)}45%,100%{transform:rotate(45deg)}}`,
  },
  {
    name: 'compass', cat: 'orbit', zh: '羅盤', en: 'Compass', ariaZh: '定位中', ariaEn: 'Locating', dur: 3.2,
    useZh: '定位、導覽、找方向', useEn: 'Locating, onboarding tours, finding direction',
    whyZh: '指針被輕輕撥動，左右擺幾下越擺越小，最後穩穩停回正北。',
    whyEn: 'The needle is nudged, swings a few times with shrinking arcs and settles back to north.',
    body: `<circle cx="12" cy="12" r="9"/><g class="n"><path d="M12 5.5l2.2 6.5H9.8Z" fill="currentColor"/><path d="M9.8 12 12 18.5l2.2-6.5"/></g><circle cx="12" cy="12" r=".9" ${DOT}/>`,
    css: (n, d) => `.ul-${n} .n{${A(n, 'swing', d)}}
@keyframes ul-${n}-swing{0%{transform:rotate(0)}15%{transform:rotate(-35deg)}35%{transform:rotate(25deg)}50%{transform:rotate(-12deg)}62%{transform:rotate(6deg)}72%,100%{transform:rotate(0)}}`,
  },
  // 進程 Progress
  {
    name: 'upload', cat: 'progress', zh: '上傳', en: 'Upload', ariaZh: '上傳中', ariaEn: 'Uploading', dur: 2.2,
    useZh: '上傳檔案、發布、送出資料', useEn: 'Uploading files, publishing, sending data',
    whyZh: '箭頭從托盤裡升起，停一下，再往上飛走淡出；下一支接著從托盤裡冒出來。',
    whyEn: 'The arrow rises out of the tray, pauses, then lifts away and fades; the next one emerges from the tray.',
    body: `<path d="M4 15v2.5A2.5 2.5 0 0 0 6.5 20h11a2.5 2.5 0 0 0 2.5-2.5V15"/><g class="a"><path d="M12 15V4.5M7.5 9l4.5-4.5L16.5 9"/></g>`,
    css: (n, d) => `.ul-${n} .a{${A(n, 'up', d)}}
@keyframes ul-${n}-up{0%{opacity:0;transform:translateY(3px)}22%,62%{opacity:1;transform:translateY(0)}88%,100%{opacity:0;transform:translateY(-4px)}}`,
  },
  {
    name: 'download', cat: 'progress', zh: '下載', en: 'Download', ariaZh: '下載中', ariaEn: 'Downloading', dur: 2.2,
    useZh: '下載檔案、匯出、存到本機', useEn: 'Downloading, exporting, saving locally',
    whyZh: '箭頭從上方落下，停一下再落進托盤；托盤接住時輕輕一沉。',
    whyEn: 'The arrow drops in from above, pauses, then sinks into the tray, which dips slightly as it catches it.',
    body: `<path class="t" d="M4 15v2.5A2.5 2.5 0 0 0 6.5 20h11a2.5 2.5 0 0 0 2.5-2.5V15"/><g class="a"><path d="M12 4.5V15M7.5 10.5l4.5 4.5 4.5-4.5"/></g>`,
    css: (n, d) => `.ul-${n} .a{${A(n, 'down', d)}}
.ul-${n} .t{${A(n, 'dip', d)}}
@keyframes ul-${n}-down{0%{opacity:0;transform:translateY(-4px)}25%,60%{opacity:1;transform:translateY(0)}82%,100%{opacity:0;transform:translateY(3px)}}
@keyframes ul-${n}-dip{0%,70%,100%{transform:translateY(0)}80%{transform:translateY(1px)}}`,
  },
  {
    name: 'percent-ring', cat: 'progress', zh: '進度環', en: 'Progress ring', ariaZh: '進度載入中', ariaEn: 'Loading progress', dur: 3.2,
    useZh: '有明確進度的等待：處理、匯入、算圖', useEn: 'Waits with real progress: processing, importing, rendering',
    whyZh: '環從正上方順時針填滿，中心點跟著長大；滿了整個輕彈一下，淡出再從零開始。',
    whyEn: 'The ring fills clockwise from the top while the centre dot grows; when full it gives a small lift, fades and starts from zero.',
    body: `<circle cx="12" cy="12" r="8.5" opacity=".18"/><g class="g"><path class="a" d="M12 3.5a8.5 8.5 0 1 1 0 17a8.5 8.5 0 1 1 0-17" pathLength="100" stroke-dasharray="100 110"/><circle class="c" cx="12" cy="12" r="2.5" ${DOT}/></g>`,
    css: (n, d) => `.ul-${n} .a{${A(n, 'fill', d, 'cubic-bezier(.3,.1,.3,1)')}}
.ul-${n} .c{${A(n, 'dot', d, 'cubic-bezier(.3,.1,.3,1)')}}
.ul-${n} .g{${A(n, 'lift', d)}}
@keyframes ul-${n}-fill{0%{stroke-dashoffset:101;opacity:1}70%,82%{stroke-dashoffset:0;opacity:1}94%{stroke-dashoffset:0;opacity:0}100%{stroke-dashoffset:101;opacity:0}}
@keyframes ul-${n}-dot{0%{opacity:1;transform:scale(0)}70%,82%{opacity:1;transform:scale(1)}94%{opacity:0;transform:scale(1)}100%{opacity:0;transform:scale(0)}}
@keyframes ul-${n}-lift{0%,70%,82%,100%{transform:scale(1)}76%{transform:scale(1.06)}}`,
  },
  {
    name: 'retry', cat: 'progress', zh: '重試', en: 'Retry', ariaZh: '發生錯誤，重試中', ariaEn: 'Error, retrying', dur: 3.4,
    useZh: '送出失敗、連線錯誤、自動重試', useEn: 'Failed submit, connection error, automatic retry',
    whyZh: '驚嘆號先輕搖兩下表示出錯，接著換成一支迴轉箭頭繞一圈，再回到驚嘆號；不刺眼，但看得懂發生什麼事。',
    whyEn: 'The exclamation mark shakes gently to say something failed, then gives way to a turning arrow for one lap before returning. Calm, but clear.',
    body: `<circle cx="12" cy="12" r="9"/><g class="x"><path d="M12 7.5v5"/><circle cx="12" cy="16" r="1" ${DOT}/></g><g class="r" opacity="0"><path d="M15.9 9.75A4.5 4.5 0 1 0 16.08 13.9M16.4 6.3v3.6h-3.6"/></g>`,
    css: (n, d) => `.ul-${n} .x{${A(n, 'x', d)}}
.ul-${n} .r{${A(n, 'r', d)}}
@keyframes ul-${n}-x{0%{opacity:1;transform:translateX(0)}6%{transform:translateX(-1px)}10%{transform:translateX(1px)}14%{transform:translateX(-.6px)}18%{transform:translateX(0)}34%{opacity:1}42%,90%{opacity:0;transform:translateX(0)}100%{opacity:1;transform:translateX(0)}}
@keyframes ul-${n}-r{0%,36%{opacity:0;transform:rotate(-90deg)}46%{opacity:1}80%{opacity:1;transform:rotate(270deg)}90%,100%{opacity:0;transform:rotate(270deg)}}`,
  },
  // 書寫 Write
  {
    name: 'translate', cat: 'write', zh: '翻譯', en: 'Translate', ariaZh: '翻譯中', ariaEn: 'Translating', dur: 3.6,
    useZh: '翻譯、切換語言、雙語內容', useEn: 'Translating, switching language, bilingual content',
    whyZh: '一張寫著字母、一張寫著文字的卡片交換位置，停一下再換回來；來回一次就是一個迴圈。',
    whyEn: 'A card with a letter and a card with lines swap places, pause, and swap back; there and back is one loop.',
    body: `<g class="p"><rect x="3" y="3" width="10" height="10" rx="2.5"/><path d="M5.6 10.4 8 5.4l2.4 5M6.5 8.6h3"/></g><g class="q"><rect x="11" y="11" width="10" height="10" rx="2.5"/><path d="M13.5 14.5h5M13.5 17.5h3.5"/></g>`,
    css: (n, d) => `.ul-${n} .p{${A(n, 'p', d)}}
.ul-${n} .q{${A(n, 'q', d)}}
@keyframes ul-${n}-p{0%,15%{transform:translate(0,0)}45%,65%{transform:translate(8px,8px)}95%,100%{transform:translate(0,0)}}
@keyframes ul-${n}-q{0%,15%{transform:translate(0,0)}45%,65%{transform:translate(-8px,-8px)}95%,100%{transform:translate(0,0)}}`,
  },
  {
    name: 'select', cat: 'write', zh: '選取', en: 'Select', ariaZh: '選取文字', ariaEn: 'Selecting text', dur: 3,
    useZh: '標記重點、引用段落、AI 改寫選取的文字', useEn: 'Highlighting, quoting, AI rewriting a selection',
    whyZh: '中間那行被一段淡色反白從左拉到右，結尾游標跟著走；選好停一下，再放開重選。',
    whyEn: 'A soft highlight drags across the middle line with the end handle riding along; it holds, releases and selects again.',
    body: `<path d="M4 6.5h16M4 17.5h9" opacity=".45"/><rect class="h" x="4" y="9.6" width="12" height="4.8" rx="1" fill="currentColor" stroke="none" opacity=".22"/><path d="M4 12h12"/><path d="M4 9.2v5.6"/><path class="e" d="M16 9.2v5.6"/>`,
    css: (n, d) => `.ul-${n} .h{transform-origin:4px 12px;${A(n, 'h', d)}}
.ul-${n} .e{${A(n, 'e', d)}}
@keyframes ul-${n}-h{0%,12%{opacity:.22;transform:scaleX(0)}45%,80%{opacity:.22;transform:scaleX(1)}92%{opacity:0;transform:scaleX(1)}100%{opacity:0;transform:scaleX(0)}}
@keyframes ul-${n}-e{0%,12%{opacity:1;transform:translateX(-12px)}45%,80%{opacity:1;transform:translateX(0)}92%{opacity:0;transform:translateX(0)}100%{opacity:0;transform:translateX(-12px)}}`,
  },
  {
    name: 'search', cat: 'write', zh: '搜尋', en: 'Search', ariaZh: '搜尋中', ariaEn: 'Searching', dur: 3.2,
    useZh: '搜尋、檢索資料、在文件裡找答案', useEn: 'Search, retrieval, finding the answer in a document',
    whyZh: '放大鏡在幾行字上慢慢游移，像在一頁裡找東西，路線繞一圈回到原點。',
    whyEn: 'A magnifier drifts slowly over lines of text, looking for something on the page, and circles back to where it started.',
    body: `<path d="M3 6h18M3 12h18M3 18h12" opacity=".3"/><g class="m"><circle cx="10" cy="10" r="4.5"/><path d="M13.3 13.3 17 17"/></g>`,
    css: (n, d) => `.ul-${n} .m{${A(n, 'wander', d)}}
@keyframes ul-${n}-wander{0%,100%{transform:translate(0,0)}25%{transform:translate(5px,-1.5px)}50%{transform:translate(3px,4px)}75%{transform:translate(-2px,2px)}}`,
  },
  {
    name: 'summarize', cat: 'write', zh: '摘要', en: 'Summarize', ariaZh: '摘要中', ariaEn: 'Summarising', dur: 3.6,
    useZh: 'AI 摘要、重點整理、會議記錄', useEn: 'AI summaries, key points, meeting notes',
    whyZh: '四行字往中間收攏、縮短、消失，收成一行重點加一個點；停一下再展開回原文。',
    whyEn: 'Four lines draw together, shorten and vanish into one key line with a dot; it holds, then opens back into the full text.',
    body: `<path class="l1" d="M4 6h16"/><path class="l2" d="M4 10h13"/><path class="l3" d="M4 14h16"/><path class="l4" d="M4 18h10"/><g class="r" opacity="0"><path d="M6 12h9"/><circle cx="18.5" cy="12" r="1.25" ${DOT}/></g>`,
    css: (n, d) => [['l1', 6], ['l2', 2], ['l3', -2], ['l4', -6]].map(([c, y]) => `.ul-${n} .${c}{${A(n, c, d)}}
@keyframes ul-${n}-${c}{0%,8%{opacity:1;transform:translateY(0) scaleX(1)}38%,68%{opacity:0;transform:translateY(${y}px) scaleX(.5)}92%,100%{opacity:1;transform:translateY(0) scaleX(1)}}`).join('\n') + `
.ul-${n} .r{${A(n, 'r', d)}}
@keyframes ul-${n}-r{0%,30%{opacity:0;transform:scaleX(.6)}42%,64%{opacity:1;transform:scaleX(1)}74%,100%{opacity:0;transform:scaleX(.6)}}`,
  },
  // 器物 Object
  {
    name: 'key', cat: 'object', zh: '鑰匙', en: 'Key', ariaZh: '授權中', ariaEn: 'Authorising', dur: 3,
    useZh: '登入、授權、API 金鑰、權限設定', useEn: 'Sign-in, authorisation, API keys, permissions',
    whyZh: '鑰匙往前推一點，齒翻到上面（平面上用翻轉表現「轉開」），停一下再轉回來退出；鑰匙圈和柄一直都在。',
    whyEn: 'The key pushes in a little and its teeth flip to the top, a flat stand-in for turning; it holds, turns back and slides out, while the bow and shaft stay put.',
    body: `<g class="m"><circle cx="7" cy="12" r="3.5"/><path d="M10.5 12h10"/><path class="k" d="M18 12v3M15 12v2"/></g>`,
    css: (n, d) => `.ul-${n} .k{${A(n, 'turn', d)}}
.ul-${n} .m{${A(n, 'push', d)}}
@keyframes ul-${n}-turn{0%,25%{transform:scaleY(1)}33%,70%{transform:scaleY(-1)}78%,100%{transform:scaleY(1)}}
@keyframes ul-${n}-push{0%,100%{transform:translateX(0)}18%,86%{transform:translateX(1.5px)}}`,
  },
  {
    name: 'mail-send', cat: 'object', zh: '寄出', en: 'Mail send', ariaZh: '寄送中', ariaEn: 'Sending', dur: 2.6,
    useZh: '寄信、送出表單、訂閱成功', useEn: 'Sending email, submitting a form, subscribed',
    whyZh: '信封從左邊滑進來停好，往後收一點蓄力，再往右飛出去，身後留兩道速度線。',
    whyEn: 'The envelope slides in and settles, draws back slightly, then flies off to the right, leaving two speed lines behind.',
    body: `<g class="m"><rect x="3.5" y="6.5" width="17" height="11" rx="2"/><path d="m4.5 7.8 7.5 5.4 7.5-5.4"/></g><path class="w" d="M1.5 10.5h2.5M2.5 13.5h2" opacity="0"/>`,
    css: (n, d) => `.ul-${n} .m{${A(n, 'fly', d)}}
.ul-${n} .w{${A(n, 'wind', d)}}
@keyframes ul-${n}-fly{0%{opacity:0;transform:translateX(-5px)}12%,62%{opacity:1;transform:translateX(0)}70%{opacity:1;transform:translateX(-1px)}88%,100%{opacity:0;transform:translateX(9px)}}
@keyframes ul-${n}-wind{0%,66%{opacity:0;transform:translateX(0)}76%{opacity:.8}88%,100%{opacity:0;transform:translateX(4px)}}`,
  },
  {
    name: 'lamp', cat: 'object', zh: '燈泡', en: 'Lamp', ariaZh: '有新點子', ariaEn: 'New idea', dur: 2.8,
    useZh: '小提示、靈感、建議功能', useEn: 'Tips, inspiration, suggested features',
    whyZh: '燈絲先閃一下才穩住點亮，周圍的光線往外張開；亮一陣子再慢慢暗下來。',
    whyEn: 'The filament flickers once before it holds, and the rays open outward; it glows for a while, then dims slowly.',
    body: `<path d="M12 4.5a5 5 0 0 0-3 9c.5.4.8 1 .8 1.6v1.4h4.4v-1.4c0-.6.3-1.2.8-1.6a5 5 0 0 0-3-9ZM9.8 19h4.4M10.6 21h2.8"/><path class="f" d="M10.6 13l1.4-1.6 1.4 1.6"/><g class="r"><path d="M12 1.2v1.2M3.3 9.5h1.4M19.3 9.5h1.4M5.9 3.4l1 1M18.1 3.4l-1 1"/></g>`,
    css: (n, d) => `.ul-${n} .f{${A(n, 'f', d, 'linear')}}
.ul-${n} .r{transform-origin:12px 9.5px;${A(n, 'r', d)}}
@keyframes ul-${n}-f{0%,10%{opacity:.25}18%{opacity:1}21%{opacity:.4}24%,72%{opacity:1}88%,100%{opacity:.25}}
@keyframes ul-${n}-r{0%,12%{opacity:0;transform:scale(.8)}30%,70%{opacity:1;transform:scale(1)}88%,100%{opacity:0;transform:scale(.8)}}`,
  },
  {
    name: 'bot', cat: 'object', zh: '小助理', en: 'Bot', ariaZh: 'AI 助理待命', ariaEn: 'Assistant ready', dur: 3.6,
    useZh: 'AI 助理、聊天機器人、自動回覆', useEn: 'AI assistants, chatbots, auto-replies',
    whyZh: '天線的燈慢慢呼吸，眼睛偶爾連眨兩下，頭再輕輕歪一下；待命但有在聽。',
    whyEn: 'The antenna light breathes, the eyes now and then blink twice and the head tilts slightly. On standby, but listening.',
    body: `<g class="h"><rect x="5" y="8" width="14" height="11" rx="3"/><path d="M12 8V5.6M3.5 12.5v2.5M20.5 12.5v2.5"/><circle class="a" cx="12" cy="4.5" r="1.1" ${DOT}/><path class="e" d="M9.5 12.6v1.6M14.5 12.6v1.6"/></g>`,
    css: (n, d) => `.ul-${n} .e{transform-origin:12px 13.4px;${A(n, 'blink', d, 'linear')}}
.ul-${n} .a{${A(n, 'glow', d / 2)}}
.ul-${n} .h{transform-origin:12px 19px;${A(n, 'tilt', d)}}
@keyframes ul-${n}-blink{0%,38%,44%,51%,100%{transform:scaleY(1)}41%,48%{transform:scaleY(.1)}}
@keyframes ul-${n}-glow{0%,100%{opacity:.35}50%{opacity:1}}
@keyframes ul-${n}-tilt{0%,60%,100%{transform:rotate(0)}70%{transform:rotate(-6deg)}80%{transform:rotate(3deg)}88%{transform:rotate(0)}}`,
  },
]

export const iconCss = (ic) => ic.css(ic.name, ic.dur)

// 給 HTML 用的 SVG 標記：style=true 會內嵌 <style>（獨立檔），false 則需另外載入 ul-icons.css
export function svgMarkup(ic, { style = true, lang = 'zh', decorative = false } = {}) {
  const label = lang === 'en' ? ic.ariaEn : ic.ariaZh
  const a11y = decorative ? 'aria-hidden="true"' : `role="img" aria-label="${label}"`
  const st = style ? `<style>${BASE_CSS.replace(/\n/g, '')}${iconCss(ic).replace(/\n/g, '')}</style>` : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="ul-i ul-${ic.name}" ${a11y}>${st}${ic.body}</svg>`
}

export function fullCss() {
  const head = `/*! Ultra Lab Motion Icons v${VERSION} | MIT License | (c) Ultra Lab | https://ultralab.tw/icons */
/* 變數 Variables: --ul-size (24px) --ul-speed (1, 2 = 兩倍快 twice as fast) --ul-stroke (1.5) --ul-play (running | paused) */`
  return [head, BASE_CSS, ...ICONS.map(iconCss)].join('\n') + '\n'
}
