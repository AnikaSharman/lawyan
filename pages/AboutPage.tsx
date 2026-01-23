import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const AboutPage: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

    // Explicitly type style object for Framer Motion compatibility
    const parallaxStyle: { y: MotionValue<number> } = { y };

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div ref={containerRef} className="min-h-screen bg-bgMain text-textMain font-sans overflow-hidden">
            {/* Ambient Background Gradient (Aurora Effect) */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-200/20 blur-[120px] rounded-full mix-blend-multiply animate-blob filter" />
                <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-200/20 blur-[120px] rounded-full mix-blend-multiply animate-blob animation-delay-2000 filter" />
                <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-pink-200/20 blur-[120px] rounded-full mix-blend-multiply animate-blob animation-delay-4000 filter" />
            </div>

            <div className="relative z-10 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Hero Section */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="max-w-4xl mb-24"
                    >
                        <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-serif font-medium mb-8 leading-[1.1] text-textMain tracking-tight">
                            About <span className="italic text-gray-500">Kyaani</span>
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-2xl text-textMuted mb-8 leading-relaxed font-light">
                            At Kyaani, we are pioneering the future of AI-driven solutions, proudly headquartered in the vibrant tech hub of Berlin, Germany.
                            With a singular focus on catering to the specific needs of large-scale B2B businesses and government organizations,
                            we have established ourselves as a trusted partner in the realm of artificial intelligence and cutting-edge software applications.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="h-px w-32 bg-accent-primary/30" />
                    </motion.div>

                    {/* Parallax Image Section */}
                    <div className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-32 shadow-2xl border border-white/10 group">
                        <motion.div style={parallaxStyle} className="absolute inset-0">
                            <img
                                src="/images/lawyan_about_hero.png"
                                className="w-full h-[120%] object-cover transform -translate-y-[10%]"
                                alt="Kyaani Legal AI Headquarters"
                            />
                        </motion.div>
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-700" />
                    </div>

                    {/* Mission & Expertise - Split Layout */}
                    <div className="grid md:grid-cols-2 gap-20 mb-32 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-sm font-bold uppercase tracking-widest text-accent-primary mb-4 block">Our Expertise</span>
                            <h2 className="text-4xl font-serif mb-6">Innovation & Excellence</h2>
                            <p className="text-lg text-textMuted leading-relaxed">
                                Our journey is defined by a commitment to innovation and excellence. We harness the limitless potential of AI to design, develop, and deliver powerful software solutions.
                                Our passion lies in creating platforms that address complex challenges, streamline operations, and drive efficiency.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <span className="text-sm font-bold uppercase tracking-widest text-accent-primary mb-4 block">Our Mission</span>
                            <h2 className="text-4xl font-serif mb-6">Empowering the Future</h2>
                            <p className="text-lg text-textMuted leading-relaxed">
                                At Kyaani, our mission is clear: to empower large-scale B2B businesses and government institutions with cutting-edge AI software.
                                We believe in leveraging technology to drive progress, enhance productivity, and ultimately, shape a better future for our clients and their stakeholders.
                            </p>
                        </motion.div>
                    </div>

                    {/* Bento Grid - Why Choose Us */}
                    <div className="mb-20">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-serif mb-12 text-center"
                        >
                            Why Choose Us?
                        </motion.h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { title: "Tailored Solutions", desc: "We understand the unique demands of large enterprises and government bodies. Our solutions are meticulously tailored to meet their specific needs.", delay: 0 },
                                { title: "Expertise", desc: "Our team comprises some of the brightest minds in the AI and software development industry. We bring years of experience to the table.", delay: 0.1 },
                                { title: "Innovation", desc: "We are continuously at the forefront of technological advancements, ensuring that our clients have access to the latest and most powerful AI tools.", delay: 0.2 }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: item.delay, duration: 0.5 }}
                                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                    className="bg-surface/50 backdrop-blur-sm p-10 rounded-[2rem] border border-black/5 hover:border-accent-primary/30 hover:shadow-2xl hover:shadow-accent-primary/10 transition-all duration-300 group"
                                >
                                    <h3 className="text-2xl font-serif mb-4 group-hover:text-accent-primary transition-colors">{item.title}</h3>
                                    <p className="text-textMuted leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutPage;
