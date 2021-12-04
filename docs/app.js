window.$docsify = {
    name: 'Home',
    repo: '',
    auto2top: true,
    // サイドバーを表示。別途_sidebar.mdを書く必要あり。gitbookのSUMMARY.mdと同じ要領。
    loadSidebar: true,
    search: 'auto', // default
    alias: {
        '/.*/_sidebar.md': '/_sidebar.md',
    },
    subMaxLevel: 3,
    // docsify-copy-code (defaults)
    copyCode: {
        buttonText: 'Copy',
        errorText: 'Error',
        successText: 'Copied!',
    },
    tabs: {
        persist: true, // default
        sync: true, // default
        theme: 'classic', // default
        tabComments: true, // default
        tabHeadings: true, // default
    },
}
