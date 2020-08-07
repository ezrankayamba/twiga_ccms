import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { SEND_FEEDBACK, COMPLAINTS } from "../../helpers/GraphQL";
import { Redirect } from "react-router-dom";
import Input from "../../components/forms/Input";

function FeedbackForm({ complaint, img }) {
  const [sendFeedback, {}] = useMutation(SEND_FEEDBACK);
  const [redirect, setRedirect] = useState(null);
  const [email, setEmail] = useState(null);
  const [remarks, setRemarks] = useState(null);
  const [attachments, setAttachments] = useState([]);

  function sendNow(e) {
    e.preventDefault();
    let params = {
      id: complaint.id,
      details: attachments,
      email: email,
      remarks: remarks,
    };
    console.log(params);
    sendFeedback({
      variables: params,
      refetchQueries: [{ query: COMPLAINTS }],
    }).then(
      () => setRedirect("/complaints"),
      (res) => console.log("Error: ", res)
    );
  }
  function attachmentsChangeHandler(e) {
    let files = [];

    let updateAttachements = (files) => {
      setAttachments(files);
    };

    let theFiles = e.target.files;
    for (let i = 0; i < theFiles.length; i++) {
      const reader = new FileReader();
      let file = theFiles[i];
      reader.addEventListener("load", () => {
        let data = reader.result;
        files.push({ filename: file.name, data: data });
        if (files.length === theFiles.length) {
          updateAttachements(files);
        }
      });
      reader.readAsDataURL(file);
    }
  }
  return redirect ? (
    <Redirect to={redirect} />
  ) : (
    <div>
      <form className="form" onSubmit={sendNow} encType="multipart/form-data">
        <div>
          <Input
            name="email"
            type="email"
            label="Customer Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            name="remarks"
            type="textarea"
            label="Remarks"
            onChange={(e) => setRemarks(e.target.value)}
            required
          />
          <Input
            name="attachments[]"
            type="file"
            label="Attachments"
            multiple
            onChange={attachmentsChangeHandler}
            required
          />
        </div>
        <div className="form-footer">
          <button className="p-1">Send Feedback</button>
        </div>
      </form>
    </div>
  );
}

export default FeedbackForm;
