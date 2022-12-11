import { FC, useState } from "react";
import { useCounter } from "../../state/counter/useCounter";
import { Chat } from "../Chat";
import { Homepage } from "../Homepage";

import "./app.css";

export const App: FC = () => {
  return <Chat />;
};
