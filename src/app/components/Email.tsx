import * as React from 'react';
import { Html } from "@react-email/components";

interface Props {
  msg: string
}

const Email = ({msg}: Props) => {

  return (
    <Html lang="en">
      <p>{msg}</p>
    </Html>
  );
}

export default Email;
