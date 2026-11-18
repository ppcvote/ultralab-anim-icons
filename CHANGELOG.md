# Changelog

## v0.3.1 (2026-11-18)

- 改名 Rename: `ripple` → `wave`（中文名改「波紋」）。用到 `ul-ripple` class 或 `icons/ripple.svg` 的請改成 `ul-wave`、`icons/wave.svg`；造型和動畫沒變。Breaking: `ripple` is renamed to `wave` (class `ul-wave`, file `icons/wave.svg`); shape and motion are unchanged.
- 說明文字：`listen`、`notify` 的英文說明改用 spreads。Wording tweak in the `listen` and `notify` descriptions.

## v0.2.0 (2026-11-18)

- 補到 36 個圖示，6 類各 6 個。Set expanded to 36 icons, six per family.
- 新增 New: `listen` `wifi-search` `radar` `notify` `morph` `facets` `prism` `ripple` `sync` `infinity` `gear` `compass` `upload` `download` `percent-ring` `retry` `translate` `select` `search` `summarize` `key` `mail-send` `lamp` `bot`
- 修正 Fix: `hourglass` 在減少動態效果時的靜態姿勢位置。Still pose of `hourglass` under reduced motion.
- 展示頁改成每類一列。Showcase now lays out one row per family.
- jsDelivr CDN 用法寫進 README。README documents jsDelivr CDN usage.

## v0.1.0 (2026-11-17)

- 第一批 12 個圖示：`scan` `broadcast` `spark` `layers` `loading-orbit` `connecting` `steps` `verify` `stream` `prompt` `flask` `hourglass`。First 12 icons.
- 獨立 SVG、`ul-icons.css`、`icons.json`、本機展示頁、`--ul-size` `--ul-speed` `--ul-stroke` `--ul-play` 變數、prefers-reduced-motion 支援。
