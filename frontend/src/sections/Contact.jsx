
import github from '../assets/contactme/github.png';
import gmail from '../assets/contactme/gmail.png';
import leet from '../assets/contactme/leet.png';
import linkedin from '../assets/contactme/linkedin.png';

export default function Contact() {

    const contactLinks = [
      { label: 'GitHub', value: 'github.com/iwcbu', href: 'https://github.com/iwcbu', pic: github, size: 50 },
      { label: 'LeetCode', value: 'leetcode.com/iwc3', href: 'https://leetcode.com/iwc3', pic: leet, size: 60 },
      { label: 'Email', value: 'iwc3@bu.edu', href: 'mailto:iwc3@bu.edu', pic: gmail, size: 40},
      { label: 'LinkedIn', value: 'linkedin.com/in/iwc', href: 'https://linkedin.com/in/iwc3', pic: linkedin, size: 55 },
    ]

    return (
        <section className="content-section contact-section scroll-section" id="contact" data-scroll-section>
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s connect</h2>
          </div>

          <div className="contact-grid">
            {contactLinks.map((link) => (
              <a className="contact-card" key={link.label} href={link.href} target="_blank" rel="noreferrer">
                <div>
                  <span className="contact-label">{link.label}</span>
                  <span className="contact-value">{link.value}</span>
                </div>
                <img src={link.pic} alt="" style={{alignSelf: 'center', maxHeight: link.size,}} />
              </a>
            ))}
          </div>
        </section>
    )
}