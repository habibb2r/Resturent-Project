

const SectionTitle = ({head, subHead}) => {
    return (
        <div className="md:w-3/12 mx-auto text-center my-4">
            <p className="text-yellow-500 font-semibold mb-2">--- {subHead} ---</p>
            <h3 className="text-4xl uppercase border-y-4 py-4">{head}</h3>
        </div>
    );
};

export default SectionTitle;