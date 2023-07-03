

const Parallex = ({bgimg, head, subHead, bgColor}) => {
    return (
        <div className="advertize bg-fixed my-24 py-16" style={{backgroundImage: `url("${bgimg}")`}}>
            <div className={`py-8 px-8 text-center font-semibold mx-10 md:mx-24 bg-opacity-70 ${bgColor}`}>
                <h3 className='text-3xl font-semibold text-[#79ff4d] py-4'>{head}</h3>
                <p className='text-white'>{subHead}</p>
            </div>
        </div>
    );
};

export default Parallex;