import Link from 'next/link'

export default function Navbar() {
  return (
      <div className="bg-green-500">
          <div className="container">
              <div className="flex items-center justify-between">
                  <div>
                    <Link href="/">
                        <a className="text-black uppercase font-bold tracking-tighter">
                            DKKS
                        </a>
                    </Link>                      
                  </div>
                  <div className="flex items-center">
                    <Link href='/'>
                        <a className="text-black font-bold hover:text-white py-5 px-3">
                            Home
                        </a>
                    </Link>
                    <Link href='/DataKaryawan'>
                        <a className="text-black font-bold hover:text-white py-5 px-3">
                            Data Karyawan
                        </a>
                    </Link>                     
                  </div>
              </div>
          </div>
      </div>
  )
}
