import "@/styles/";
import Header from "./layouts/Header";
import Content from "./layouts/Content";
import Footer from "./layouts/Footer";
import Modal from "./components/Modal";
import { useModalStore } from "./store/modalStore.jsx";

function App() {
  const { isModalOpen, closeModal } = useModalStore();

  return (
    <>
      <Header />
      <Content />
      <Footer />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
