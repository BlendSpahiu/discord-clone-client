module.exports = {
  schema: [
    {
      'http://localhost:8060/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': 'fNjQmTqVsXv2x4z7C9EbHeKgPkRnTr',
        },
      },
    },
  ],
  documents: 'src/renderer/**/*.graphql',
  overwrite: true,
  generates: {
    './src/renderer/graphql/gen/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      hooks: {
        afterOneFileWrite: 'prettier --write',
      },
    },
    './src/renderer/graphql/gen/graphql.schema.json': {
      plugins: ['introspection'],
      config: { minify: true },
    },
  },
};
