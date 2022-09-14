import { formatDate } from "../../../common/utils/formatDate";
import { ApplicationState } from "../enums/ApplicationState";
import { IApplication } from "../types/IApplication";
import styles from "./Application.module.css";

const getStateIcon = (state: ApplicationState): string => {
  switch (state) {
    case ApplicationState.Online:
      return "✓";
    case ApplicationState.Offline:
      return "X";
    case ApplicationState.Unknown:
      return "?";
  }
};

export interface ApplicationProps {
  application: IApplication;
}

export const Application = ({ application }: ApplicationProps) => (
  <div className={styles.container}>
    <div className={styles.heading}>
      {application.namespace} / {application.name}
    </div>
    <div className={styles.state}>
      {getStateIcon(application.state)} {application.state}
    </div>
    <div className={styles.branches}>{application.branches?.join(" | ")}</div>
    <div className={styles.deployments}>
      {application.deployments?.map((deployment) => (
        <div
          key={`${deployment.environment}-${deployment.tag}-${deployment.timestamp}`}
          className={styles.deployment}
        >
          [{deployment.environment}] {deployment.tag} (
          {formatDate(deployment.timestamp)})
        </div>
      ))}
    </div>
  </div>
);
