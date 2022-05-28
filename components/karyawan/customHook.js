import { useEffect, useState } from 'react'
import axios from '../../libs/axios'

const useKaryawans = (formik) => {
    const [karyawans, setKaryawans] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                const { data } = await axios.get('http://localhost:3000/api/karyawan/getKaryawan');
    
                setKaryawans(data.data)    
            } catch (error) {
                setError(error, message)
            } finally{
                setLoading(false)
            }        
        })()
    }, [])

    const handleGetDataKaryawans = async (id) => {
        try {
            const { data } = await axios.get(`http://localhost:3000/api/karyawan/get/${[id]}`); 

            const karyawans = data.data;

            formik.setFieldValue('nik', karyawans.nik)
            formik.setFieldValue('nama', karyawans.nama,)
            formik.setFieldValue('tanggal_lahir', karyawans.tanggal_lahir)
            formik.setFieldValue('jenis_kelamin', karyawans.jenis_kelamin)
            formik.setFieldValue('alamat', karyawans.alamat)
            formik.setFieldValue('no_handphone', karyawans.no_handphone)
            formik.setFieldValue('id', karyawans.id)

        } catch (error) {
            console.log(error)
        }
    }

    const handleAddDataKaryawans = async ( values ) => {
        const { data } = await axios.post(
            'http://localhost:3000/api/karyawan/postKaryawan',
            values,
        )

        const karyawans = data.data;

        setKaryawans(prev => [...prev, karyawans]) 
    }

    const handleUpdateDataKaryawans = async ( values ) => {
        const { data } = await axios.put(
            `http://localhost:3000/api/karyawan/update/${[ values.id ]}`,
            values,
        )

        const karyawans = data.data;

        const updatedKaryawans= karyawans.map(item => item.id === karyawans.id ? karyawans : item)

        setKaryawans(updatedKaryawans)
    }

    const handleDeleteDataKaryawans = async (id) => {

        const isOK = confirm("Are you sure want to delete this data ?");

        if (isOK) {
            try {
                await axios.delete(`http://localhost:3000/api/karyawan/delete/${[id]}`);

                const filteredKaryawans = karyawans.filter(item => item.id !== id)

                setKaryawans(filteredKaryawans)
            } catch (error) {
                console.log(error);
            }
        }
    }

    return {
        karyawans,
        pageLoading: loading,
        pageError: error,
        handleGetDataKaryawans,
        handleAddDataKaryawans,
        handleUpdateDataKaryawans,
        handleDeleteDataKaryawans,
    }
}

export default useKaryawans;