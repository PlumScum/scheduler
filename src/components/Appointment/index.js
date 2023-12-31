import React from "react";
import "./styles.scss"
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from "hooks/useVisualMode";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";


export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const DELETING = "DELETING";
  const SAVING = "SAVING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW: EMPTY
  )


  function save(name, interviewer) {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING)
    props.bookInterview(props.id, interview)
    .then(() => {
      transition(SHOW)
    })
    .catch((err) => {
      transition(ERROR_SAVE, true)
    })
    
  }

  function deleteInterview() {
    transition(DELETING, true)
    props.cancelInterview(props.id)
    .then(() => {
      transition(EMPTY)
    })
    .catch((err) => {
      transition(ERROR_DELETE, true)
    })
  }
  
  return (
    <div className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
        onDelete={() => transition(CONFIRM)}
        onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE && <Form
        interviewers={props.interviewers}
        onCancel={() => back()}
        onSave={save}
      />}
        {mode === EDIT && <Form
        interviewers={props.interviewers}
        student={props.interview.student}
        interviewer={props.interview.interviewer.id}
        onCancel={() => back()}
        onSave={save}
      />}
      {mode === SAVING && <Status
        message="Saving"
      />}

      {mode === DELETING && <Status
        message="Deleting"
      />}

      {mode === CONFIRM && <Confirm
        onCancel={() => back()}
        onConfirm={deleteInterview}
        message="Are you sure you would like to delete this interview?"
      />}

      {mode === ERROR_SAVE && <Error
        message="You encountered an error saving."
        onClose={() => back()}
      />}

      {mode === ERROR_DELETE && <Error
        message="You encountered an error deleting."
        onClose={() => back()}
      />}
    </div>
  )
}