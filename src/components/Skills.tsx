import { motion } from "framer-motion";


const Skill = ({ name, x, y }: { name: string; x: string; y: string }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            animate={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
            className={`
                flex item-center justify-center rounded-full font-semibold bg-dark text-light textligt
                py-3 px-6 shadow-dark cursor-pointer absolute
            `}
        >
            {name}
        </motion.div>
    );
};

export default function Skills() {
    return (
        <>
            <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`
                        flex item-center justify-center rounded-full font-semibold bg-dark text-light textligt
                        p-8 shadow-dark cursor-pointer
                    `}
                >
                    Web
                </motion.div>

                <Skill name='NestJs' x="-16vw" y="18vw" />
                <Skill name='GO' x="2vw" y="13vw" />
                <Skill name='Python' x="12vw" y="-5vw" />
                <Skill name='Java' x="3vw" y="-15vw" />
                <Skill name='Javascript' x="-12vw" y="2vw" />
                <Skill name='Tailwind CSS' x="-7vw" y="15vw" />
                <Skill name='Django' x="12vw" y="-12vw" />
                <Skill name='FastAPI' x="20vw" y="6vw" />
                <Skill name='Flask' x="5vw" y="-20vw" />
                <Skill name='ExpressJs' x="-20vw" y="10vw" />
                <Skill name='HTML' x="-10vw" y="-3vw" />
                <Skill name='CSS' x="-10vw" y="-10vw" />
                <Skill name='NextJS' x="-20vw" y="-15vw" />
                <Skill name='React' x="-20vw" y="-5vw" />
            </div>
        </>
    );
};