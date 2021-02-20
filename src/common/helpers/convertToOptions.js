import { map } from "lodash"

const convertToOptions = (obj, useKey) => {
    const convertedOptions = map(Object.keys(obj), key=>{
        if(useKey){
            return {value: key, label:key }
        }
        return{...obj[key], value:obj[key].label }
    })
   return convertedOptions
}

export default convertToOptions
