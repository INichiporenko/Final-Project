import { useSelector } from "react-redux";


export default function useCart(){

    const {cart, products} = useSelector(state => state);

    return cart.list.map((item) => ({
        ...item,
        ...products.list.find(({id}) => id === item.id)
    }))
}
