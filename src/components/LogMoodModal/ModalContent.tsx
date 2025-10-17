type ModalContentProps = {
  renderOptions: () => React.ReactElement[] | React.ReactElement | undefined;
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
      <div className="modal-text">
        <p className="modal-title text-preset-3 text-preset-2--mobile">
          {contentTitle}
        </p>
        {contentDescription && (
          <p className="modal-desc text-preset-6">{contentDescription}</p>
        )}
      </div>
      <div className="lod-mood-options">
        <ul className="options-list">{renderOptions()}</ul>
      </div>
    </>
  );
};

export default ModalContent;
