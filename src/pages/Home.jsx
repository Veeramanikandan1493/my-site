import Section from "../ui/Section.jsx"
import ButtonRow from "../ui/ButtonRow.jsx"

export default function Home() {
    return (
        <div className="stack">
            <Section>
                <h1 className="h1">Building clean data pipelines & practical ML apps.</h1>
                <p className="p">
                    I’m Veeramanikandan — Python / Data Engineer. I build reliable backend systems, ETL pipelines,
                    and ML-driven products with a focus on clean architecture and shipping.
                </p>

                <ButtonRow
                    primary={{label: "View Projects", to: "/projects"}}
                    secondary={{label: "Contact", to: "/contact"}}
                />
            </Section>

            <Section title="Highlights">
                <ul className="bullets">
                    <li>Data engineering: ETL, data quality, pipeline optimization</li>
                    <li>Python: FastAPI, Polars/Pandas, SQL, Docker</li>
                    <li>ML: regression/classification, model evaluation, Streamlit demos</li>
                </ul>
            </Section>
        </div>
    )
}
