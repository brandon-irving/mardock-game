import { useContextState } from "dynamic-context-provider";
import { accessories, weapons } from "../../gameData/items";

export function useGetEquippedData(type){
    const { user: {character: {equipped}} } = useContextState()
    const typeMap = {accessory: accessories, weapon: weapons}
    const data = typeMap[type][equipped[type]] || {}

    return data
}