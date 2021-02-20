import { forEach } from 'lodash';
import { toast } from 'react-toastify';
import { updateCharacter } from '../firebase';
const defaultOptions = {
    position: "top-center",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}
export function launchToaster({options=defaultOptions, type='dark', content=''}){
    return toast[type](content, options)
}

export function handleDmMessage(user){
    const { hint, innerThoughts } = user.character.dmMessage
if(hint.length > 0){
    launchToaster({type: 'info', content: `✨  ${hint}`})
}
if(innerThoughts.length > 0){
    launchToaster({type: 'warning', content: `💭 ${innerThoughts}`})
}
updateCharacter(user, {'character.dmMessage':  { hint: '', innerThoughts: '' }})
}

export function handleNewItemMessage(newUser, oldUser){
    const newItems = newUser.character.items
    const oldItems = oldUser.character.items
    forEach(Object.keys(newItems), type=>{ // misc
        forEach(newItems[type], item=>{ // { Potion, Mana }
            const oldItem = oldItems[type][item.label]
            if(item.quantity > oldItem.quantity){
                const quantity = item.quantity - oldItem.quantity
                launchToaster({type: 'success', content: `You received ${quantity} ${item.label}(s)`})
            }
            console.log('log: ', {old: oldItem.quantity, new: item.quantity})
            
            if(item.quantity < oldItem.quantity){
                const quantity = oldItem.quantity - item.quantity
                launchToaster({type: 'error', content: `You lost ${quantity} ${item.label}(s)`})
            }
        })
    })

}