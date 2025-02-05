import { motion } from "framer-motion";


const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: {duration: 1.5} }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className={`
                flex item-center justify-center rounded-full font-semibold bg-dark text-light
                py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
                lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
                xs:text-dark xs:dark:text-light xs:font-bold
            `}
        >
            {name}
        </motion.div>
    );
};

export default function Skills() {
    return (
        <>
            <h2 className="font-bold text-8xl md:text-6xl xs:text-4xl mb-32 md:mb-16 xs:mb-6 mt-64 w-full text-center">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
                lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm"
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`
                        flex item-center justify-center rounded-full font-semibold bg-dark text-light
                        p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2
                    `}
                >
                    Web
                </motion.div>

                <Skill name='NestJs' x="30vw" y="-10vw" />
                <Skill name='GO' x="-25vw" y="15vw" />
                <Skill name='Python' x="12vw" y="-5vw" />
                <Skill name='Java' x="3vw" y="-15vw" />
                <Skill name='Javascript' x="-18vw" y="5vw" />
                <Skill name='Tailwind CSS' x="-7vw" y="15vw" />
                <Skill name='Django' x="15vw" y="-12vw" />
                <Skill name='FastAPI' x="20vw" y="6vw" />
                <Skill name='Flask' x="5vw" y="-20vw" />
                <Skill name='ExpressJs' x="20vw" y="13vw" />
                <Skill name='HTML' x="-10vw" y="-3vw" />
                <Skill name='CSS' x="-10vw" y="-10vw" />
                <Skill name='NextJS' x="-20vw" y="-15vw" />
                <Skill name='React' x="-25svw" y="-5vw" />
            </div>
        </>
    );
};