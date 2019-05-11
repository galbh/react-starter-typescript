import styled, { AnyStyledComponent } from 'styled-components';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { Dialog } from '@material-ui/core';

export const DialogContainer: AnyStyledComponent = styled(Dialog)`
  && {
    font-size: ${({ theme }) => theme.sizes.fontSizeRegular};
  }
`;

export const DialogTitle: AnyStyledComponent = styled(MuiDialogTitle)`
  border-bottom: 1px solid #ccc;

  && {
    padding: 16px 24px;
    margin-bottom: 16px;
  }

  h2 {
    display: flex;
    align-items: center;
    font-size: ${({ theme }) => theme.sizes.fontSizeMedium};
    font-family: inherit;
    font-weight: bold;

    > div {
      width: 100%;
      min-width: 160px;

      &:first-letter {
        text-transform: capitalize;
      }
    }
  }
`;
