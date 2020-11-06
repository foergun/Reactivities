import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import {RouteComponentProps } from "react-router-dom";
import {Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import ActivityStore from "../../../app/store/activityStore";
import ActivityDetailedChat from "./ActivityDetailedChat";
import ActivityDetailedHeader from "./ActivityDetailedHeader";
import ActivityDetailedInfo from "./ActivityDetailedInfo";
import ActivityDetailedSideBar from "./ActivityDetailedSideBar";

interface DetailParams{
  id:string
}

const ActivityDetails: React.FC<RouteComponentProps<DetailParams>> = ({match}) => {
  const activityStore = useContext(ActivityStore);
  const {
    activity,
    loadActivity,
    loadingInitial
  } = activityStore;

  useEffect(() => {
    loadActivity(match.params.id);
  },[loadActivity, match.params.id]);

  if(loadingInitial) 
    return <LoadingComponent content='Loading Activity...'/>

  if(!activity)
    return <h2>Activity Not Found</h2>

  return (
      <Grid>
        <Grid.Column width={10}>
          <ActivityDetailedHeader activity={activity}></ActivityDetailedHeader>
          <ActivityDetailedInfo activity={activity}></ActivityDetailedInfo>
          <ActivityDetailedChat></ActivityDetailedChat>
        </Grid.Column>
        <Grid.Column width={6}>
          <ActivityDetailedSideBar></ActivityDetailedSideBar>
        </Grid.Column>
      </Grid>
  );
};

export default observer(ActivityDetails);
