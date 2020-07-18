export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

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