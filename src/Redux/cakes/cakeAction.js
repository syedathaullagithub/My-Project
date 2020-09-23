import {BUY_CAKES} from "./cakeTypes"
import {STORE_CAKES} from "./cakeTypes"
import {EMPTY_STORE} from "./cakeTypes"


export const buyCake=()=>{
return{
    type:BUY_CAKES
}
}

export const storeCake=()=>{
    return{
        type:STORE_CAKES
    }
    }

    export const emptyStore=()=>{
        return{
            type:EMPTY_STORE
        }
        }