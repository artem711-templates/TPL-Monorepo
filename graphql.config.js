module.exports = {
  projects: {
    server: {
      schema: ['./apps/server/src/app/schema.graphql'],
      documents: ['**/*.{graphql,js,ts,jsx,tsx}', './graphql/*.graphql'],
      extensions: {
        endpoints: {
          default: {
            url: 'http://localhost:3000/graphql',
          },
        },
      },
    },
  },
}
