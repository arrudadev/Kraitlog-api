import type { AWS } from '@serverless/typescript'

import * as lambdas from '@/application/lambdas'

const config: AWS = {
  service: 'kraitlog-api',
  frameworkVersion: '4',
  provider: {
    name: 'aws',
    runtime: 'nodejs20.x',
  },
  package: {
    individually: true,
    excludeDevDependencies: true,
  },
  plugins: ['serverless-offline'],
  functions: lambdas,
  custom: {
    'serverless-offline': {
      httpPort: 3333,
      lambdaPort: 4000,
      host: 'localhost',
    },
  },
}

export = config
