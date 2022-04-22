import { useMemo } from "react";

interface buttonProps {
  title: string;
  type: string;
  size: string;
  icon?: any;
  onClick?: Function;
}

export default function Button(props: buttonProps) {
  const typeButton = useMemo(() => {
    if (props.type === "primary")
      return "text-white bg-blue-500 hover:shadow-sm active:bg-blue-800";
    if (props.type === "secondary")
      return "text-white bg-orange-400 hover:shadow-sm active:bg-orange-800";
    if (props.type === "success")
      return "text-white bg-green-400 hover:shadow-sm active:bg-green-700";
    if (props.type === "danger")
      return "text-white bg-red-400 hover:shadow-sm active:bg-red-700";
    if (props.type === "outline")
      return "outline outline-1 outline-gray-300 hover:outline-2 active:outline-1";
    if (props.type === "disable") return "bg-gray-200 text-gray-400";
  }, [props]);

  const sizeButton = useMemo(() => {
    if (props.size === "xsm") return "px-3 py-1 mr-2 mb-2";
    if (props.size === "sm") return "px-3.5 py-1.5 mr-2 mb-2";
    if (props.size === "base") return "px-4 py-2.5 mr-2 mb-2";
    if (props.size === "lg") return "px-7 py-3 mr-2 mb-2";
    if (props.size === "xlg") return "px-10 py-4 mr-2 mb-2";
  }, [props]);

  return (
    <button
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className={`${typeButton} ${sizeButton} ${
        props.size === "xsm" ? "font-small" : "font-medium"
      }  text-center rounded-md text-sm transition duration-200`}
    >
      <span className="flex items-center">
        {props.icon ? props.icon : null}
        {props.title}
      </span>
    </button>
  );
}
