import { NextPage } from "next";
import { useEffect, useState } from "react";
import { IApplication } from "../../src/features/applications/types/IApplication";

const Applications: NextPage = () => {
  // TODO Rewrite to use ReactQuery
  const [isLoading, setIsLoading] = useState(false);
  const [applications, setApplications] = useState<IApplication[] | undefined>(
    undefined
  );
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);

    const getApplications = async () =>
      fetch("/api/applications")
        .then((response) => {
          if (response.status >= 400) {
            throw new Error(`${response.status} ${response.statusText}`);
          } else {
            return response.json();
          }
        })
        .then((response: IApplication[]) => {
          setApplications(response);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });

    getApplications();
  }, []);

  return (
    <div>
      <p>Applications:</p>

      {isLoading && "Loading..."}
      {!isLoading && error && error.message}
      {!isLoading &&
        !error &&
        applications &&
        applications.length === 0 &&
        "No applications."}
      {!isLoading && !error && applications && applications.length > 0 && (
        <pre>
          <code>{JSON.stringify(applications, null, 2)}</code>
        </pre>
      )}
    </div>
  );
};

export default Applications;
