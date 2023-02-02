import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FC, MouseEventHandler, ReactNode } from "react";
import { useArcadeMachineContext } from "../../contexts/ArcadeMachineContext";

const ButtonVariants: Variants = {
  initial: {
    filter: "brightness(100%)",
    scale: 1,
  },
  tap: {
    filter: "brightness(85%)",
    scale: 0.975,
  },
};

const OpacityButtonVariants: Variants = {
  initial: {
    opacity: 0,
  },
  tap: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};

type HeaderButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const HeaderButton: FC<HeaderButtonProps> = ({ children, onClick }) => {
  return (
    <motion.button
      variants={ButtonVariants}
      initial="initial"
      whileTap="tap"
      onClick={onClick}
      className="h-inherit cursor relative w-[250px] flex-shrink-0"
    >
      {children}
    </motion.button>
  );
};

export const ArcadeHeader: FC = () => {
  const { setShowGameInstructions } = useArcadeMachineContext();

  const OpacityButton = (onClick: MouseEventHandler<HTMLButtonElement>) => {
    return (
      <motion.button
        variants={OpacityButtonVariants}
        initial="initial"
        whileTap="tap"
        onClick={onClick}
        className="mt-[22.5px] flex h-[160px] w-[227.5px] rounded-3xl bg-black/50"
      />
    );
  };

  return (
    <div className="flex h-[inherit] w-full flex-row justify-between px-[40px]">
      <a>{OpacityButton(() => setShowGameInstructions(true))}</a>
      <a
        href={process.env.NEXT_PUBLIC_DISCORD_LINK!}
        target="_blank"
        rel="no-referrer"
      >
        {OpacityButton(() => {
          console.log("Strategize on Discord");
        })}
      </a>
      {/* <HeaderButton onClick={() => setShowGameDetails(true)}>
        <Image priority fill src="/WhatsThisButton.svg" alt="What's This?" />
      </HeaderButton>
      <div className="relative h-full w-full flex-grow">
        <Image priority fill src="/MainLogo.svg" alt="Leela vs The World" />
      </div>*/}

      <HeaderButton
        onClick={() => {
          console.log("Strategize on Discord");
        }}
      >
        <a href={process.env.DISCORD_LINK!} target="_blank" rel="no-referrer">
          <Image
            priority
            fill
            src="/StrategizeButton.svg"
            alt="Strategize On Discord"
          />
        </a>
      </HeaderButton>
    </div>
  );
};
