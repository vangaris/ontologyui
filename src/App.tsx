import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./features/efo/hooks";
import { getEfoTerms } from "./features/efo/actions";
import Modal from "./components/modal/Modal";
import Container from "./components/layouts/Contaier";

function App() {
  const isModalOpen = useAppSelector((state) => state.efoTerms.isModalOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEfoTerms());
  }, [dispatch]);

  return (
    <>
      <Container />
      {isModalOpen && <Modal />}
    </>
  );
}

export default App;
