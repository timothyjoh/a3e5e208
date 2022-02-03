// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import { withSentry } from "@sentry/nextjs"

type Data = {
  name: string
}

export const handler = (req: NextApiRequest, res: NextApiResponse<Data>): void => {
  res.status(200).json({ name: "John Doe" })
}

export default withSentry(handler)
