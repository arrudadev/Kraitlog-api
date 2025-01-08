import { handlerPath } from '@/shared/utils/handlerPath'

export const HelloWorld = {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: 'hello',
      },
    },
  ],
}
