import React from "react";
type GreetProps = {
  name: string;
  messageCount?: number; // Optional "?" added
  isLoggedIn: boolean;
};
export default function Greet(props: GreetProps) {
  // default prop
  // const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? ` ${props.name} ${props.messageCount}`
          : "welcome guest"}
      </h2>
    </div>
  );
}
