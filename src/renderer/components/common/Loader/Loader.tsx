import { ReactElement } from 'react';

export const Loader = (): ReactElement => (
  <div className="lds-ellipsis">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);
