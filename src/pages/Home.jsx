import Section from "../ui/Section.jsx"
import profileData from "../data/profile.json"

export default function Home() {
    const {
        personal,
        home,
        experience,
        education,
        training,
        achievements,
        strengths,
        skills,
        portfolio,
        testimonials,
        certifications
    } = profileData;

    return (
        <div className="stack">
            <Section>
                <h1 className="h1">{home.headline}</h1>
                <p className="p">
                    {home.description}
                </p>
            </Section>

            <Section title={home.leadership.title}>
                <ul className="bullets">
                    {home.leadership.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </Section>

            <Section title="Technical Skills">
                <div
                    style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem'}}>
                    <div>
                        <h4 className="h4">Programming & Development</h4>
                        <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                            {skills.programming.map((skill, index) => (
                                <span key={index} style={{
                                    background: 'var(--color-bg-secondary)',
                                    padding: '0.25rem 0.5rem',
                                    borderRadius: '0.5rem',
                                    fontSize: '0.875rem',
                                    border: '1px solid var(--color-border)'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="h4">Databases</h4>
                        <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                            {skills.databases.map((skill, index) => (
                                <span key={index} style={{
                                    background: 'var(--color-bg-secondary)',
                                    padding: '0.25rem 0.5rem',
                                    borderRadius: '0.5rem',
                                    fontSize: '0.875rem',
                                    border: '1px solid var(--color-border)'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="h4">Cloud & DevOps</h4>
                        <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                            {skills.cloud_devops.map((skill, index) => (
                                <span key={index} style={{
                                    background: 'var(--color-bg-secondary)',
                                    padding: '0.25rem 0.5rem',
                                    borderRadius: '0.5rem',
                                    fontSize: '0.875rem',
                                    border: '1px solid var(--color-border)'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="h4">Other Technologies</h4>
                        <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                            {skills.other.map((skill, index) => (
                                <span key={index} style={{
                                    background: 'var(--color-bg-secondary)',
                                    padding: '0.25rem 0.5rem',
                                    borderRadius: '0.5rem',
                                    fontSize: '0.875rem',
                                    border: '1px solid var(--color-border)'
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            <Section title="Experience">
                {experience.map((exp, index) => (
                    <div key={index} style={{marginBottom: '2rem'}}>
                        <h3 className="h3">{exp.title}</h3>
                        <p className="p dim">
                            <strong>{exp.company}</strong> | {exp.location} | {exp.period}
                        </p>
                        <p className="p">{exp.description}</p>
                        {exp.achievements && exp.achievements.length > 0 && (
                            <ul className="bullets">
                                {exp.achievements.map((achievement, achIndex) => (
                                    <li key={achIndex}>{achievement}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </Section>

            <Section title="Education">
                <h3 className="h3">{education.degree}</h3>
                <p className="p dim">
                    <strong>{education.university}</strong> | {education.location} | {education.period}
                </p>
            </Section>

            <Section title="Training & Certifications">
                {training.map((course, index) => (
                    <div key={index} style={{marginBottom: '1rem'}}>
                        <h4 className="h4">{course.title}</h4>
                        <p className="p dim">{course.period} {course.status && `(${course.status})`}</p>
                    </div>
                ))}
            </Section>

            <Section title="Key Achievements">
                <ul className="bullets">
                    {achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                    ))}
                </ul>
            </Section>

            <Section title="Core Strengths">
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                    {strengths.map((strength, index) => (
                        <span key={index} style={{
                            background: 'var(--color-accent)',
                            color: 'white',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '1rem',
                            fontSize: '0.875rem'
                        }}>
                            #{strength}
                        </span>
                    ))}
                </div>
            </Section>

            {portfolio && portfolio.length > 0 && (
                <Section title="Portfolio">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '1rem'
                    }}>
                        {portfolio.map((item, index) => (
                            <div key={index} style={{
                                border: '1px solid var(--color-border)',
                                borderRadius: '0.5rem',
                                padding: '1rem'
                            }}>
                                <h4 className="h4">{item.title}</h4>
                                <p className="p dim">{item.description}</p>
                                <a href={item.url} target="_blank" rel="noreferrer" className="btn">
                                    View {item.type === 'blog' ? 'Blog' : 'GitHub'}
                                </a>
                            </div>
                        ))}
                    </div>
                </Section>
            )}

            {testimonials && testimonials.length > 0 && (
                <Section title="Testimonials">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} style={{
                            border: '1px solid var(--color-border)',
                            borderRadius: '0.5rem',
                            padding: '1rem',
                            marginBottom: '1rem'
                        }}>
                            <p className="p dim" style={{fontStyle: 'italic'}}>
                                "{testimonial.text}"
                            </p>
                            <p className="p dim">
                                <strong>{testimonial.author}</strong>
                                {testimonial.company && <span> • {testimonial.company}</span>}
                                {testimonial.date && <span> • {testimonial.date}</span>}
                            </p>
                        </div>
                    ))}
                </Section>
            )}

            {certifications && certifications.length > 0 && (
                <Section title="Certifications">
                    {certifications.map((cert, index) => (
                        <div key={index} style={{
                            border: '1px solid var(--color-border)',
                            borderRadius: '0.5rem',
                            padding: '1rem',
                            marginBottom: '1rem'
                        }}>
                            <h4 className="h4">{cert.name}</h4>
                            <p className="p dim">
                                <strong>{cert.issuer}</strong>
                                {cert.date && <span> • {cert.date}</span>}
                                {cert.credential_id && <span> • {cert.credential_id}</span>}
                            </p>
                        </div>
                    ))}
                </Section>
            )}
        </div>
    )
}
