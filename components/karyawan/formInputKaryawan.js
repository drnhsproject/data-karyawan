import FormControl from '../../components/form/formControl';
import Input from '../../components/form/input';
import Button from '../../components/form/button';


const FormInputKaryawan = ({ formik })=> {
    return(
        <div className="w-full max-w-xs">
            <form className="px-8 pt-6 pb-8 mb-4 mr-2 bg-white rounded shadow-md" 
                onSubmit={formik.handleSubmit}>
                <FormControl 
                    label="NIK" 
                    id="nik" 
                    name="nik"
                >
                    <Input 
                        placeholder="Nomor induk kependudukan" 
                        name="nik"
                        type="number"
                        onChange={formik.handleChange}
                        value={formik.values.nik}
                    />

                    {formik.errors && (
                        <label className='text-red-600'>
                            {formik.errors['nik']}
                        </label>
                    )}
                </FormControl>
                <FormControl 
                    label="Nama" 
                    id="nama" 
                    name="nama"
                >
                    <Input 
                        placeholder="Nama lengkap" 
                        name="nama"
                        onChange={formik.handleChange}
                        value={formik.values.nama}
                    />

                    {formik.errors && (
                        <label className='text-red-600'>
                            {formik.errors['nama']}
                        </label>
                    )}
                </FormControl>
                <FormControl 
                    label="Tanggal lahir" 
                    id="tanggal_lahir" 
                    name="tanggal_lahir"
                >
                    <Input 
                        placeholder= "ex. 07 April 1993"
                        name="tanggal_lahir"          
                        onChange={formik.handleChange}
                        value={formik.values.tanggal_lahir}
                    />

                    {formik.errors && (
                        <label className='text-red-600'>
                            {formik.errors['tanggal_lahir']}
                        </label>
                    )}
                </FormControl>
                <FormControl 
                    label="Jenis kelamin" 
                    id="jenis_kelamin" 
                    name="jenis_kelamin"
                >
                    <Input 
                        placeholder="Jenis kelamin" 
                        name="jenis_kelamin"         
                        onChange={formik.handleChange}
                        value={formik.values.jenis_kelamin}
                    />

                    {formik.errors && (
                        <label className='text-red-600'>
                            {formik.errors['jenis_kelamin']}
                        </label>
                    )}
                </FormControl>
                <FormControl 
                    label="Alamat" 
                    id="alamat" 
                    name="alamat"
                >
                    <Input 
                        placeholder="Alamat" 
                        name="alamat"            
                        onChange={formik.handleChange}
                        value={formik.values.alamat}
                    />

                    {formik.errors && (
                        <label className='text-red-600'>
                            {formik.errors['alamat']}
                        </label>
                    )}
                </FormControl>
                <FormControl 
                    label="No. Handphone" 
                    id="no_handphone" 
                    name="no_handphone"
                >
                    <Input 
                        placeholder="No. Handphone" 
                        name="no_handphone" 
                        type="number"                 
                        onChange={formik.handleChange}
                        value={formik.values.no_handphone}
                    />

                    {formik.errors && (
                        <label className='text-red-600'>
                            {formik.errors['no_handphone']}
                        </label>
                    )}
                </FormControl>

                <Button 
                    type="submit"
                    disabled={!(formik.isValid && formik.dirty)}>
                    {formik.values.id ? 'Update' : 'Submit'}
                </Button>                
            </form>
           {/* { <pre>
                {JSON.stringify(form, null, 2)}
            </pre>} */}
        </div>
    )
};

FormInputKaryawan.propTypes = {};

export default FormInputKaryawan;
