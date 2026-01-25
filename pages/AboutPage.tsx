import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { CardContainer, CardBody, CardItem } from '../components/ui/ThreeDCard';
import { VanishText } from '../components/ui/VanishText';
import { VideoBackground } from '../components/ui/VideoBackground';

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
            {/* Cinematic Video Background */}
            <VideoBackground
                src="https://assets.mixkit.co/videos/preview/mixkit-abstract-motion-of-white-particles-2023-large.mp4"
                opacity={0.3}
                overlayClassName="bg-white/70"
            />

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
                            <VanishText text="About Kyaani" className="block" />
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
                                { title: "Tailored Solutions", desc: "We understand the unique demands of large enterprises and government bodies. Our solutions are explicitly tailored.", delay: 0 },
                                { title: "Expertise", desc: "Our team comprises the brightest minds in AI and legal tech. We bring decades of domain experience to the table.", delay: 0.1 },
                                { title: "Innovation", desc: "We are at the forefront of gen-AI. We ensure our clients have access to the most powerful LLMs safely.", delay: 0.2 }
                            ].map((item, i) => (
                                <CardContainer key={i} className="inter-var w-full h-full" containerClassName="py-0">
                                    <CardBody className="bg-surface/50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-8 border">
                                        <CardItem
                                            translateZ="50"
                                            className="text-2xl font-serif mb-4 text-textMain"
                                        >
                                            {item.title}
                                        </CardItem>
                                        <CardItem
                                            as="p"
                                            translateZ="60"
                                            className="text-textMuted text-sm max-w-sm mt-2 leading-relaxed"
                                        >
                                            {item.desc}
                                        </CardItem>
                                        <div className="flex justify-between items-center mt-8">
                                            <CardItem
                                                translateZ={20}
                                                as="button"
                                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                            >
                                                Learn more →
                                            </CardItem>
                                        </div>
                                    </CardBody>
                                </CardContainer>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutPage;
