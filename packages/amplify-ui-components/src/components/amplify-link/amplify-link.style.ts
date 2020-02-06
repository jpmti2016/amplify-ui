import { css } from 'emotion';

export const link = css`
  color: #ff9900;
  cursor: pointer;
  :link {
    color: var(--amplify-amazon-orange);
    text-decoration: none;
  }

  :hover {
    color: var(--amplify-light-amazon-orange);
    text-decoration: underline;
  }
  
  :active {
    color: var(--amplify-button-click);
    text-decoration: underline;
  }
`;
