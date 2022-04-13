import { useRouter } from "next/router";
import nc from 'next-connect';
import cors from "cors";
const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const handler = nc()
  // use connect based middleware
  .use(cors())
  .post(async (req, res) => {
    if (req.method !== 'POST') {
        return res
          .status(405)
          .json({ message: `${req.method} requests are not allowed` })
      }
      console.log('Request Accepted')
      try {
        const { Name, Email, Message } = JSON.parse(req.body); // Coming as a string from the contact page, parsing the json
      console.log('Gathering Notion Information...')
        await notion.pages.create({
          parent: {
            database_id: process.env.NOTION_LEADS_DB,
          },
          properties: {
            Name: {
              title: [
                {
                  text: {
                    content: Name,
                  },
                },
              ],
            },
            Email: {
              email: Email,
            },
            Message: {
              rich_text: [
                {
                  text: {
                    content: Message,
                  },
                },
              ],
            },
          },
        });
        console.log('Info successfully posted in the DB')
        console.log('Mail Sent')
        res.status(201).json({ msg: 'Success' }),
        console.log("Yes");
      } catch (error) {
        res.status(500).json({ msg: 'There was an error' });
        console.log("Nooo");
      }
  });

export default handler;