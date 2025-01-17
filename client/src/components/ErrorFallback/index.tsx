import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ReportBugModal from '../ReportBugModal';

type Props = {
  error: Error;
  componentStack: string | null;
  eventId: string | null;
  resetError(): void;
};

const ErrorFallback = ({ error, componentStack, resetError }: Props) => {
  const [shouldShow, setShouldShow] = useState(true);
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 my-16 bg-[url('/onboarding-background.png')] bg-cover">
      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-start overflow-auto bg-bg-sub bg-opacity-75">
        <ReportBugModal
          errorBoundaryMessage={error.message + ' ' + componentStack}
          handleSubmit={() => {
            resetError();
            setShouldShow(false);
          }}
          forceShow={shouldShow}
        />
      </div>
    </div>
  );
};
export default ErrorFallback;
