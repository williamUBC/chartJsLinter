/**
 * @author Toru Nagashima <https://github.com/mysticatea>
 * See LICENSE file in root directory for full license.
 */
'use strict'

module.exports = {
  base: '/',
  title: 'chartjs-runtime-vis-linter',
  description: 'chartjs runtime data visualization linter',
  serviceWorker: true,
  evergreen: true,
  head: [],

  themeConfig: {
    repo: 'youssefsharief/chartjs-runtime-vis-linter',
    docsRepo: 'youssefsharief/chartjs-runtime-vis-linter',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    lastUpdated: true,
    serviceWorker: {
      updatePopup: true
    },

    nav: [
      { text: 'User Guide', link: '/user-guide/' },
      { text: 'Developer Guide', link: '/developer-guide/' },
      { text: 'Rules', link: '/rules/' },
    ],

    sidebar: 'auto'

  }
}
