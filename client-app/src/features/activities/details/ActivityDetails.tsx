import React from 'react'
import { ButtonGroup, Card, Image } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';

interface IProps{
    activity : IActivity;
    setEditMode : (editMode : boolean) => void;
    setSelectedActivity : (activity : IActivity | null) => void;
}

const ActivityDetails : React.FC<IProps> = ({activity, setEditMode, setSelectedActivity}) => {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{activity.title}</Card.Header>
            <Card.Meta>
                <span >{activity.date}</span>
            </Card.Meta>
            <Card.Description>
                {activity.description}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <ButtonGroup widths={2}>
                    <button onClick={() => setEditMode(true)} className="ui blue basic button">Edit</button>
                    <button onClick={() => setSelectedActivity(null)} className="ui grey basic button">Cancel</button>
                </ButtonGroup>
            </Card.Content>
      </Card>
    )
}
export default ActivityDetails;
