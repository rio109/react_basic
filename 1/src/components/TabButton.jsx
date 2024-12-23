export function TabButton(props) {
    return (<li>
        <button className={props.isSelect ? 'active' : undefined} onClick={props.onSelect}>{props.children}</button>
    </li>)
}

export function TabButton2(props) {
    return (<li>
        <button>{props.label}</button>
    </li>)
}