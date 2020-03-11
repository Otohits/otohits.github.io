module.exports = {
    title: 'Otohits blog',
    description: 'News and articles about Otohits.net website',
    theme: '@vuepress/theme-blog',
    themeConfig: {
        dateFormat: 'YYYY-MM-DD',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Tags',
                link: '/tag/',
            },
        ],
        globalPagination: {
            prevText: 'Next', // Text for previous links.
            nextText: 'Previous', // Text for next links.
            lengthPerPage: '10', // Maximum number of posts per page.
            layout: 'Pagination', // Layout for pagination page
        },
        summaryLength: 300,
        sitemap: {
            hostname: 'https://blog.otohits.net'
        },
        feed: {
            canonical_base: 'https://blog.otohits.net',
            rss: true,
            atom: true,
            json: true,
        },
        footer: {
            contact: [{
                type: 'web',
                link: 'https://www.otohits.net',
            }, ],
        },
    }
};