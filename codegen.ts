import type { CodegenConfig } from '@graphql-codegen/cli';

import process from 'process';

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.HYGRAPH,
  documents: './queries/*.ts',
  generates: {
    './gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
