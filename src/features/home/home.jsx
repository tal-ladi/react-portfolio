import './home.css';

export default function Home() {
    return (
        <div className="grid justify-content-center m-0">
            <div className="col-12 md:col-6 flex flex-column justify-content-center align-items-center">
                <div className='flex font-bold lg:text-4xl md:text-3xl text-base'>Building Dreams to Digital
                    Experiences
                </div>
                <div className='flex mt-2 mr-2 text-sm lg:text-base text-center'>
                    Passionate Web Developer <br className="line-break"/>
                    Transforming ideas into seamless and stunning web solutions
                </div>
            </div>
            <div className='col-12 md:col-6 flex justify-content-center align-items-center'>
                <img className='border-round-3xl pop' src="./assests/images/me.jpg"/>
            </div>
        </div>
    )
}