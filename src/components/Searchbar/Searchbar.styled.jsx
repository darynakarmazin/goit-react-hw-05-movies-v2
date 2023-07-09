import styled from 'styled-components';

export const SearchbarHeader = styled.div`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 12 24px;
  z-index: 10;
  margin: 0 auto;
  background-color: #0a0909;
  border-bottom: 1px solid #ffffff;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #fff;

  button {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-size: 40%;
    background: var(
      --linear,
      linear-gradient(145deg, #ffc226 0%, #f84119 100%)
    );
    background-repeat: no-repeat;
    background-position: center;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
  }

  button:hover {
    opacity: 1;
  }

  span {
    font-size: 30px;
  }

  button-label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }

  input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 20px;
    padding-right: 4px;
    background: transparent;
    color: #ffffff;
  }

  input::placeholder {
    font: inherit;
    font-size: 18px;
    color: #ffffff;
  }
`;
