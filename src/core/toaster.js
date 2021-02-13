import { toast } from 'react-toastify';
const defaultOptions = {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}
export function launchToaster({options=defaultOptions, type='dark', content=''}){
    return toast[type](content, options)
}
