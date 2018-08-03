import React from "react";
import { Button, Icon } from "semantic-ui-react";

const MyButton = props => {
  return (
    <Button animated color={props.color} onClick={props.action || null}>
      <Button.Content visible>{props.text}</Button.Content>
      <Button.Content hidden>
        <Icon name={props.icon} />
      </Button.Content>
    </Button>
  );
};

export default MyButton;
