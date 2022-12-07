import * as React from 'react';

type HomeCardProps = {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

function HomeCard({ rating, setRating, setIsSelected }: HomeCardProps) {
  return (
    <div className="card">
      <span>
        <img
          src="/assets/icon-star.svg"
          alt="Star icon"
          className="p-3 sm:p-4 bg-dark-blue rounded-full"
        />
      </span>
      <h1 className="text-2xl text-white sm:mt-4 font-bold">How did we do?</h1>
      <p className="text-medium-grey text-sm sm:text-base">
        Please let us know how we did your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-between mt-3 mb-2">
        {[1, 2, 3, 4, 5].map(n => (
          <span
            key={n}
            className={`${
              rating === n
                ? 'bg-orange text-white'
                : 'bg-dark-blue text-light-grey hover:bg-light-grey hover:text-white'
            }  p-2 w-10 h-10 sm:w-12 sm:h-12 text-sm sm:text-base flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer`}
            onClick={() => setRating(n)}
          >
            {n}
          </span>
        ))}
      </div>
      <button
        onClick={() => rating !== 0 && setIsSelected(prevState => !prevState)}
        className="bg-orange transition-all duration-300 text-sm sm:text-base text-white uppercase tracking-widest rounded-full py-2 sm:py-3 font-medium hover:bg-white hover:text-orange"
      >
        Submit
      </button>
    </div>
  );
}

type ThanksCardProps = {
  rating: number;
};

function ThanksCard({ rating }: ThanksCardProps) {
  return (
    <div className="card">
      <div className="flex justify-center my-2">
        <img
          src="/assets/illustration-thank-you.svg"
          alt="Illustration thanks you"
        />
      </div>
      <div className="flex justify-center">
        <span className="bg-dark-blue text-orange rounded-full py-2 px-4 text-sm sm:text-base text-center">
          You selected {rating} out of 5
        </span>
      </div>
      <div className="mt-2">
        <h1 className="text-white text-center text-xl sm:text-2xl font-bold">
          Thanks you!
        </h1>
        <p className="text-medium-grey text-center text-sm sm:text-base mt-2">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default function App() {
  const [rating, setRating] = React.useState<number>(0);
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <main className="font-overpass p-6 bg-very-dark-blue min-h-[100vh] flex flex-col items-center justify-center">
      {!isSelected ? (
        <HomeCard
          rating={rating}
          setRating={setRating}
          setIsSelected={setIsSelected}
        />
      ) : (
        <ThanksCard rating={rating} />
      )}
    </main>
  );
}
