import { NowRequest, NowResponse } from '@now/node'
const contentful = require('contentful')

export default (request: NowRequest, response: NowResponse) => {
  const CONTENT_TYPES = { icon: 'hf1md022iqu8' }

  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });
  
  let items = []

  client.getEntries({ content_type: CONTENT_TYPES.icon, order: 'fields.order' })
    .then((response) => {
      items = response.items
    })
    .catch(console.error)
  
  response.status(200).json(items)
}