import { useMemo } from "react";
import Button from "./Button";

interface alertsProps {
  title: string;
  text: string;
  type: string;
}

export default function Card(props: alertsProps) {
  const iconButton = (
    <svg
      className="-ml-0.5 mr-2 h-4 w-4"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path
        fillRule="evenodd"
        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  const typeAlert = useMemo(() => {
    if (props.type === "info") return "";
    if (props.type === "warn") return "";
    if (props.type === "danger") return "";
  }, [props]);

  return (
    <div
      id="alert-additional-content-1"
      className="min-w-full p-4 mb-4 bg-blue-100 rounded-lg dark:bg-blue-200"
      role="alert"
    >
      <div className="flex items-center">
        <svg
          className="mr-2 w-5 h-5 text-blue-700 dark:text-blue-800"
          fill="currentColor"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
        <h3 className="text-lg font-medium text-blue-700 dark:text-blue-800">
          {props.title}
        </h3>
      </div>
      <div className="mt-2 mb-4 text-sm text-blue-700 dark:text-blue-800">
        {props.text}
      </div>
      <div className="flex">
        <Button title="Click me" type="primary" size="sm" icon={iconButton} />
        <Button title="Click me" type="outline" size="sm" />
      </div>
    </div>
  );
}
