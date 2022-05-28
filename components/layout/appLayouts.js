import Navigation from '../../components/layout/navigationBar';

const AppLayout = ({ header, children }) => {
  
    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation/>
            {/* Page Content */}
            <main>{children}</main>
        </div>
    )
}

export default AppLayout
