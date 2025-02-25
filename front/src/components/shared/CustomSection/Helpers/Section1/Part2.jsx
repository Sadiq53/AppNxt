const Part2 = ({ handleStepSelection, data, currentStep }) => {
    return (
      <div className="part2">
        {data.map((value, index) => {
          // Only render items that are not the current step
          if (value.step !== currentStep?.step) {
            return (
              <div
                key={index}
                onClick={() => handleStepSelection(value)} // Call the function passed as a prop
                className="data-stack view pointer"
              >
                <div className="image">
                  <img src={value.img} alt={value.heading} />
                </div>
                <div className="data-stack">
                  <h2>{value.step}</h2>
                  <h4>{value.heading}</h4>
                  <p className="font-sm">{value.content}</p>
                </div>
              </div>
            );
          }
          return null; // Explicitly return null for the selected step
        })}
      </div>
    );
  };
  
  export default Part2;
  