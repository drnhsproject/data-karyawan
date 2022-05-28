import Database from '../../../../libs/Config';

export default async function handler(req, res){
    if(req.method !== 'DELETE') return res.status(405).end();

    const { id } = req.query;

    const deleteData = await Database('karyawan').where({ id }).del();

    res.status(200);
    res.json({
        message: "Data deleted successfully",
    });
};