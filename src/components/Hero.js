import { useWindowSize, useMediaQuery, useOnScreen } from "../hooks";
import { useEffect, useState, useRef, useReducer } from "react";
import { motion } from "framer-motion";
import { useQuery, gql } from "@apollo/client";

const HERO_GQL = gql`
  {
    homePageCollection {
      items {
        heroDescription
        heroImage {
          url
        }
        heroImageMobile {
          url
        }
      }
    }
  }
`;

const Hero = () => {
    const { loading, error, data } = useQuery(HERO_GQL);
    const windowSize = useWindowSize();
    const isTablet = useMediaQuery("(max-width: 1041px)");
    const isPhone = useMediaQuery("(max-width: 650px)");
    const [right, setRight] = useState(0);
    const [query, setQuery] = useState({});
    const [btnText, setBtnText] = useState("Get Early Access");

    useEffect(() => {
        if (!loading && !error && data) {
            setQuery(data.homePageCollection.items[0]);
        }
    }, [loading, error, data]);

    //  FRAMER ANIMATIONS
    const ref = useRef();
    const inView = useOnScreen(ref);

    useEffect(() => {
        if (ref.current && ref.current.width) {
            setRight((windowSize.width - ref.current.width) / 2);
        }
    }, [windowSize, inView]);

    //  FORM SETUP
    const initialValues = {
        email: "",
    }
    const reducer = (currentState, nextState) => ({ ...currentState, ...nextState });
    const [values, setValues] = useReducer(reducer, initialValues);

    const onChange = (e) => {
        setValues({ [e.target.name]: e.target.value });
    }

    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": e.target.getAttribute("name"),
                ...values,
            })
        })
            .then(() => {
                setTimeout(() => {
                    setBtnText("Email Received");
                }, 1000);
                setTimeout(() => {
                    setBtnText("Get Early Access");
                }, 2500);
            })
            .catch((e) => console.log("Error :", e));
    };


    return (
        <section className="hero">
            <motion.h2
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "tween", delay: 0.4, duration: 0.6 }}
            >
                Spend freely in
                <br />
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "reverse",
                        duration: 1,
                    }}
                    className="flicker"
                >
                    Any Currency
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <ellipse cx="8" cy="7.789" rx="8" ry="7.55963" fill="#C3F94E" />
                    </svg>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <ellipse cx="8" cy="7.789" rx="8" ry="7.55963" fill="#C3F94E" />
                    </svg>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <ellipse cx="8" cy="7.789" rx="8" ry="7.55963" fill="#C3F94E" />
                    </svg>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <ellipse cx="8" cy="7.789" rx="8" ry="7.55963" fill="#C3F94E" />
                    </svg>
                </motion.span>
                when you shop!
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "tween", delay: 0.8, duration: 0.6 }}
            >
                <span>{query.heroDescription}</span>
            </motion.p>

            <motion.form
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "tween", delay: 1.2, duration: 0.6 }}
                className="input-area"
                name="contact"
                method="post"
                onSubmit={handleSubmit}
                data-netlify="true"
            >
                <input type="hidden" name="form-name" value="contact" />
                <motion.input
                    whileHover={{ borderColor: "#d0fa76", scale: 1.02 }}
                    transition={{ type: "tween" }}
                    type="email"
                    placeholder="Email address"
                    value={values.name}
                    onChange={onChange}
                    name="email"
                    required
                />
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "tween" }}
                    type="submit"
                >
                    {btnText}
                </motion.button>
            </motion.form>

            {!isPhone ? (
                <motion.img
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "tween", delay: 1.6, duration: 0.6 }}
                    whileInView={{ x: 0 }}
                    style={{
                        left: `${isTablet ? 0 : `${right}px`}`,
                        width: `${isTablet ? "100%" : ""}`,
                    }}
                    className="phoneImg"
                    src={query.heroImage && query.heroImage.url}
                    alt="phone"
                    width={1039}
                // height={488}
                />
            ) : (
                <motion.img
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileInView={{ x: 0 }}
                    transition={{ type: "tween", delay: 1.6, duration: 0.6 }}
                    style={{ left: `${right}px` }}
                    className="phoneImg"
                    src={query.heroImageMobile && query.heroImageMobile.url}
                    alt="phone"
                    width={414}
                // height={375}
                />
            )}
        </section>
    );
};

export default Hero;
