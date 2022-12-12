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

    const id = req.query.id;

    console.log('너냐 ?');


    await axios('https://zzzzzhahatestserver.beeblock.co.kr/api/tb_content/dashboard2?category=' + id +'&lang=ko')
    .then((res) => {
        console.log('너냐 ? : ', res.status);

        let result = res.data.json();

        return { data : res.data};
    })

}