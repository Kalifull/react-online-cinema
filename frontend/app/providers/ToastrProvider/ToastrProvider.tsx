import ReduxToastr from 'react-redux-toastr';

const ToastrProvider: React.FC = () => {
  return (
    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-right"
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick
    />
  );
};

export default ToastrProvider;
