export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '62eed385abfa6d040dfc5548',
                  title: 'Sanity Studio',
                  name: 'bmk-portfolio-studio',
                  apiId: '52997cca-5733-4ae5-9a5d-192a614206cd'
                },
                {
                  buildHookId: '62eed385b465cf030b08685d',
                  title: 'Portfolio Website',
                  name: 'bmk-portfolio-web',
                  apiId: '2ebd929d-0c42-4481-a608-70a1af1f385e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/krawc/bmk-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://bmk-portfolio-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
