import { NowRequest, NowResponse } from '@now/node'
const contentful = require('contentful')

console.log(process.env.CONTENTFUL_ACCESS_TOKEN)

export default (request: NowRequest, response: NowResponse) => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });
  
  let items = []
  client.getAssets()
    .then((response) => {
      items = response.items
    })
    .catch(console.error)
  
  response.status(200).json(items)
}