import Database from '../../../libs/Config';

export default async function handler(req, res) {
    if(req.method !== 'GET') return res.status(405).end();

    const getData = await Database('karyawan');

    res.status(200);
    res.json({
        message: "Get data successfully",
        data: getData,
    });
};
