// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

interface Request {
    category : string; 
}

// type Data = {
//     name: string
// }

type RequestForm = Pick<Request, "category">;

// export default function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
// ) {
//     res.status(200).json({ name: 'John Doe' })
// }


// /api/tb_content/dashboard2?category=BN&lang=ko

export default async function handler(req : NextApiRequest, res : NextApiResponse) {

    const { method, query: { category },} = req;

    await axios(process.env.NEXT_PUBLIC_WEB_URL + '/api/tb_content/dashboard2?category=' + category +'&lang=ko')
    .then((response) => {
        //console.log(response);

        return res.json({
            test : 'test'
        });
    })

}
