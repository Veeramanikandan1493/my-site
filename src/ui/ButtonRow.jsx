import {Link} from "react-router-dom"

export default function ButtonRow({primary, secondary}) {
    return (
        <div className="row">
            <Link className="btn primary" to={primary.to}>{primary.label}</Link>
            <Link className="btn" to={secondary.to}>{secondary.label}</Link>
        </div>
    )
}
