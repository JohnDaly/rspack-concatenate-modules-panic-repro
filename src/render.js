import './render.css'
import accept from 'attr-accept'

export function render() {
    console.log("MOD: ", accept)
    const el = document.createElement('div')
    el.classList.add('text')
    document.getElementsByTagName('body')[0].appendChild(el)
    el.innerHTML = 'hello, world'
}