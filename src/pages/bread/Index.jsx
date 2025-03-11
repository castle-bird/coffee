import { useMemo } from "react";
import { useSelector } from "react-redux";
import Loading from "../../components/loading";
import ProductsList from "../../components/productsList";

function Coffee() {
    const products = useSelector((state) => state.products);

    const breadProducts = useMemo(
        () => products.filter((product) => product.category === "빵"),
        [products]
    );

    return (
        <>
            {products.length === 0 && <Loading />}
            {products.length !== 0 && <ProductsList products={breadProducts} />}
        </>
    );
}

export default Coffee;
