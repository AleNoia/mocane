import { useMemo } from "react";

interface alertsProps {
  type: string;
  text: string;
  title?: string;
}

export default function NotificationAlert(props: alertsProps) {
  const typeAlert = useMemo(() => {
    if (props.type === "info")
      return "text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800";
    if (props.type === "danger")
      return "text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800";
    if (props.type === "success")
      return "text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800";
    if (props.type === "warn")
      return "text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800";
    if (props.type === "sucess")
      return "text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800";
    if (props.type === "dark")
      return "text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300";
  }, [props]);

  return (
    <div className={`flex p-4 mb-4 text-sm ${typeAlert}`} role="alert">
      <svg
        className="inline flex-shrink-0 mr-3 w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        ></path>
      </svg>
      <div>
        <span className="font-medium">
          {props.title
            ? props.title
            : props.type.charAt(0).toUpperCase() + props.type.slice(1)}{" "}
          alert!
        </span>{" "}
        {props.text}
      </div>
    </div>
  );
}
