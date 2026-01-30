export default function ProjectCard({title, desc, tags = [], links = {}}) {
    const {github, demo} = links

    return (
        <div className="project">
            <div>
                <div className="projectTitle">{title}</div>
                <div className="projectDesc">{desc}</div>
            </div>

            <div className="tagRow">
                {tags.map((t) => (
                    <span className="tagPill" key={t}>{t}</span>
                ))}
            </div>

            <div className="row" style={{marginTop: 12}}>
                {github ? (
                    <a className="btn" href={github} target="_blank" rel="noreferrer">GitHub</a>
                ) : (
                    <span className="btn disabled">GitHub</span>
                )}

                {demo ? (
                    <a className="btn primary" href={demo} target="_blank" rel="noreferrer">Live Demo</a>
                ) : (
                    <span className="btn primary disabled">Live Demo</span>
                )}
            </div>
        </div>
    )
}
