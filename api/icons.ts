import { NowRequest, NowResponse } from '@now/node'
const contentful = require('contentful')

export default (request: NowRequest, response: NowResponse) => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });
  
  let items = []

  client.getEntries({ content_type: 'landingIcon', order: 'fields.order' })
    .then(entries => {
      items = entries.items.map(icon => {
        const { sys, fields } = icon
        const { title, file, link: href } = fields
        const id = sys.id
        const iconHref = file.fields.file.url

        return {
          id,
          title,
          href,
          iconHref
        }
      })

      response.status(200).json(items)
    })
    .catch(console.error)
}