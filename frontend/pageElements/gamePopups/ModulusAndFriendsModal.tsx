import Modal from "react-modal";
import { useArcadeMachineContext } from "../../contexts/ArcadeMachineContext";
import { BasicModal } from "../../components/modals/BasicModal";
import { OutlineButton } from "../../components/buttons/OutlineButton";

// --- To display messages to user ---
export const ModulusAndFriendsModal = () => {
  const { showModulusAndFriendsModal, setShowModulusAndFriendsModal } =
    useArcadeMachineContext();

  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={showModulusAndFriendsModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "80%",
            backgroundColor: "white",
          },
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {/* --- TODO(ryancao): Change the link --- */}
          <span
            style={{
              fontSize: 15,
              fontWeight: "bolder",
              textDecorationLine: "underline",
            }}
          >
            {"Acknowledgements"}
          </span>
          <span style={{ fontSize: 15, marginBottom: 20 }}>
            {'"Leela vs the World" was built by our many frens!'}
          </span>

          <span
            style={{
              fontSize: 15,
              fontWeight: "bolder",
              textDecorationLine: "underline",
            }}
          >
            {"Leela's code!!"}
          </span>
          <span style={{ marginBottom: 20, fontSize: 15 }}>
            {"- Leela vs. the World Repository: "}
            <a
              href={"https://github.com/Modulus-Labs/leela_vs_world"}
              target={"_blank"}
              style={{ textDecorationLine: "underline" }}
            >
              {"GitHub"}
            </a>
          </span>

          <span
            style={{
              fontSize: 15,
              fontWeight: "bolder",
              textDecorationLine: "underline",
            }}
          >
            {"Modulus frens who made this possible"}
          </span>
          <span style={{ fontSize: 15 }}>
            {"- Our project PMs and "}
            <a href={"https://twitter.com/VsLeela"} target={"_blank"}>
              <span style={{ textDecorationLine: "underline" }}>
                {"Leela Tweeters"}
              </span>
            </a>
            {": "}
            <a href={"https://portfolio-iota-neon-14.vercel.app/"} target={"_blank"}>
              <span style={{ textDecorationLine: "underline" }}>
                {"Manmit Singh"}
              </span>
            </a>
            {" and Allison Qi"}
          </span>
          <span style={{ fontSize: 15 }}>
            {"- The intrepid betting contract team: "}
            <a href={"https://twitter.com/ErikSal1217"} target={"_blank"}>
              <span style={{ textDecorationLine: "underline" }}>
                {"Erik Salazar"}
              </span>
            </a>
            {", Jongwon, and "}
            <a href={"https://www.linkedin.com/in/tharun-kumar-tiruppali-kalidoss-0170441b5/"} target={"_blank"}>
              <span style={{ textDecorationLine: "underline" }}>
                {"Tharun K"}
              </span>
            </a>
          </span>
          <span style={{ fontSize: 15 }}>
            {"- The spectacular chess contract team: Allison Qi, "}
            <a href={"https://www.linkedin.com/in/lincolnmurr/"} target={"_blank"}>
              <span style={{ textDecorationLine: "underline" }}>
                {"Lincoln Murr"}
              </span>
            </a>
            {", "}
            <a href={"https://twitter.com/yumat_10"} target={"_blank"}>
              <span style={{ textDecorationLine: "underline" }}>
                {"Yuma Tanaka"}
              </span>
            </a>
            {", and Erik Salazar"}
          </span>
          <span style={{ fontSize: 15 }}>
            {
              "- The jaw-dropping frontend team: Yuma Tanaka, Jongwon, Tharun K and Brandon Qi"
            }
          </span>
          <span style={{ fontSize: 15 }}>
            {"- And for the "}
            <a
              href={"https://audius.co/ModulusLabs/leela-ascends"}
              target={"_blank"}
            >
              <span style={{ textDecorationLine: "underline" }}>
                {"out-of-this-world music"}
              </span>
            </a>
            {": Ryan Cao"}
          </span>
          <span style={{ fontSize: 15, marginBottom: 20 }}>
            {
              "A final special thanks to the thousands of pioneering playtesters who joined our journey. Y'all are bonafide heroes, and your feedback made Leela a much better game for all of us."
            }
          </span>

          <span
            style={{
              fontSize: 15,
              fontWeight: "bolder",
              textDecorationLine: "underline",
            }}
          >
            {"Invaluable Resources"}
          </span>

          <span style={{ fontSize: 15 }}>
            {"- Halo2 implementation: "}
            <a
              href={"https://github.com/privacy-scaling-explorations/halo2"}
              target={"_blank"}
              style={{ textDecorationLine: "underline" }}
            >
              {"GitHub"}
            </a>
          </span>

          <span style={{ fontSize: 15 }}>
            {"- Axiom's Halo2 verifier implementation: "}
            <a
              href={"https://github.com/axiom-crypto/snark-verifier"}
              target={"_blank"}
              style={{ textDecorationLine: "underline" }}
            >
              {"GitHub"}
            </a>
          </span>

          <span style={{ marginBottom: 20, fontSize: 15 }}>
            {"- Implementation of trained PyTorch LC0 policy networks: "}
            <a
              href={"https://github.com/dkappe/badgyal"}
              target={"_blank"}
              style={{ textDecorationLine: "underline" }}
            >
              {"GitHub"}
            </a>
          </span>
          <OutlineButton
            text="Cool beans!"
            onClick={() => {
              setShowModulusAndFriendsModal(false);
            }}
            className="mx-auto"
          />
        </div>
      </Modal >
    </div >
  );
};
