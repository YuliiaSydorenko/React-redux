import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";  
import { feedbackActions, feedbackSelectors } from "../../store/redux/feedback/feedbackSlice";
import Button from "../Button/Button";
import {
  FeedbackContainer,
  FeedbackResultContainer,
  LikeDislikeContainer,
  Result
} from "./styles";

function Feedback() {
  const dispatch = useDispatch();
  const { likes, dislikes } = useSelector((state: RootState) => state.feedback); 

  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <Result>{likes}</Result>
          <Button name="LIKE" type="button" onClick={() => dispatch(feedbackActions.addLike())} />
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <Result>{dislikes}</Result>
          <Button name="DISLIKE" type="button" onClick={() => dispatch(feedbackActions.addDislike())} />
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      <Button name="RESET RESULTS" type="button" onClick={() => dispatch(feedbackActions.resetFeedback())} />
    </FeedbackContainer>
  );
}

export default Feedback;
