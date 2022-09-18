import ButtonBase from './ButtonBase.jsx';

export default function ButtonSecondary({ children, onClick }) {
  return (
    <ButtonBase className="button-secondary" onClick={onClick}>
      {children}
    </ButtonBase>
  );
};
