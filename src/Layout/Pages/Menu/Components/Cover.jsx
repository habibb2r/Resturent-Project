

const Cover = ({bgImg, head, subHead}) => {
    return (
        <div>
    <div className="hero h-[400px] md:h-[600px] py-32 md:py-28 mb-14" style={{backgroundImage : `url(${bgImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">{head}</h1>
                <p className="mb-5">{subHead}</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Cover;