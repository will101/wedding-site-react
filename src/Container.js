import { Link, useHistory } from "react-router-dom";

export default function Container({ bgImage, bgClasses, children }) {
    const currentPath = useHistory()?.location?.pathname;
    return (
        <div className={`${bgImage ? 'bg-' + bgImage : 'bg-sky'} bg-cover ${bgClasses ? bgClasses : ''} h-screen`}>
            <nav className="bg-transparent">
                <div className="max-w-7xl  border-b-2 border-black mx-auto">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start font-medium">
                            <div className="sm:block sm:ml-6">
                                <div className="flex space-x-4 py-2 font-roboto-condensed text-xl">
                                    <Link to="/home" className={`hover:underline ${isCurrent(currentPath, 'home')}`} >Home</Link>
                                    <Link to='/gallery' className={`hover:underline ${isCurrent(currentPath, 'gallery')}`}>Gallery</Link>
                                    <Link to='/video' className={`hover:underline ${isCurrent(currentPath, 'video')}`}>Video</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='container mx-auto sm:px-4 xl:px-16'>
                {children}
            </div>
        </div >
    )
}

function isCurrent(currentPath, linkName) {
    const formatted = currentPath.replace("/", '');
    return formatted === linkName ? 'active' : ''
}