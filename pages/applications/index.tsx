import { NextPage } from "next";
import { Pagination } from "../../src/common/components/Pagination";
import { usePagination } from "../../src/common/hooks/usePagination";
import { Application } from "../../src/features/applications/components/Application";
import { useGetApplications } from "../../src/features/applications/queries/get-applications";
import styles from "./Applications.module.css";

const Applications: NextPage = () => {
  const pagination = usePagination();

  const api = useGetApplications();
  /*
  // This is what we would have needed to impl. this ourselves:
  const [isLoading, setIsLoading] = useState(false);
  const [applications, setApplications] = useState<IApplication[] | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  useEffect(() => {
    setIsLoading(true);
    const getApplications = async () =>
      axios.get("/api/applications")
        .then((response) => {
          setApplications(response.data as IApplication[]);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    getApplications();
  }, []);
  const api = { isLoading, isError: !!error, error, data: applications };
  */

  return (
    <div>
      <h1>Applications</h1>

      <Pagination {...pagination} />

      <div className={styles.applications}>
        {api.isLoading && "Loading..."}
        {!api.isLoading && api.isError && (
          <div>
            <p>ERROR:</p>
            <p>{api.error.message}</p>
          </div>
        )}
        {!api.isLoading &&
          api.data &&
          api.data.length === 0 &&
          "No applications."}
        {!api.isLoading &&
          api.data &&
          api.data.length > 0 &&
          api.data.map((application) => (
            <Application key={application.id} application={application} />
          ))}
      </div>
    </div>
  );
};

export default Applications;
