import React from 'react';
import { motion } from 'framer-motion';
import { usePageTransition } from '../hooks/usePageTransition';

const About = () => {
  const { pageVariants } = usePageTransition();

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="min-h-screen bg-black text-white"
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center z-10"
        >
          <h1 className="text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're a team of innovators, dreamers, and creators dedicated to pushing the boundaries of what's possible.
          </p>
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="max-w-4xl mx-auto px-4 py-20 space-y-20">
        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">Our Vision</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            To create a world where technology seamlessly enhances human potential, where innovation serves as a bridge
            between imagination and reality. We envision a future where digital experiences are not just functional, but
            transformative.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">Our Mission</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            To empower businesses and individuals with cutting-edge solutions that drive growth, foster creativity, and
            create lasting impact. We're committed to delivering excellence in every project, pushing boundaries, and
            setting new standards in the digital landscape.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'Constantly pushing boundaries and exploring new possibilities.',
              },
              {
                title: 'Excellence',
                description: 'Delivering the highest quality in everything we do.',
              },
              {
                title: 'Integrity',
                description: 'Building trust through honest and transparent relationships.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="p-6 bg-gray-900 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'John Doe',
                role: 'Founder & CEO',
                description: 'Visionary leader with 15+ years of experience in technology and innovation.',
              },
              {
                name: 'Jane Smith',
                role: 'Creative Director',
                description: 'Award-winning designer passionate about creating meaningful digital experiences.',
              },
              {
                name: 'Mike Johnson',
                role: 'Lead Developer',
                description: 'Full-stack expert dedicated to building robust and scalable solutions.',
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="p-6 bg-gray-900 rounded-lg"
              >
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-blue-500 mb-3">{member.role}</p>
                <p className="text-gray-400">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About; 