import { NodeProps, useReactFlow, Position } from "@xyflow/react";
import { RxCross2 } from "react-icons/rx";
import CustomHandle from "./CustomHandle";

const PaymentProviderImages: { [code: string]: string } = {
  St: "https://cdn.worldvectorlogo.com/logos/stripe-2.svg",
  Ap: "https://cdn.worldvectorlogo.com/logos/apple-14.svg",
  Gp: "https://cdn.worldvectorlogo.com/logos/google-g-2015.svg",
  Pp: "https://avatars.githubusercontent.com/u/476675?s=280&v=4",
  Am: "https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
};

const PaymentProvider = ({
  data: { name, code },
  id,
}: NodeProps<{ name: string; code: string }>) => {
  const { setNodes } = useReactFlow();
  return (
    <div className="img-container">
      <div className="img-box">
        <img src={PaymentProviderImages[code]} className="img-pic" />
      </div>
      <div>
        <p className="provider-name">{name}</p>
      </div>
      <div
        className="cancel"
        onClick={() =>
          setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id))
        }
      >
        <RxCross2 />
      </div>
      <CustomHandle type="target" position={Position.Left} />
    </div>
  );
};

export default PaymentProvider;
