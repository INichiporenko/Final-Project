
import { createSlice } from "@reduxjs/toolkit";

const read = () => JSON.parse(localStorage.getItem('cart'));
const write = (state) => localStorage.setItem('cart', JSON.stringify(state.list));

const initialState = { list: read() ?? []}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
        reducers: {
        remove (state, {payload}){
            state.list = state.list.filter(({id}) => id !== payload)
            write(state); 
        },
        add(state, {payload}){
            const target = state.list.find (({id}) => id === payload);
            if(target){
                target.count++
            }else{
                state.list.push({id: payload, count: 1})
            }
            write(state);
        },
        incr(state, {payload}){
            state.list.find(({id}) => id === payload).count++
            write(state); 
        },
        decr(state, {payload}){
            const target = state.list.find(({id}) => id === payload);

            if(target.count === 1){
                state.list = state.list.filter(item => item !== target);
            }else{
                target.count--;
            }
            write(state); 
        },
        clearCart(state){
            state.list = [];
            write(state);
        },
}
})


export const {remove, add, incr, decr, clearCart} = cartSlice.actions
export default cartSlice.reducer;