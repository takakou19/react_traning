export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const KAKEZAN = 'KAKEZAN'

export const increment = () =>{
    console.log("action！increment")
    return {
        type : INCREMENT
    }
}

export const decrement = () => {
    console.log("action！decrement")
    return {
        type : DECREMENT
    }
}
export const kakezan = () => {
    console.log('action!kakezan')
    return {type : KAKEZAN}
}