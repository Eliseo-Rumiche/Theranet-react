import '../assets/loader.css'
function Loader() {
    return (

        <div>
            <svg className='loader' width="200" height="200" viewBox="0 0 100 100">
                <polyline className="line-cornered stroke-still" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
                <polyline className="line-cornered stroke-still" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
                <polyline className="line-cornered stroke-animation" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
                <polyline className="line-cornered stroke-animation" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
            </svg>
        </div>
    );
}

export default Loader;