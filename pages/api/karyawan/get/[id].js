import Database from '../../../../libs/Config';

export default async function handler(req, res){
    if(req.method !== 'GET') return res.status(405).end();

    const { id } = req.query;

    const getDataById = await Database('karyawan').where({ id, id});

    res.status(200);
    res.json({
        message: "Data selected by id",
        data: getDataById
    });
};