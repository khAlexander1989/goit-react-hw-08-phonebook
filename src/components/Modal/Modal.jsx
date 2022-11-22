import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { CgClose } from 'react-icons/cg';
import { createPortal } from 'react-dom';

import { Box } from 'components/Box';
import { BackDrop, StyledModal, Title, CloseBtn } from './Modal.styled';
import useScrollBlock from 'hooks/useScrollBlock';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ title, closeModal, children }) {
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    blockScroll();

    return () => {
      allowScroll();
    };
  }, [blockScroll, allowScroll]);

  return createPortal(
    <BackDrop>
      <StyledModal>
        <CloseBtn
          type="button"
          aria-label="close modal button"
          onClick={closeModal}
        >
          <CgClose size="100%" />
        </CloseBtn>
        <Title>{title}</Title>
        <Box mt={3}>{children}</Box>
      </StyledModal>
    </BackDrop>,
    modalRoot
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
};
