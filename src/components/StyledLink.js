import { Link } from 'gatsby';
import styled from 'styled-components';
import media from 'styled-media-query';

export default styled(Link)`
  &:link {
    color: #3b92de;
    opacity: 1;
    cursor: pointer;
    text-decoration: none;
  }

  &:visited {
    opacity: 0.8;
  }

  &:focus,
  &:hover {
    color: #00bdff;
    border-bottom: 3px solid #00bdff;
  }

  &:active {
    color: #00bdff;
  }

  ${media.lessThan('medium')`
      &:focus,
      &:hover  {
        border: none;
      }
  `}
`;
