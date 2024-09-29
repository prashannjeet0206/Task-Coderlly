import { NodeProps, Position } from "@xyflow/react";
import ReactCountryFlag from "react-country-flag";
import CustomHandle from "./CustomHandle";
const PaymentCountry = ({
  data: { currency, country, countryCode },
}: NodeProps<{
  currency: string;
  country: string;
  countryCode: string;
}>) => {
  return (
    <div className="flag-main">
      <div>
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          aria-label={country}
          style={{ fontSize: "3em", lineHeight: "2em" }}
        />
      </div>
      <div className="country-font">
        <p>{country}</p>
        <p>{currency}</p>
      </div>
      <CustomHandle type="source" position={Position.Right} />
      <CustomHandle type="target" position={Position.Left} />
    </div>
  );
};

export default PaymentCountry;
