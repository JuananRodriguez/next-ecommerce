import React, { Dispatch, SetStateAction, useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { FullModalStyle, FullModalMask } from "./styles";

type RenderContentProps = {
  toggleOpen: Dispatch<SetStateAction<boolean>>;
};

type Props = {
  RenderContent: ({ toggleOpen }: RenderContentProps) => React.ReactNode;
  RenderButton: ({ toggleOpen }: RenderContentProps) => React.ReactNode;
};

const FullModal = ({ RenderContent, RenderButton }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  useEffect(() => {
    const doc = document.querySelector("html");
    if (doc) {
      doc.style.overflow = isOpen ? "hidden" : "";
    }
  }, [isOpen]);

  return (
    <>
      {RenderButton({ toggleOpen })}
      {isOpen && (
        <>
          <FullModalMask onClick={toggleOpen} />
          <FullModalStyle>{RenderContent({ toggleOpen })}</FullModalStyle>
        </>
      )}
    </>
  );
};

export default FullModal;
