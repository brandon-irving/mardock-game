import { useContextState } from "dynamic-context-provider"

export const useToaster = () => {
const { updateContextState } = useContextState()
function openToaster(toaster={
    open: false,
    duration: 3000, 
    handleClose: ()=>null, 
    message: 'Success!', 
    severity: 'success'
}){
    updateContextState({toaster})
}
return [openToaster]
}

