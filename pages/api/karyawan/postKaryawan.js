import Database from '../../../libs/Config';

export default async function handler(req, res) {
    //console.log(req.method);
    if (req.method !== 'POST') return res.status(405).end();
    //console.log(req.body);
    const { nik, nama, tanggal_lahir, jenis_kelamin, alamat, no_handphone } = req.body;

    const create = await Database('karyawan').insert({
        nik,
        nama,
        tanggal_lahir,
        jenis_kelamin,
        alamat,
        no_handphone,
    });

    const createdData = await Database('karyawan').where('id', create).first();

    res.status(200);
    res.json({
        message: "Posted data to database successfully",
        data: createdData
    });
};
