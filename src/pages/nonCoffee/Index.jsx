import { useMemo } from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/loading";
import ProductsList from "../../components/producstList";

function NonCoffee() {
    const products = useSelector((state) => state.products);

    const nonCoffeeProducts = useMemo(
        () => products.filter((product) => product.category === "논커피"),
        [products]
    );

    return (
        <>
            {products.length === 0 && <Loading />}
            {products.length !== 0 && <ProductsList products={nonCoffeeProducts} />}
        </>
    );
}

export default NonCoffee;
