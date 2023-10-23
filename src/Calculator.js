import React, { useState, useEffect } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [investment, setInvestment] = useState({
    baccAmount: "",
    epochs: 0,
    nftType: 0,
    baccReward: 0,
  });
  const handleChange = (event) => {
    setInvestment((prevInvestment) => ({
      ...prevInvestment,
      [event.target.name]: event.target.value,
    }));
  };

  const handleKeyPress = (e) => {
    if (e.key === ",") {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const calculatedBaccReward =
      investment.baccAmount *
      ((1 + 0.007 + investment.epochs ** 2 / 200) *
        (1 + Number(investment.nftType) / 100)) **
        investment.epochs;

    setInvestment((prevInvestment) => ({
      ...prevInvestment,
      baccReward: calculatedBaccReward,
    }));
  }, [investment.baccAmount, investment.epochs, investment.nftType]);
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="wrapper">
            <form>
              <div className="input-group mb-3 input-calculator">
                <input
                  type="number"
                  className="form-control"
                  placeholder="$BACC to stake"
                  aria-describedby="basic-addon2"
                  name="baccAmount"
                  min="0"
                  value={investment.baccAmount}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group mb-3">
                <select
                  class="input group form-select input-calculator"
                  onChange={handleChange}
                  name="nftType"
                >
                  <option selected value="0">
                    No NFT Owned
                  </option>
                  <option value="1">NFT Type 1</option>
                  <option value="2">NFT Type 2</option>
                  <option value="3">NFT Type 3</option>
                </select>
              </div>

              <div className="input-group mb-3 input-calculator">
                <input
                  type="number"
                  min="0"
                  onKeyPress={handleKeyPress}
                  className="form-control"
                  placeholder="Number of Epochs"
                  aria-describedby="basic-addon2"
                  name="epochs"
                  value={investment.epochs}
                  onChange={handleChange}
                />
              </div>
            </form>
            <div className="reward-wrapper">
              {investment.baccReward.toFixed(2)} $BACC Rewarded
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
