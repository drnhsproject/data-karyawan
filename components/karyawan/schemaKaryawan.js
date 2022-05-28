import * as Yup from 'yup'

const schemaKaryawan = Yup.object().shape({
    nik: Yup.number().required('Required').min(16,'masukan 16 angka'),
    nama: Yup.string().required('Required'),
    tanggal_lahir: Yup.string().required('Required'),
    jenis_kelamin: Yup.string().required('Required'),
    alamat: Yup.string().required('Required'),
    no_handphone: Yup.number().required('Required').min(13, 'Masukan No. HP Yang Valid')
})

export default schemaKaryawan;