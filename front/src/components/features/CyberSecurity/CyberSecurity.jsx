
import Banner from "../../shared/Banner/Banner"
import CustomSection from "../../shared/CustomSection/CustomSection"
import Footer from "../../shared/Footer/Footer"
import Header from "../../shared/Header/Header"
import TechStack from "../../shared/Technology/TechStack"
import Cards from "./Cards"

const CyberSecurity = () => {

    const data = [
        {
            heading: "Anti-Phishing and Anti-Rogue",
            description: "TechOwl Shield employs machine learning to detect and mitigate phishing and rogue activities across emails, websites, and mobile apps. It promptly alerts you of potential threats to your brand and quickly removes confirmed dangers to secure your digital presence. Additionally, it offers educational resources to increase user awareness of such threats.",
            image: "/assets/img/cyber-1.svg"
        },
        {
            heading: "Dark Web Monitoring",
            description: "Enhance your security with Darkweb Monitoring, which includes continuous deep web scanning for threats related to your brand, early detection to preemptively address risks, and real-time alerts for data breaches. It also automates risk assessment and reporting, ensuring timely and prioritized responses to potential threats.",
            image: "/assets/img/cyber-2.svg"
        },
        {
            heading: "Self Healing",
            description: "Self-Healing enhances your digital brand's resilience with continuous automated monitoring and immediate corrective actions. It automatically deploys fixes and patches to address vulnerabilities, learning from past incidents to strengthen future security. This system also provides detailed performance metrics, helping to ensure minimal downtime and maintain consistent service availability.",
            image: "/assets/img/cyber-3.svg"
        },
        {
            heading: "Attack Surface Monitoring",
            description: "Attack Surface Monitoring offers a 360-degree view of your digital infrastructure, identifying security gaps through regular vulnerability scans and threat correlation. It alerts administrators in real-time to new vulnerabilities, enabling swift action. Efficient patch management further strengthens your cybersecurity posture.",
            image: "/assets/img/cyber-4.svg"
        },
        {
            heading: "Mail Health Monitoring",
            description: "Mail Health Monitoring continuously oversees your email systems, enhancing security with DMARC, SPF, and DKIM, and employing effective spam filtering for safer communication. It includes data loss prevention to control unauthorized transfers, adhering to compliance standards, and conducts redundancy checks to guarantee operational backups and failover systems for uninterrupted email service.",
            image: "/assets/img/cyber-5.svg"
        },
        {
            heading: "Threat Intelligence",
            description: "Threat Intelligence uses AI-powered analytics to quickly identify and predict cyber threats, enabling prompt and precise responses. It employs forecasting models to anticipate future attacks, customizes alerts to match your organization's specific needs, and integrates intelligence from various sources for a thorough security analysis. This approach allows for alert prioritization based on threat severity and impact.",
            image: "/assets/img/cyber-6.svg"
        },
        {
            heading: "Compliance Matrix",
            description: "Compliance Matrix offers real-time updates on regulatory changes and conducts periodic compliance audits. It performs gap analysis to pinpoint deficiencies, offering actionable recommendations. This service simplifies compliance documentation and provides legal consultation for complex compliance scenarios.",
            image: "/assets/img/cyber-7.svg"
        },
        {
            heading: "Digital Risk Management",
            description: "Digital Risk Management involves a holistic assessment of your digital landscape, identifying risks from data breaches to compliance violations. It offers actionable mitigation plans with encryption and data masking for enhanced security. This service includes financial impact analysis for better decision-making and ensures ongoing protection with real-time monitoring and adaptive risk management strategies.",
            image: "/assets/img/cyber-8.svg"
        },
        {
            heading: "Incident Response",
            description: "Incident Response swiftly activates response teams to manage security incidents, reducing downtime and damage. It includes immediate containment strategies, forensic analysis to determine incident causes, and recovery plans to restore systems. Post-incident reviews are conducted to enhance future responses and strengthen system resilience.",
            image: "/assets/img/cyber-9.svg"
        },
    ]

  return (
    <>
        <Header />
        <Banner heading={'Cyber Security'} bgURL={'/assets/img/about-banner.svg'} />
        <Cards data={data}/>
        <TechStack />
        <CustomSection />
        <Footer />
    </>
  )
}

export default CyberSecurity