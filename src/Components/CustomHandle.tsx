import { Handle, HandleProps } from "@xyflow/react";

const CustomHandle = (props: HandleProps) => {
  return (
    <Handle
      style={{
        width: 8,
        height: 8,
        background: "white",
        border: "2px solid black",
      }}
      {...props}
    />
  );
};

export default CustomHandle;
