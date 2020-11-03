import React, { FormEvent, useState } from "react";
import { ButtonGroup, Form, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import {v4 as uuid} from 'uuid';

interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity;
  createActivity : (activity : IActivity) => void;
  editActivity : (activity : IActivity) => void;
}

const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initialFormState,
  createActivity,
  editActivity
}) => {
  const intializeForm = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        id: "",
        title: "",
        description: "",
        category: "",
        date: "",
        city: "",
        veneu: "",
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>(intializeForm);

  const handleSubmit = () => {
      if(activity.id.length === 0)
      {
        let newActivity = {
          ...activity,
          id : uuid()
        }
        createActivity(newActivity);
      }
      else{
        editActivity(activity);
      }
  }

  const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          name="title"
          placeholder="Title"
          value={activity.title}
          onChange={handleInputChange}
        />
        <textarea
          rows={2}
          style={{ marginBottom: 12 }}
          placeholder="Description"
          value={activity.description}
          onChange={handleInputChange}
          name="description"
        ></textarea>
        <Form.Input
          placeholder="Category"
          value={activity.category}
          onChange={handleInputChange}
          name="category"
        />
        <Form.Input
          type="datetime-local"
          placeholder="Date"
          value={activity.date}
          onChange={handleInputChange}
          name="date"
        />
        <Form.Input
          placeholder="City"
          value={activity.city}
          onChange={handleInputChange}
          name="city"
        />
        <Form.Input
          placeholder="Veneu"
          value={activity.veneu}
          onChange={handleInputChange}
          name="veneu"
        />
        <ButtonGroup style={{ float: "right" }}>
          <button onClick={() => setEditMode(false)} className="ui button">
            Cancel
          </button>
          <button
            style={{ marginLeft: 10 }}
            className="ui positive button"
            type="submit"
          >
            Submit
          </button>
        </ButtonGroup>
      </Form>
    </Segment>
  );
};

export default ActivityForm;
