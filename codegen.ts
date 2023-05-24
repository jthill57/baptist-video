import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: `src/graphql/schema.graphql`,
  generates: {
    'src/generated/graphql.ts': {
      config: {
        contextType: `@/graphql/server#Context`,
      },
      plugins: [`typescript`, `typescript-resolvers`],
    },
  },
  hooks: {
    afterAllFileWrite: [`yarn codegen:zeus`],
  },
};

export default config;
