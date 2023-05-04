import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Button = styled.div`
  z-index: 99;
  cursor: pointer;
`;

interface PathProps {
  d: string;
  stroke: string;
  animate: string;
  initial: boolean;
  variants: {
    closed: {
      d?: string;
      stroke?: string;
      opacity?: number | undefined;
    };
    open: {
      d?: string;
      stroke?: string;
      opacity?: number | undefined;
    };
  };
  transition: {
    duration: number;
  };
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);

interface MenuToggleProps {
  toggle: () => void;
  isOpen: boolean;
}

const transition = { duration: 0.33 };
//hamberger
export function MenuToggle({ toggle, isOpen }: MenuToggleProps) {
  return (
    <Button onClick={toggle}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsl(0, 0%, 18%)" },
            open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(0, 0%, 18%)" },
          }}
          transition={transition}
          d={""}
          stroke={""}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke="hsl(0, 0%, 18%)"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346", stroke: "hsl(0, 0%, 18%)" },
            open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(0, 0%, 18%)" },
          }}
          transition={transition}
          d={""}
          stroke={""}
        />
      </svg>
    </Button>
  );
}
