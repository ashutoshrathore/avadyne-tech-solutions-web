
import React from 'react';
import { Cloud, Cog, TestTube, Code, Shield, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Cog,
      title: 'DevOps & Cloud Engineering',
      description: 'Build fast, scale smart. We design and manage CI/CD pipelines, infrastructure-as-code, and cloud-native environments with automation at the core.',
      features: [
        'CI/CD Pipeline Design & Implementation',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Container Orchestration (Kubernetes, Docker)',
        'Monitoring & Observability Setup',
        'Performance Optimization',
        'Automated Scaling Solutions'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud Migration & Optimization',
      description: 'Whether you\'re moving to the cloud or improving existing infrastructure, we ensure secure, scalable, and cost-efficient solutions.',
      features: [
        'AWS, Azure, GCP Migration Strategies',
        'Multi-cloud Architecture Design',
        'Cost Optimization & Resource Management',
        'Cloud Security Implementation',
        'Disaster Recovery Planning',
        'Legacy System Modernization'
      ]
    },
    {
      icon: TestTube,
      title: 'QA Automation & Testing',
      description: 'We implement robust test strategies, automation frameworks, and CI-integrated quality checks to boost your release confidence.',
      features: [
        'Test Automation Framework Development',
        'API Testing & Validation',
        'Performance & Load Testing',
        'Security Testing Implementation',
        'Cross-browser & Mobile Testing',
        'Continuous Testing Integration'
      ]
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'From MVPs to enterprise-grade systems, we build backend services, APIs, and full-stack applications using modern frameworks.',
      features: [
        'Full-stack Web Applications',
        'RESTful & GraphQL API Development',
        'Microservices Architecture',
        'Database Design & Optimization',
        'Mobile Application Development',
        'System Integration Solutions'
      ]
    },
    {
      icon: Shield,
      title: 'Security & Compliance Readiness',
      description: 'Security is built in—not bolted on. We help you enforce DevSecOps, IAM, and compliance checks that fit your industry standards.',
      features: [
        'DevSecOps Implementation',
        'Identity & Access Management (IAM)',
        'GDPR, SOC2, ISO 27001 Compliance',
        'Security Audits & Penetration Testing',
        'Vulnerability Management',
        'Incident Response Planning'
      ]
    },
    {
      icon: Users,
      title: 'Offshore Engineering Teams',
      description: 'Need extended teams at a lean cost? Our India-based experts, led and quality-assured from Europe, offer top-tier skills without the overhead.',
      features: [
        'Dedicated Development Teams',
        'European Project Management',
        'Quality Assurance from Europe',
        'Flexible Scaling Options',
        'Cost-effective Solutions',
        'Time Zone Coverage'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Technology Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology services designed to accelerate your digital transformation 
              and drive sustainable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Deliver
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end technology solutions that transform your business operations 
              and accelerate your time to market.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your business goals and technical requirements' },
              { step: '02', title: 'Planning', description: 'Detailed project roadmap with milestones and deliverables' },
              { step: '03', title: 'Development', description: 'Agile development with continuous integration and testing' },
              { step: '04', title: 'Deployment', description: 'Seamless deployment with ongoing support and monitoring' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
