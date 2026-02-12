import Section from "../ui/Section.jsx"
import ProjectCard from "../ui/ProjectCard.jsx"
import profileData from "../data/profile.json"

export default function Projects() {
    const {projects} = profileData;

    return (
        <div className="stack">
            <Section title="Projects">
                <p className="p dim">
                    A selection of key projects I've led and contributed to throughout my career.
                </p>

                <div className="grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            desc={project.description}
                            tags={project.technologies}
                            links={{
                                github: project.link || null,
                                demo: project.demo || null
                            }}
                        />
                    ))}
                </div>
            </Section>
        </div>
    )
}
