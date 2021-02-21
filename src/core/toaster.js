import { Typography } from '@material-ui/core';
import { forEach } from 'lodash';
import { toast } from 'react-toastify';
import { updateCharacter, updateDMDocs } from '../firebase';
const defaultOptions = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
}
export function launchToaster({ options = {}, type = 'dark', content = '' }) {
    return toast[type](content, { ...defaultOptions, ...options })
}
export function launchErrorToaster({ options = {}, content = '' }) {
    return launchToaster({ type: 'error', content, options })
}
export function launchInfoToaster({ options = {}, content = '' }) {
    return launchToaster({ type: 'info', content, options })
}
export function launchSuccussToaster({ options = {}, content = '' }) {
    return launchToaster({ type: 'success', content, options })
}
export function launchWarningToaster({ options = {}, content = '' }) {
    return launchToaster({ type: 'warning', content, options })
}

export function handleDmMessage(user) {
    const { hint, innerThoughts } = user.character.dmMessage
    if (hint.length > 0) {
        launchInfoToaster({ options: { autoClose: false }, content: `✨  ${hint}` })
    }
    if (innerThoughts.length > 0) {
        launchWarningToaster({ options: { autoClose: false }, content: `💭 ${innerThoughts}` })
    }
    updateCharacter(user, { 'character.dmMessage': { hint: '', innerThoughts: '' } })
}

export function handleNewItemMessage(newUser, oldUser) {
    if (!oldUser.character) return
    const newItems = newUser.character.items
    const oldItems = oldUser.character.items
    try {
        forEach(Object.keys(newItems), type => { // misc
            forEach(newItems[type], item => { // { Potion, Mana }                
                const oldItem = oldItems[type][item?.label] || { quantity: 0 }
                if (item.quantity > oldItem.quantity) {
                    const quantity = item.quantity - oldItem.quantity
                    launchToaster({ type: 'success', content: `You received ${quantity} ${item.label}(s)` })
                }

                if (item.quantity < oldItem.quantity) {
                    const quantity = oldItem.quantity - item.quantity
                    launchErrorToaster({ content: `You lost ${quantity} ${item.label}(s)` })
                }
            })
        })

    } catch (e) {
        console.error('log: error', e)
        launchErrorToaster({ content: e })
    }

}

export function handleBattleSuccess(battle) {

    if (battle?.success) {
        const content = (<div>
            <Typography variant="h6">Battle Won!</Typography>
            {/* TODO: decide on how to handle this ux
            <Typography variant="subtitle1">Drops:</Typography>
            <ul>
            {
                map(battle.rewards.items, (item, i)=>{
                    return <li key={i}>{item.quantity}x {item.label}</li>
                })
            }
            </ul> */}
            <Typography variant="h6">Outcome:</Typography>
            <Typography variant="body1">{battle.rewards.consequence}</Typography>
        </div>)
        launchInfoToaster({ options: { autoClose: false }, content })
        updateDMDocs({ 'current': null })

    }
}