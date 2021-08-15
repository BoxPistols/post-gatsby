/**
 * example Code https://shrtm.nu/WuPl
 */

/* ===== px to rem auto-calc ===== */
// font-size
export const fz = (px) => {
    /* if html element has font-size get root fontSize
     * => const fontSize = getComputedStyle( document.documentElement).fontSize
     */
    const fontSize = getComputedStyle(document.querySelector('body')).fontSize
    // calc for px to rem
    const fzCalc = px / parseFloat(fontSize)
    // ブラウザ依存による小数点の表示桁数
    const fzNum = parseFloat(fzCalc.toFixed(2))
    return `font-size:` + fzNum + 'rem'
}
// global size
export const size = (px) => {
    const fontSize = getComputedStyle(document.querySelector('body')).fontSize
    // calc for px to rem
    const sizeCalc = px / parseFloat(fontSize)
    const sizeNum = parseFloat(sizeCalc.toFixed(2))
    return sizeNum + 'rem'
}

/* ===== Flex-Box ====== */
// Mixin
export const fx_center = () => {
    return `
    display: flex;
    align-items: center;
    justify-content: center;
    `
}

/* ===== text ====== */
// Mixin
export const tx_center = () => {
    return `
    text-align: center;
    `
}

/* ===== Grid ====== */
export const grid = (col_start, col_end, row_start, row_end) => {
    return `
    // TODO: if IE = for IE AutoPrefix
    grid-column: ${col_start} / ${col_end}; // Horizontal ↑↓
    grid-row: ${row_start} / ${row_end}; // Vertical ←→
`
}

// UI Component
export const block = {
    db: `display: block;`,
    df: `display: flex;`,
    dg: `display: grid;`,
}

/* ===== Color ===== */
//  global color
export const c = {
    main: 'tomato',
    accent: 'teal',
    dark: 'demigray',

    gray: {
        __50: `#fafafa`,
        __100: `#f5f5f5`,
        __200: `#eeeeee`,
        __300: `#e0e0e0`,
        __400: `#bdbdbd`,
        __500: `#9e9e9e`,
        __600: `#757575`,
        __700: `#616161`,
        __800: `#424242`,
        __900: `#212121`,
    },
}
// color
export const color = (c) => {
    return `
    color: ${c};
`
}
// bg-color
export const bgc = (bgColor) => {
    return `
    background-color: ${bgColor};
`
}

/* ===== Break Point===== */

export const mq = (x) => {
    return `@media only screen and (max-width: 768px) {
    ${x}
    }`
}
