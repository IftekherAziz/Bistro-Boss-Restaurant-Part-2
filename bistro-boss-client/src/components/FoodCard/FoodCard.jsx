

const FoodCard = ({item}) => {
    const {name, price, image, recipe} = item;
    return (
      <div>
        <div className="card w-96 bg-base-100 shadow-md mb-10">
          <figure className="">
            <img src="" alt="Salads" className="w-full max-h-[280px]" />
          </figure>
          <div className="card-body items-center text-center bg-zinc-50">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <button className="btn  text-yellow-600  btn-outline border-0 border-b-2 mt-4">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;