import { StyledChattingAppHomeFeature } from './chatting-app-home-feature.style';

/* eslint-disable-next-line */
export interface ChattingAppHomeFeatureProps {}

export function ChattingAppHomeFeature(props: ChattingAppHomeFeatureProps) {
  return (
    <StyledChattingAppHomeFeature>
      <div className="container">
        <h1>Home</h1>
      </div>
    </StyledChattingAppHomeFeature>
  );
}

export default ChattingAppHomeFeature;
