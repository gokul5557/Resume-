import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
  Download,
  Target,
  Wrench,
  Briefcase,
  Rocket,
  GraduationCap,
  Award,
  Shield
} from 'lucide-react';

function App() {
  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Download Button - Hidden in print */}
      <div className="print:hidden bg-blue-600 text-white p-4 text-center">
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 transition-colors px-6 py-2 rounded-lg font-medium"
        >
          <Download size={20} />
          <strong>Download Resume</strong>
        </button>
      </div>

      <div className="p-6 print:p-2 max-w-full">
        {/* Header */}
        <header className="text-center mb-4 print:mb-2">
          <h1 className="text-4xl print:text-lg font-bold text-gray-900 mb-1 print:mb-0"><strong>GOKUL V</strong></h1>
          <p className="text-xl print:text-sm font-semibold text-blue-600 mb-3 print:mb-1"><strong>DevOps & Cloud Security Engineer</strong></p>

          <div className="flex flex-col items-center gap-2 print:gap-1 text-sm print:text-xs text-gray-600">
            {/* First Line - Contact Info */}
            <div className="flex flex-wrap justify-center gap-4 print:gap-3">
              <div className="flex items-center gap-1">
                <MapPin size={16} className="text-blue-600 print:w-2 print:h-2" />
                <span><strong>Ulundurpet, Tamil Nadu, India</strong></span>
              </div>
              <div className="flex items-center gap-1">
                <Phone size={16} className="text-blue-600 print:w-2 print:h-2" />
                <span><strong>+91 8220442790</strong></span>
              </div>
              <div className="flex items-center gap-1">
                <Mail size={16} className="text-blue-600 print:w-2 print:h-2" />
                <a href="mailto:gokul3002001@gmail.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  <strong>gokul3002001@gmail.com</strong>
                </a>
              </div>
            </div>

            {/* Second Line - Social Links */}
            <div className="flex flex-wrap justify-center gap-4 print:gap-3">
              <div className="flex items-center gap-1">
                <Linkedin size={16} className="text-blue-600 print:w-2 print:h-2" />
                <a href="https://linkedin.com/in/gokul-cse" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  <strong>Linkedin</strong>
                </a>
              </div>
              <div className="flex items-center gap-1">
                <Github size={16} className="text-blue-600 print:w-2 print:h-2" />
                <a href="https://github.com/gokul5557" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  <strong>Github</strong>
                </a>
              </div>
              <div className="flex items-center gap-1">
                <Shield size={16} className="text-blue-600 print:w-2 print:h-2" />
                <a href="https://tryhackme.com/p/VortexCoder" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  <strong>TryHackMe</strong>
                </a>
              </div>
              <div className="flex items-center gap-1">
                <Shield size={16} className="text-blue-600 print:w-2 print:h-2" />
                <a href="http://www.skillrack.com/profile/500040/61d13650a4d45e09f5377226407700257a2d6df8" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  <strong>Skillrack</strong>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Rest of the content remains exactly the same */}
        {/* Objective */}
        <section className="mb-4 print:mb-1">
          <div className="flex items-center gap-2 mb-2 print:mb-1">
            <Target className="text-blue-600 print:w-3 print:h-3" size={20} />
            <h2 className="text-xl print:text-sm font-bold text-gray-900"><strong>OBJECTIVE</strong></h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm print:text-xs print:leading-tight">
            <strong>Results-driven DevOps and Cloud Security Engineer</strong> with strong hands-on experience in <strong>CI/CD pipelines,
              infrastructure automation, containerization, and cloud security</strong>. Proven ability to deploy <strong>secure, scalable
                systems</strong> using <strong>Jenkins, Docker, Proxmox, and Wazuh</strong>. Passionate about <strong>automating operations, enhancing system
                  reliability, and building resilient, secure cloud-native platforms</strong>.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-4 print:mb-1">
          <div className="flex items-center gap-2 mb-2 print:mb-1">
            <Wrench className="text-blue-600 print:w-3 print:h-3" size={20} />
            <h2 className="text-xl print:text-sm font-bold text-gray-900"><strong>TECHNICAL SKILLS</strong></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 print:gap-0 text-sm print:text-xs">
            <div>
              <strong className="text-gray-900">CI/CD & Automation:</strong>
              <span className="text-gray-700 ml-1"><strong>Jenkins, Bash, Python</strong></span>
            </div>
            <div>
              <strong className="text-gray-900">Containerization:</strong>
              <span className="text-gray-700 ml-1"><strong>Docker, Docker Compose</strong></span>
            </div>
            <div>
              <strong className="text-gray-900">Infrastructure & Virtualization:</strong>
              <span className="text-gray-700 ml-1"><strong>Proxmox, NFS, QEMU agent, Cloud-init</strong></span>
            </div>
            <div>
              <strong className="text-gray-900">Cloud Security & Cybersecurity:</strong>
              <span className="text-gray-700 ml-1"><strong>Wazuh SIEM, Fail2Ban, iptables, TryHackMe</strong></span>
            </div>
            <div>
              <strong className="text-gray-900">Cloud & Storage Platforms:</strong>
              <span className="text-gray-700 ml-1"><strong>Contabo S3, Webyn, Cloudflare DNS, rclone, rsync</strong></span>
            </div>
            <div>
              <strong className="text-gray-900">Web/DB Stack:</strong>
              <span className="text-gray-700 ml-1"><strong>Nginx, PHP 8.3, MariaDB, MySQL</strong></span>
            </div>
            <div>
              <strong className="text-gray-900">Identity & Access Management:</strong>
              <span className="text-gray-700 ml-1"><strong>Authentik, Pomerium (SSO)</strong></span>
            </div>
            <div>
              <strong className="text-gray-900">Monitoring & Alerting:</strong>
              <span className="text-gray-700 ml-1"><strong>Postfix email alerts, log rotation</strong></span>
            </div>
            <div>
              <strong className="text-gray-900">Version Control:</strong>
              <span className="text-gray-700 ml-1"><strong>Git, GitHub, GitLab</strong></span>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-4 print:mb-1">
          <div className="flex items-center gap-2 mb-2 print:mb-1">
            <Briefcase className="text-blue-600 print:w-3 print:h-3" size={20} />
            <h2 className="text-xl print:text-sm font-bold text-gray-900"><strong>PROFESSIONAL EXPERIENCE</strong></h2>
          </div>
          <div className="border-l-2 border-blue-200 pl-3 print:pl-1 print:border-l-1">
            <div className="mb-1 print:mb-0">
              <h3 className="font-bold text-gray-900 text-lg print:text-xs"><strong>DevOps & Cloud Security Engineer</strong></h3>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 print:mb-0">
                <p className="text-blue-600 font-medium print:text-xs"><strong>Sagasoft Technologies</strong></p>
                <p className="text-gray-600 text-sm print:text-xs"><strong>Dec 2024 – May 2025</strong></p>
              </div>
              <p className="text-xs text-gray-600 mb-2 print:mb-0 italic"><strong>📜 Internship Certificate Available</strong></p>
            </div>
            <ul className="space-y-1 print:space-y-0 text-sm print:text-xs text-gray-700 print:leading-tight">
              <li>• <strong>Provisioned and managed 10+ virtual machines</strong> using Proxmox with automated templates</li>
              <li>• <strong>Designed and implemented CI/CD pipelines</strong> in Jenkins for QA, Preprod, and Production environments</li>
              <li>• <strong>Deployed and managed full-stack applications</strong> including Frappe, Nextcloud, Mailcow, and Taiga</li>
              <li>• <strong>Configured Wazuh SIEM, Fail2Ban, and iptables</strong> for intrusion detection and mitigation</li>
              <li>• <strong>Automated backup systems</strong> using rclone (Contabo S3/NFS) and tested disaster recovery</li>
              <li>• <strong>Set up SSL, Nginx, and Postfix email alerts</strong> for server and security events</li>
              <li>• <strong>Enforced SSO and RBAC</strong> using Authentik and Pomerium for internal app access</li>
              <li>• <strong>Acted as the sole DevOps and Security engineer</strong> supporting internal production infrastructure</li>
            </ul>
          </div>
        </section>

        {/* Key Projects */}
        <section className="mb-4 print:mb-1">
          <div className="flex items-center gap-2 mb-2 print:mb-1">
            <Rocket className="text-blue-600 print:w-3 print:h-3" size={20} />
            <h2 className="text-xl print:text-sm font-bold text-gray-900"><strong>KEY PROJECTS</strong></h2>
          </div>
          <div className="space-y-3 print:space-y-0">

            {/* Nextcloud CI/CD */}
            <div>
              <h3 className="font-bold text-gray-900 mb-1 print:mb-0 print:text-xs"><strong>Nextcloud CI/CD Deployment (Jenkins + GitLab)</strong></h3>
              <ul className="text-sm print:text-xs text-gray-700 space-y-1 print:space-y-0 print:leading-tight">
                <li>• <strong>Built Jenkins pipeline</strong> to automate Nextcloud provisioning with PHP, MariaDB, SSL, and OIDC login</li>
                <li>• <strong>Enabled multi-tenant instance support</strong> with per-org isolation and scoped config</li>
                <li>• <strong>Integrated with GitLab repo</strong>, SMTP settings, and post-deployment health checks</li>
              </ul>
            </div>

            {/* Wazuh SIEM */}
            <div>
              <h3 className="font-bold text-gray-900 mb-1 print:mb-0 print:text-xs"><strong>SIEM & Threat Detection System</strong></h3>
              <ul className="text-sm print:text-xs text-gray-700 space-y-1 print:space-y-0 print:leading-tight">
                <li>• <strong>Deployed Wazuh stack</strong> in Docker for live monitoring and alerting</li>
                <li>• <strong>Configured security alerts</strong> for login failures, brute-force, and anomalous behavior</li>
              </ul>
            </div>

            {/* Sagasuite Pipeline */}
            <div>
              <h3 className="font-bold text-gray-900 mb-1 print:mb-0 print:text-xs"><strong>Sagasuite Static App Deployment Pipeline (Jenkins)</strong></h3>
              <ul className="text-sm print:text-xs text-gray-700 space-y-1 print:space-y-0 print:leading-tight">
                <li>• <strong>Developed build.sh + deploy.sh</strong> for multi-environment builds and staging</li>
                <li>• <strong>Automated pipeline</strong> via Jenkins to push to Cloudflare Pages using rclone and Wrangler</li>
              </ul>
            </div>

          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 print:gap-1">
          {/* Education */}
          <section>
            <div className="flex items-center gap-2 mb-2 print:mb-1">
              <GraduationCap className="text-blue-600 print:w-3 print:h-3" size={20} />
              <h2 className="text-xl print:text-sm font-bold text-gray-900"><strong>EDUCATION</strong></h2>
            </div>
            <div className="space-y-2 print:space-y-1">
              <div>
                <h3 className="font-bold text-gray-900 print:text-xs">
                  <strong>Bachelor of Engineering (B.E.), Computer Science & Engineering</strong>
                </h3>
                <p className="text-blue-600 font-medium text-sm print:text-xs">
                  <strong>V.R.S College of Engineering and Technology, Arasur, Tamil Nadu</strong>
                </p>
                <p className="text-gray-600 text-sm print:text-xs">
                  <strong>Expected Graduation: 2025 | Current CGPA (up to 6th semester): 8.25 / 10</strong>
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm print:text-xs"><strong>Higher Secondary Education</strong></h3>
                <ul className="text-sm print:text-xs text-gray-700 space-y-1 print:space-y-0 print:leading-tight list-disc list-inside">
                  <li><strong>Government Boys Higher Secondary School, Ulundurpet – 83.53%</strong></li>
                  <li><strong>Beschi Higher Secondary School, Ulundurpet (SSLC) – 81%</strong></li>
                </ul>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <div className="flex items-center gap-2 mb-2 print:mb-1">
              <Award className="text-blue-600 print:w-3 print:h-3" size={20} />
              <h2 className="text-xl print:text-sm font-bold text-gray-900"><strong>CERTIFICATIONS</strong></h2>
            </div>
            <ul className="space-y-1 print:space-y-0 text-sm print:text-xs text-gray-700 print:leading-tight">
              <li>• <strong>Python Programming – IBM / EduPre</strong></li>
              <li>• <strong>CI/CD with Jenkins – Infosys Springboard</strong></li>
              <li>• <strong>MEAN Stack Development – Muhabalab</strong></li>
              <li>• <strong>Django Full Stack – Edunet Foundation</strong></li>
            </ul>
          </section>

          {/* Cybersecurity & Cloud Security */}
          <section>
            <div className="flex items-center gap-2 mb-2 print:mb-1">
              <Shield className="text-blue-600 print:w-3 print:h-3" size={20} />
              <h2 className="text-xl print:text-sm font-bold text-gray-900"><strong>CYBERSECURITY & CLOUD SECURITY</strong></h2>
            </div>
            <ul className="space-y-1 print:space-y-0 text-sm print:text-xs text-gray-700 print:leading-tight">
              <li>• <strong>TryHackMe: Completed 50+ rooms</strong></li>
              <li>• <strong>Hardened Docker containers</strong> using Trivy, iptables, and Fail2Ban</li>
              <li>• <strong>Configured Postfix + Wazuh</strong> to email alerts on suspicious activity</li>
              <li>• <strong>Used Cloudflare DNS & HTTPS</strong> for app security and performance</li>
              <li>• <strong>Developed internal incident response</strong> checklist and firewall rules</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;