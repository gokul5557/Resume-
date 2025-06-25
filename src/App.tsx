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
          Download Resume
        </button>
      </div>

      <div className="p-6 print:p-2 max-w-full">
        {/* Header */}
        <header className="text-center mb-4 print:mb-2">
          <h1 className="text-4xl print:text-lg font-bold text-gray-900 mb-1 print:mb-0">GOKUL V</h1>
          <p className="text-xl print:text-sm font-semibold text-blue-600 mb-3 print:mb-1">DevOps & Cloud Security Engineer</p>
          
          <div className="flex flex-wrap justify-center gap-4 print:gap-1 text-sm print:text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin size={16} className="text-blue-600 print:w-2 print:h-2" />
              <span>Ulundurpet, Tamil Nadu, India</span>
            </div>
            <div className="flex items-center gap-1">
              <Phone size={16} className="text-blue-600 print:w-2 print:h-2" />
              <span>+91 8220442790</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={16} className="text-blue-600 print:w-2 print:h-2" />
              <span>gokul3002001@gmail.com</span>
            </div>
            <div className="flex items-center gap-1">
              <Linkedin size={16} className="text-blue-600 print:w-2 print:h-2" />
              <span>linkedin.com/in/gokul-cse</span>
            </div>
            <div className="flex items-center gap-1">
              <Github size={16} className="text-blue-600 print:w-2 print:h-2" />
              <span>github.com/gokul5557</span>
            </div>
          </div>
        </header>

        {/* Objective */}
        <section className="mb-4 print:mb-1">
          <div className="flex items-center gap-2 mb-2 print:mb-1">
            <Target className="text-blue-600 print:w-3 print:h-3" size={20} />
            <h2 className="text-xl print:text-sm font-bold text-gray-900">OBJECTIVE</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-sm print:text-xs print:leading-tight">
            Results-driven DevOps and Cloud Security Engineer with strong hands-on experience in CI/CD pipelines, 
            infrastructure automation, containerization, and cloud security. Proven ability to deploy secure, scalable 
            systems using Jenkins, Docker, Proxmox, and Wazuh. Passionate about automating operations, enhancing system 
            reliability, and building resilient, secure cloud-native platforms.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-4 print:mb-1">
          <div className="flex items-center gap-2 mb-2 print:mb-1">
            <Wrench className="text-blue-600 print:w-3 print:h-3" size={20} />
            <h2 className="text-xl print:text-sm font-bold text-gray-900">TECHNICAL SKILLS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 print:gap-0 text-sm print:text-xs">
            <div>
              <strong className="text-gray-900">CI/CD & Automation:</strong>
              <span className="text-gray-700 ml-1">Jenkins, Bash, Python</span>
            </div>
            <div>
              <strong className="text-gray-900">Containerization:</strong>
              <span className="text-gray-700 ml-1">Docker, Docker Compose</span>
            </div>
            <div>
              <strong className="text-gray-900">Infrastructure & Virtualization:</strong>
              <span className="text-gray-700 ml-1">Proxmox, NFS, LVM, QEMU agent, Cloud-init</span>
            </div>
            <div>
              <strong className="text-gray-900">Cloud Security & Cybersecurity:</strong>
              <span className="text-gray-700 ml-1">Wazuh SIEM, Fail2Ban, iptables, Trivy, TryHackMe</span>
            </div>
            <div>
              <strong className="text-gray-900">Cloud & Storage Platforms:</strong>
              <span className="text-gray-700 ml-1">Contabo S3, Webyn, Cloudflare DNS, rclone, rsync</span>
            </div>
            <div>
              <strong className="text-gray-900">Web/DB Stack:</strong>
              <span className="text-gray-700 ml-1">Nginx, Apache, PHP 8.3, MariaDB, MySQL</span>
            </div>
            <div>
              <strong className="text-gray-900">Identity & Access Management:</strong>
              <span className="text-gray-700 ml-1">Authentik, Pomerium (SSO)</span>
            </div>
            <div>
              <strong className="text-gray-900">Monitoring & Alerting:</strong>
              <span className="text-gray-700 ml-1">Postfix email alerts, log rotation, netdata</span>
            </div>
            <div>
              <strong className="text-gray-900">Version Control:</strong>
              <span className="text-gray-700 ml-1">Git, GitHub</span>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-4 print:mb-1">
          <div className="flex items-center gap-2 mb-2 print:mb-1">
            <Briefcase className="text-blue-600 print:w-3 print:h-3" size={20} />
            <h2 className="text-xl print:text-sm font-bold text-gray-900">PROFESSIONAL EXPERIENCE</h2>
          </div>
          <div className="border-l-2 border-blue-200 pl-3 print:pl-1 print:border-l-1">
            <div className="mb-1 print:mb-0">
              <h3 className="font-bold text-gray-900 text-lg print:text-xs">DevOps & Cloud Security Engineer</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-1 print:mb-0">
                <p className="text-blue-600 font-medium print:text-xs">Sagasoft Technologies</p>
                <p className="text-gray-600 text-sm print:text-xs">Dec 2024 – May 2025</p>
              </div>
              <p className="text-xs text-gray-600 mb-2 print:mb-0 italic">📜 Internship Certificate Available</p>
            </div>
            <ul className="space-y-1 print:space-y-0 text-sm print:text-xs text-gray-700 print:leading-tight">
              <li>• Provisioned and managed 100+ virtual machines using Proxmox with automated templates</li>
              <li>• Designed and implemented CI/CD pipelines in Jenkins for QA, Preprod, and Production environments</li>
              <li>• Deployed and managed full-stack applications including Frappe, Nextcloud, Mailcow, and Taiga</li>
              <li>• Configured Wazuh SIEM, Fail2Ban, and iptables for intrusion detection and mitigation</li>
              <li>• Automated backup systems using rclone (Contabo S3/NFS) and tested disaster recovery</li>
              <li>• Set up SSL, Nginx, and Postfix email alerts for server and security events</li>
              <li>• Enforced SSO and RBAC using Authentik and Pomerium for internal app access</li>
              <li>• Acted as the sole DevOps and Security engineer supporting internal production infrastructure</li>
            </ul>
          </div>
        </section>

        {/* Key Projects */}
        <section className="mb-4 print:mb-1">
          <div className="flex items-center gap-2 mb-2 print:mb-1">
            <Rocket className="text-blue-600 print:w-3 print:h-3" size={20} />
            <h2 className="text-xl print:text-sm font-bold text-gray-900">KEY PROJECTS</h2>
          </div>
          <div className="space-y-3 print:space-y-0">
            <div>
              <h3 className="font-bold text-gray-900 mb-1 print:mb-0 print:text-xs">Nextcloud CI/CD Deployment (Jenkins)</h3>
              <ul className="text-sm print:text-xs text-gray-700 space-y-1 print:space-y-0 print:leading-tight">
                <li>• Built pipeline to automate Nextcloud provisioning with PHP, MariaDB, SSL, and OAuth login</li>
                <li>• Integrated private GitLab repo, SMTP, and post-deployment health checks</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1 print:mb-0 print:text-xs">SIEM & Threat Detection System</h3>
              <ul className="text-sm print:text-xs text-gray-700 space-y-1 print:space-y-0 print:leading-tight">
                <li>• Deployed Wazuh stack in Docker for live monitoring</li>
                <li>• Configured alerts for login failures, brute-force, and unusual process behavior</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-1 print:mb-0 print:text-xs">Sagasuite Static App Deployment Pipeline</h3>
              <ul className="text-sm print:text-xs text-gray-700 space-y-1 print:space-y-0 print:leading-tight">
                <li>• Developed build.sh + deploy.sh for multi-env static app builds</li>
                <li>• Automated upload to Cloudflare Pages using rclone + Wrangler</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 print:gap-1">
          {/* Education */}
          <section>
            <div className="flex items-center gap-2 mb-2 print:mb-1">
              <GraduationCap className="text-blue-600 print:w-3 print:h-3" size={20} />
              <h2 className="text-xl print:text-sm font-bold text-gray-900">EDUCATION</h2>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 print:text-xs">B.E. Computer Science Engineering</h3>
              <p className="text-blue-600 font-medium text-sm print:text-xs">V.R.S College of Engineering & Technology, Tamil Nadu</p>
              <p className="text-gray-600 text-sm print:text-xs">2021 – 2025 | CGPA: 8.25 / 10</p>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <div className="flex items-center gap-2 mb-2 print:mb-1">
              <Award className="text-blue-600 print:w-3 print:h-3" size={20} />
              <h2 className="text-xl print:text-sm font-bold text-gray-900">CERTIFICATIONS</h2>
            </div>
            <ul className="space-y-1 print:space-y-0 text-sm print:text-xs text-gray-700 print:leading-tight">
              <li>• Python Programming – IBM / EduPre</li>
              <li>• CI/CD with Jenkins – Infosys Springboard</li>
              <li>• MEAN Stack Development – Muhabalab</li>
              <li>• Django Full Stack – Edunet Foundation</li>
            </ul>
          </section>

          {/* Cybersecurity & Cloud Security */}
          <section>
            <div className="flex items-center gap-2 mb-2 print:mb-1">
              <Shield className="text-blue-600 print:w-3 print:h-3" size={20} />
              <h2 className="text-xl print:text-sm font-bold text-gray-900">CYBERSECURITY & CLOUD SECURITY</h2>
            </div>
            <ul className="space-y-1 print:space-y-0 text-sm print:text-xs text-gray-700 print:leading-tight">
              <li>• TryHackMe: Completed 50+ rooms</li>
              <li>• Hardened Docker containers using Trivy, iptables, and Fail2Ban</li>
              <li>• Configured Postfix + Wazuh to email alerts on suspicious activity</li>
              <li>• Used Cloudflare DNS & HTTPS for app security and performance</li>
              <li>• Developed internal incident response checklist and firewall rules</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;