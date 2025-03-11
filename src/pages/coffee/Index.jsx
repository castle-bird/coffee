import { useMemo } from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/loading";
import ProductsList from "../../components/producstList";

function Coffee() {
    const products = useSelector((state) => state.products);

    const coffeeProducts = useMemo(
        () => products.filter((product) => product.category === "커피"),
        [products]
    );
    return (
        <>
            {products.length === 0 && <Loading />}
            {products.length !== 0 && <ProductsList products={coffeeProducts} />}
        </>
    );
}

export default Coffee;
