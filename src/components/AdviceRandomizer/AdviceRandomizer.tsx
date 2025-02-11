import React from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { adviceActions, adviceSelectors } from "store/redux/advice/adviceSlice";
import Button from "components/Button/Button";
import Spinner from "components/Spinner/Spinner";
import { 
  AdviceWrapper, 
  AdviceCard, 
  AdviceList, 
  AdviceText 
} from "./styles";

function AdviceRandomizer() {
  const dispatch = useAppDispatch();
  const adviceState = useAppSelector(adviceSelectors.adviceData);

  const fetchAdvice = () => {
    dispatch(adviceActions.getAdvice());
  };

  return (
    <AdviceWrapper>
      <AdviceCard>
        <Button name="Get Advice" onClick={fetchAdvice} disabled={adviceState.status === "loading"} />
        
        {adviceState.status === "loading" && <Spinner />}
        {adviceState.error && <p style={{ color: "red" }}>Error: {adviceState.error}</p>}

        <AdviceList>
          {adviceState.advices.map((advice: string, index: number) => (
            <AdviceText key={index}>{advice}</AdviceText>
          ))}
        </AdviceList>

        {adviceState.advices.length > 0 && (
          <Button name="Delete All Advices" onClick={() => dispatch(adviceActions.deleteAllAdvices())} />
        )}
      </AdviceCard>
    </AdviceWrapper>
  );
}

export default AdviceRandomizer;
