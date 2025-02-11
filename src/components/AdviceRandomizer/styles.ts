import styled from '@emotion/styled';

export const AdviceWrapper = styled.div`
   display: flex;
 flex-direction: column;
 align-items: center;
 background-color: mediumaquamarine;
 flex: 1;
 padding: 50px;
 border-color: blanchedalmond;
 border-radius: 15px;
`;
export const AdviceCard = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
 gap: 100px;
 width: 700px;
 min-height: 400px;
 padding: 20px;
 background-color: white;
 border: 2px solid;
 border-radius: 10px;
`

export const JokesContainer = styled.div`
 display: flex;
 flex-direction: column;
 gap: 20px;
`

export const AdviceList = styled.div`
 font-size: 24px;
 font-weight: bold;
 color: rebeccapurple;
`


export const AdviceText = styled.li`
  list-style: none;
  background: #f4f4f4;
  padding: 10px;
  border-radius: 5px;
  margin-top: 5px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;