export default function Tabs({ children, buttons, buttonContainers = "menu" }) {
    const ButtonContainers = buttonContainers
    return (
        <>
            <ButtonContainers>{buttons}</ButtonContainers>
            {children}
        </>
    )
}