import { useModalStore } from "../../store/useModalStore";

const TextareaStep = () => {
  const { loggedText, setLoggedText } = useModalStore();
  const maxLength = 150;

  const handleLoggedTextChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setLoggedText(e.target.value);
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
