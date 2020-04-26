import { NowRequest, NowResponse } from "@now/node";
const contentful = require("contentful");

export default async (request: NowRequest, response: NowResponse) => {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    const entries = await client.getEntries({
      content_type: "landingIcon",
      order: "fields.order",
    });

    const items = entries.items.map((icon) => {
      const { sys, fields } = icon;
      const { title, file, link: href } = fields;
      const id = sys.id;
      const iconHref = file.fields.file.url;

      return {
        id,
        title,
        href,
        iconHref,
      };
    });

    response.status(200).json(items);
  } catch (err) {
    console.error(err);
    response.status(500);
  }
};
