import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="pt-32 pb-20 min-h-screen bg-bgMain text-textMain font-sans">
            <div className="max-w-5xl mx-auto px-6">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-5xl md:text-6xl font-serif font-medium mb-8 leading-[1.1] text-textMain tracking-tight">About Kyaani</h1>
                    <p className="text-xl text-textMuted mb-8 leading-relaxed">
                        At Kyaani, we are pioneering the future of AI-driven solutions, proudly headquartered in the vibrant tech hub of Berlin, Germany.
                        With a singular focus on catering to the specific needs of large-scale B2B businesses and government organizations,
                        we have established ourselves as a trusted partner in the realm of artificial intelligence and cutting-edge software applications.
                    </p>
                </div>

                <div className="w-full aspect-video rounded-3xl overflow-hidden mb-20 shadow-2xl border border-black/5">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" className="w-full h-full object-cover" alt="Kyaani Office Berlin" />
                </div>

                <div className="grid md:grid-cols-2 gap-16 mb-20">
                    <div>
                        <h2 className="text-3xl font-serif mb-4">Our Expertise</h2>
                        <p className="text-lg text-textMuted leading-relaxed">
                            Our journey is defined by a commitment to innovation and excellence. We harness the limitless potential of AI to design, develop, and deliver powerful software solutions.
                            Our passion lies in creating platforms that address complex challenges, streamline operations, and drive efficiency.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-serif mb-4">Our Mission</h2>
                        <p className="text-lg text-textMuted leading-relaxed">
                            At Kyaani, our mission is clear: to empower large-scale B2B businesses and government institutions with cutting-edge AI software.
                            We believe in leveraging technology to drive progress, enhance productivity, and ultimately, shape a better future for our clients and their stakeholders.
                        </p>
                    </div>
                </div>

                <div className="bg-surface rounded-2xl p-10 border border-black/5">
                    <h2 className="text-3xl font-serif mb-8 text-center">Why Choose Us?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Tailored Solutions</h3>
                            <p className="text-textMuted text-sm leading-relaxed">We understand the unique demands of large enterprises and government bodies. Our solutions are meticulously tailored to meet their specific needs.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Expertise</h3>
                            <p className="text-textMuted text-sm leading-relaxed">Our team comprises some of the brightest minds in the AI and software development industry. We bring years of experience to the table.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                            <p className="text-textMuted text-sm leading-relaxed">We are continuously at the forefront of technological advancements, ensuring that our clients have access to the latest and most powerful AI tools.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;
