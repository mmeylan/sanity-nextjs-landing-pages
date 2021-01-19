export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60072c28e8e97353e0c875d6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-uogc5fd4',
                  apiId: '73536a17-e098-424a-be88-3ffa9984d804'
                },
                {
                  buildHookId: '60072c282d238c503995cdf0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hp1aqtij',
                  apiId: '438457ff-3ec8-44e0-8a97-fa8dfd5a6f4f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mmeylan/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hp1aqtij.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
