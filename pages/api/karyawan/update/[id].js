import Database from '../../../../libs/Config';

export default async function handler(req, res) {
    //console.log(req.query);
    if(req.method !== 'PUT') return res.status(405).end();

    const { id } = req.query;
    const { nik, nama, tanggal_lahir, jenis_kelamin, alamat, no_handphone } = req.body;

    const update = await Database('karyawan')
                                        .where({ id })
                                        .update({
                                                nik,
                                                nama,
                                                tanggal_lahir,
                                                jenis_kelamin,
                                                alamat,
                                                no_handphone,
                                        });
    
    const updatedData = await Database('karyawan').where({ id }).first();

    res.status(200);
    res.json({
        message: "Data updated",
        data:updatedData,
    });
};