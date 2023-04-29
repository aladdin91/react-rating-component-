import Button from "./Button";
import star from "../images/icon-star.svg";

function RatingCard({ setIsSubmitted, setItems }) {
  return (
    <div className="wrapper">
      <img src={star} alt="" className="bg-gray-700 p-2 rounded-full" />
      <h2 className="text-gray-100 text-3xl my-6">How did we do?</h2>
      <p className="text-gray-400 mb-10">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <ul className="grid grid-cols-5 gap-3 mb-10">
        <li>
          <Button number={1} setItems={setItems} />
        </li>
        <li>
          <Button number={2} setItems={setItems} />
        </li>
        <li>
          <Button number={3} setItems={setItems} />
        </li>
        <li>
          <Button number={4} setItems={setItems} />
        </li>
        <li>
          <Button number={5} setItems={setItems} />
        </li>
      </ul>

      <div className="text-center">
        <button
          onClick={() => setIsSubmitted(true)}
          className="btn-rating w-full text-white uppercase tracking-wide pt-3 pb-2 rounded-full"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default RatingCard;
