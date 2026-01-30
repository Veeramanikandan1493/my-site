import Section from "../ui/Section.jsx"
import ProjectCard from "../ui/ProjectCard.jsx"

const PROJECTS = [
    {
        title: "SmartPremium",
        desc: "Predict insurance costs using ML. End-to-end pipeline + Streamlit deployment.",
        tags: ["Python", "sklearn", "Streamlit"],
        links: {
            github: "https://github.com/veeramanikandan1493",
            demo: ""
        }
    },
    {
        title: "Customer Conversion Analysis (Clickstream)",
        desc: "Preprocessing, EDA, feature engineering, and classification/clustering for conversion insights.",
        tags: ["Python", "EDA", "Classification"],
        links: {
            github: "https://github.com/veeramanikandan1493",
            demo: ""
        }
    },
    {
        title: "Grails → FastAPI Migration Planning",
        desc: "Guided gradual migration from legacy Grails monolith to modular FastAPI services.",
        tags: ["FastAPI", "Architecture", "MySQL"],
        links: {
            github: "",
            demo: ""
        }
    }
]

export default function Projects() {
    return (
        <div className="stack">
            <Section title="Projects">
                <p className="p dim">
                    A few things I’ve built / worked on. Add real GitHub/demo links when you’re ready.
                </p>

                <div className="grid">
                    {PROJECTS.map((p) => (
                        <ProjectCard key={p.title} {...p} />
                    ))}
                </div>
            </Section>
        </div>
    )
}
