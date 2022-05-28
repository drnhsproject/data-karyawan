import PropTypes from 'prop-types';
import Button from '../../components/form/button';

const TabelKaryawan = ({ karyawans = [], handleGetDataKaryawans, handleDeleteDataKaryawans }) => {
    return <div className="flex items-center justify-center">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            No.
                        </th>
                        <th scope="col" className="px-6 py-3">
                            NIK
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Nama
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tanggal Lahir
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Jenis Kelamin
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Alamat
                        </th>
                        <th scope="col" className="px-6 py-3">
                            No. Handphone
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Hapus</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {karyawans.map((karyawan, index) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={karyawan.id}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                {index + 1}
                            </th>
                            <td className="px-6 py-4">
                                {karyawan.nik}
                            </td>
                            <td className="px-6 py-4">
                                {karyawan.nama}
                            </td>
                            <td className="px-6 py-4">
                                {karyawan.tanggal_lahir}
                            </td>
                            <td className="px-6 py-4">
                                {karyawan.jenis_kelamin}
                            </td>
                            <td className="px-6 py-4">
                                {karyawan.alamat}
                            </td>
                            <td className="px-6 py-4">
                                {karyawan.no_handphone}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <Button
                                    className="mr-2"
                                    variant="success"
                                    onClick={() => handleGetDataKaryawans(karyawan.id)}>
                                    Edit
                                </Button>
                            </td>
                            <td className="px-6 py-4 text-right">
                                <Button
                                    variant="danger"
                                    onClick={() => handleDeleteDataKaryawans(karyawan.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
};

TabelKaryawan.propTypes = {
    karyawans: PropTypes.array.isRequired,
};

export default TabelKaryawan;