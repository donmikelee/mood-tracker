type ModalContentProps = {
  renderOptions: React.ReactNode;
  contentTitle: string;
  contentDescription?: string;
};

const ModalContent = ({
  renderOptions,
  contentTitle,
  contentDescription,
}: ModalContentProps) => {
  return (
    <>
      <p className="text-preset-3">{contentTitle}</p>
      {contentDescription && (
        <p className="text-preset-6">{contentDescription}</p>
      )}
      <div className="lod-mood-options">
        <ul className="options-list">{renderOptions}</ul>
      </div>
    </>
  );
};
export default ModalContent;
