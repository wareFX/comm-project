// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Customer } from './types/Customer';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Customer>,
) {
  const random = (Math.random() + 1).toString(36).substring(7);

  /** @TODO remove fake timeout */
  setTimeout(function () {
    res.status(200).json({
      name: {
        first: 'John',
        last: `Doe ${random}`,
      },
      email: 'johndoe@gmail.com',
    });
  }, 2000);
}
