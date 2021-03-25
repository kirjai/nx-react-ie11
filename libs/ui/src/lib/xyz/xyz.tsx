import React from 'react';

import './xyz.module.css';

/* eslint-disable-next-line */
export interface XyzProps {}

export function Xyz(props: XyzProps) {
  const someFunction = () => 'WELCOME!';

  return (
    <div>
      <h1>{someFunction()} to xyz!</h1>
    </div>
  );
}

export default Xyz;
