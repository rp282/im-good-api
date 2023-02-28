// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {
    InteractionType,
    InteractionResponseType,
    InteractionResponseFlags,
    MessageComponentTypes,
    ButtonStyleTypes,
  } from 'discord-interactions';

export default function handler(req, res) {
    console.log({req})
    
    if (type === InteractionType.PING) {
        return res.send({ type: InteractionResponseType.PONG });
    }
    
    const { type, id, data } = JSON.parse(req.body);
    if (type === InteractionType.APPLICATION_COMMAND) {
        const { name } = data;
    
        // "test" guild command
        if (name === 'test') {
          // Send a message into the channel where command was triggered from
          return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              // Fetches a random emoji to send from a helper function
              content: `I'm good.`,
            },
          });
        }
      }
    res.status(200).json({ name: 'John Doe' })
  }
  