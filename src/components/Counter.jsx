import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function Counter({ endValue, duration = 0.8 }) {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        value: endValue,
        transition: { duration, ease: "easeOut" },
      });
    }
  }, [inView, endValue, duration, controls]);

  return (
    <motion.span
      ref={ref}
      className="text-3xl font-bold"
      animate={controls}
      onUpdate={(latest) => setCount(Math.round(latest.value))}
    >
      {count}
    </motion.span>
  );
}

export default Counter;
