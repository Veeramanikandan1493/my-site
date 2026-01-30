import Section from "../ui/Section.jsx"

export default function Contact() {
    return (
        <div className="stack">
            <Section title="Contact">
                <p className="p">
                    Want to collaborate or just say hi? Reach me here:
                </p>

                <div className="contactGrid">
                    <a className="contactCard" href="mailto:yourmail@example.com">
                        <div className="contactTitle">Email</div>
                        <div className="contactValue">yourmail@example.com</div>
                    </a>

                    <a className="contactCard" href="https://github.com/veeramanikandan1493" target="_blank"
                       rel="noreferrer">
                        <div className="contactTitle">GitHub</div>
                        <div className="contactValue">veeramanikandan1493</div>
                    </a>

                    <a className="contactCard" href="https://www.linkedin.com/in/YOUR-LINK/" target="_blank"
                       rel="noreferrer">
                        <div className="contactTitle">LinkedIn</div>
                        <div className="contactValue">Add your profile link</div>
                    </a>
                </div>

                <p className="p dim" style={{marginTop: 12}}>
                    Replace the email + LinkedIn above and you’re done.
                </p>
            </Section>
        </div>
    )
}
