import ButtonBase from "./ButtonBase.jsx";

export default function ButtonPrimary({ children, onClick }) {
  return (
    <ButtonBase className="button-primary" onClick={onClick}>
      {children}
    </ButtonBase>
  );
};
