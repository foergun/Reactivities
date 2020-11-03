import React, { SyntheticEvent } from "react";
import { Item, Label, Segment } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
  activities: IActivity[];
  selectActivity: (id: string) => void;
  deleteActivity: (
    event: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => void;
  submitting: boolean;
  target: string;
}

const ActivityList: React.FC<IProps> = ({
  activities,
  selectActivity,
  deleteActivity,
  submitting,
  target,
}) => {
  return (
    <Segment clearing>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.veneu}
                </div>
              </Item.Description>
              <Item.Extra>
                <Label basic content={activity.category} />
                <button
                  style={{ float: "right" }}
                  className="ui blue button"
                  onClick={() => selectActivity(activity.id)}
                >
                  View
                </button>
                <button
                  name={activity.id}
                  style={{ float: "right" }}
                  className={`ui red button ${
                    submitting === true && target===activity.id && "loading"
                  }`}
                  onClick={(e) => deleteActivity(e, activity.id)}
                >
                  Delete
                </button>
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
};

export default ActivityList;
