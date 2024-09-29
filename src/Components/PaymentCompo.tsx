import { NodeProps, Position } from "@xyflow/system";
import CustomHandle from "./CustomHandle";

const Payment = ({ data: { amount } }: NodeProps<{ amount: number }>) => {
  return (
    <div className="payment-main">
      <div className="box1">
        <p>Payment Initialized</p>
      </div>
      <div>
        <p className="para-amount">${amount}</p>
      </div>
      <CustomHandle type="source" position={Position.Right} />
    </div>
  );
};

export default Payment;
