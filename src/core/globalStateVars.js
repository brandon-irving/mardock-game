export const globalStateConfig = {
    user: null,
    globalLoading: true,
    users: [],
    toaster: {
        open: false,
        duration: 3000, 
        handleClose: ()=>null, 
        message: 'Success!', 
        severity: 'success'
    }

}