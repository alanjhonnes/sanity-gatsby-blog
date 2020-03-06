export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e6260dac75aa1b551da406c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-igctv86r',
                  apiId: '64a02617-fc1a-47b9-a53f-ad6e77dad777'
                },
                {
                  buildHookId: '5e6260da912dc6a47a99f8df',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9iisq8wh',
                  apiId: '281e8ee7-ab5b-46f6-926d-136130619445'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alanjhonnes/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9iisq8wh.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
