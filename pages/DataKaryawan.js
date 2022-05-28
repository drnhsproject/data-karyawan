import Layout from '../components/layout/appLayouts';
import { useFormik } from 'formik'
import FormInputKaryawan from '../components/karyawan/formInputKaryawan';
import TabelKaryawan from '../components/karyawan/tableKaryawan';
import useKaryawan from '../components/karyawan/customHook';
import schemaKaryawan from '../components/karyawan/schemaKaryawan';

export default function DataKaryawan() {
  const formik = useFormik({
    initialValues: {
      nik: '',
      nama: '',
      tanggal_lahir: '',
      jenis_kelamin: '',
      alamat: '',
      no_handphone: ''
    },
    validationSchema: schemaKaryawan,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (values.id) {
          handleUpdateDataKaryawans(values)
        } else {
          handleAddDataKaryawans(values)
        }

        resetForm()
      } catch (error) {
        console.log(error)
      }
    }
  });

  const {
    karyawans,
    pageLoading,
    pageError,
    handleGetDataKaryawans,
    handleAddDataKaryawans,
    handleUpdateDataKaryawans,
    handleDeleteDataKaryawans,
  } = useKaryawan(formik)

  if (pageError) {
    return pageError
  }

  return (
    <div>
      <Layout title="Data Karyawan">
        <div className="flex items-center justify-center py-5">
          <h1 className="font-bold text-5xl text-black-600">Data Karyawan</h1>
        </div>
        <div className="py-12">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
              <div className="p-6 bg-white border-b border-gray-200">
                <FormInputKaryawan
                  handleAddDataKaryawans={handleAddDataKaryawans}
                  formik={formik}
                />
                <TabelKaryawan
                  karyawans={karyawans}
                  handleGetDataKaryawans={handleGetDataKaryawans}
                  handleDeleteDataKaryawans={handleDeleteDataKaryawans}
                />
              </div>
            </div>
          </div>

        </div>
      </Layout>
    </div>
  );
}
