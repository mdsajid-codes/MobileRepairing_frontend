import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingSupport from './FloatingSupport';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Navbar />
            <main className="flex-grow bg-gray-50">
                <Outlet />
            </main>
            <FloatingSupport />
            <Footer />
        </div>
    );
};

export default Layout;
