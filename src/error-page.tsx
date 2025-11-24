import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <p>
        {error.status} {error.statusText}
      </p>
    );
  } else if (error instanceof Error) {
    return <p>{error.message}</p>;
  } else if (typeof error === "string") {
    return <p>{error}</p>;
  } else {
    return <p>Unknown error</p>;
  }
}

export default ErrorPage;
