import { FunctionComponent, lazy, Suspense } from "react";
const LazyCDLoader = lazy(() => import("../CDLoader/CDLoader"));

interface ICDLazyComponent {
  children: JSX.Element | JSX.Element[];
}

const CDLazyComponent: FunctionComponent<ICDLazyComponent> = (props) => {
  const { children } = props;
  return <Suspense fallback={<LazyCDLoader />}>{children}</Suspense>;
};

export default CDLazyComponent;
