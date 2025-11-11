type TextareaStepProps = {
  loggedText: string;
  setLoggedText: (text: string) => void;
  setLoggedTextToStore: (text: string) => void;
};

const TextareaStep = ({
  loggedText,
  setLoggedText,
  setLoggedTextToStore,
}: TextareaStepProps) => {
  const maxLength: number = 150;

  const handleLoggedTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setLoggedText(e.target.value);
    setLoggedTextToStore(e.target.value.trim());
  };

  return (
    <div className="loggedtext-container">
      <textarea
        id="log-textarea"
        className="log-textarea text-preset-6--italic"
        placeholder="Today I felt..."
        rows={4}
        maxLength={maxLength}
        onChange={handleLoggedTextChange}
      ></textarea>
      <p className="textarea-counter text-preset-8">
        {loggedText.length}/{maxLength}
      </p>
    </div>
  );
};

export default TextareaStep;
