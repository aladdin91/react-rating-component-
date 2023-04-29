import { useState } from "react"
import ThankYou from "./components/ ThankYou"
import RatingCard from "./components/RatingCard";
function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [items, setItems] = useState("");

  return (
    <>
      {!isSubmitted && (
        <RatingCard
          setIsSubmitted={setIsSubmitted}
          setItems={setItems}
          isSubmitted={isSubmitted}
        />
      )}

      {isSubmitted && <ThankYou items={items} setIsSubmitted={setIsSubmitted} />}
    </>
  );
}

export default App