export default function Section({title, children}) {
    return (
        <section className="card">
            {title ? <h2 className="h2">{title}</h2> : null}
            {children}
        </section>
    )
}
