import banks from "../images/banks.png";
import banks2 from "../images/banks2.png";
import banks3 from "../images/banks3.png";
import svg from "../images/svg.png";
import svgSm from "../images/svgSm.png";
import { motion } from "framer-motion";
import { useWindowSize, useMediaQuery, useOnScreen } from "../hooks";
import { useEffect, useState, useRef } from "react";

const Details = () => {
    const windowSize = useWindowSize();
    const isPhone = useMediaQuery("(max-width: 768px)");
    const [right, setRight] = useState(0);

    const ref = useRef();
    const inView = useOnScreen(ref);

    useEffect(() => {
        const details = document.querySelector(".details");
        setRight(details.getBoundingClientRect().left);
    }, [windowSize, inView, right]);

    return (
        <div className="container">
            <section className="details">
                <div className="row">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="col-text"
                    >
                        <h2>One physical card tied to all bank accounts</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
                            vel in mollis quis euismod in aliquam facilisi purus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
                            vel in mollis quis euismod in aliquam facilisi purus.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="col-image"
                    >
                        <img src={banks} width={499} height={420} alt="bank card" />
                    </motion.div>
                </div>
                <div className="row">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="col-image"
                    >
                        <img src={banks2} width={499} height={420} alt="bank card" />
                    </motion.div>
                    <motion.div className="col-text"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}>
                        <h2>Add your bank account and spend straight from Yoba</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
                            vel in mollis quis euismod in aliquam facilisi purus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
                            vel in mollis quis euismod in aliquam facilisi purus.
                        </p>
                    </motion.div>
                </div>
                <div className="row">
                    <motion.div className="col-text"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}>
                        <h2>Have access to a dollar with a large limit.</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
                            vel in mollis quis euismod in aliquam facilisi purus.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
                            vel in mollis quis euismod in aliquam facilisi purus.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="col-image"
                    >
                        <img src={banks3} width={499} height={420} alt="bank card" />
                    </motion.div>
                </div>

                {!isPhone ? (
                    <img
                        style={{ right: `-${right}px` }}
                        className="img"
                        src={svg}
                        alt="svg"
                    />
                ) : (
                    <img
                        style={{ right: `-${right}px` }}
                        className="img"
                        src={svgSm}
                        alt="svg"
                    />
                )}
            </section>
        </div>
    );
};

export default Details;
