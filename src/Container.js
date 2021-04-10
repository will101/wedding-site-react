import { Link, useHistory } from "react-router-dom";

export default function Container({ bgImage, bgClasses, children }) {
    const currentPath = useHistory()?.location?.pathname;
    return (
        <div className={`${bgImage ? 'bg-' + bgImage : 'bg-sky'} bg-cover ${bgClasses ? bgClasses : ''}`}>
            <nav className="bg-transparent">
                <div className="max-w-7xl px-2 sm:px-6 lg:px-8  border-b-2 border-black mx-auto ml-64">
                    <div className="relative flex items-center justify-between h-16 right-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* <!--Mobile menu button --> */}
                            <button type="button" className="inline-flex items-center p-2 rounded-md text-gray-400 0 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start font-medium">
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4 px-2 py-2 font-roboto-condensed text-xl">
                                    <Link to="/home" className={`hover:underline ${isCurrent(currentPath, 'home')}`} >Home</Link>
                                    <Link to='/gallery' className={`hover:underline ${isCurrent(currentPath, 'gallery')}`}>Gallery</Link>
                                    <Link to='/video' className={`hover:underline ${isCurrent(currentPath, 'video')}`}>Video</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='h-screen'>
                <div className='container mx-auto sm:px-4 xl:px-16'>
                    {children}
                </div>
            </div>
        </div >
    )
}

function isCurrent(currentPath, linkName) {
    const formatted = currentPath.replace("/", '');
    return formatted === linkName ? 'active' : ''
}