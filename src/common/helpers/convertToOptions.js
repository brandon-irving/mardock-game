import { map } from "lodash"

const convertToOptions = (obj) => {
    const convertedOptions = map(Object.keys(obj), key=>{
        return{...obj[key], value:obj[key].label }
    })
   return convertedOptions
}

export default convertToOptions
