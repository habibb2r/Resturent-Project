import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import featuredimg from '../../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div className="featured bg-fixed text-white my-20">
            <div className="bg-black bg-opacity-80 pt-8">
            <SectionTitle 
            subHead='Check it out'
            head='Featured Items'></SectionTitle>
            <div className=" md:flex justify-center align-middle items-center pb-20 pt-12 px-36">
                <div>
                    <img className="rounded-xl" src={featuredimg} alt="" />
                </div>
                <div className="md:ml-10 space-y-2">
                    <p>Aug 20, 2019</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat eum, voluptates, atque dignissimos tempora assumenda quos voluptatum quisquam at cum delectus dolorem quas a quia. Est, dolor dolorum. Maiores nisi voluptatem vel cum explicabo rerum molestias, perspiciatis laboriosam accusamus rem at eaque incidunt in beatae error dolor! Labore, quasi dicta?</p>
                    <button className="btn btn-outline btn-info border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;