import PropTypes from "prop-types";
import IssueEditModal from "./IssueEditModal";
import IssueDeleteModal from "./IssueDeleteModal";
import { Issue } from "../../interfaces/issue";

const IssuesActions = ({ issue, onAction }: {issue: Issue, onAction: () => void}) => {
    if (issue._id === undefined) return (<></>);
    return (
        <div>
            {<IssueEditModal issue={issue} refreshOnAction={onAction} />}
            {<IssueDeleteModal issueId={issue._id} refreshOnAction={onAction} />}
        </div>
    );
};

IssuesActions.propTypes = {
    issue: PropTypes.object.isRequired,
};

export default IssuesActions;
