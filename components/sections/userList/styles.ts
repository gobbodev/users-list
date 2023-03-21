import styled from "styled-components";

export const Users = styled.section`
  background-color: rgb(6, 6, 6);
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    max-width: var(--max-width);
    gap: 12px;
    position: relative;
    border-radius: 12px;
    margin-bottom: 30px;
    &:hover .user::after {
      opacity: 1;
    }
    .user {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 320px;
      width: 380px;
      background-color: rgba(255, 255, 255, 0.12);
      border-radius: 12px;
      &:hover::before {
        opacity: 1;
      }
      &::before,
      ::after {
        border-radius: inherit;
        content: "";
        height: 100%;
        left: 0px;
        opacity: 0;
        position: absolute;
        top: 0px;
        transition: opacity 500ms;
        width: 100%;
      }
      &::before {
        background: radial-gradient(
          600px circle at var(--mouse-x) var(--mouse-y),
          rgba(255, 255, 255, 0.06),
          transparent 50%
        );
        pointer-events: none; /**/
        z-index: 3;
      }
      &::after {
        background: radial-gradient(
          500px circle at var(--mouse-x) var(--mouse-y),
          rgba(255, 255, 255, 0.9),
          transparent 50%
        );
        z-index: 1;
      }
      .user-content {
        background-color: var(--card-color);
        border-radius: inherit;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        inset: 1px;
        padding: 30px;
        position: absolute;
        z-index: 2;
        .top {
          margin-bottom: 30px;
          display: flex;
          flex-direction: column;

          h2 {
            white-space: nowrap;
            margin-bottom: 1px;
            font-size: 36px;
            font-weight: 700;
          }
          h6 {
            color: #434343;
            font-size: 18px;
            font-weight: 700;
          }
        }
        .center {
          p {
            font-size: 14px;
            color: grey;
            font-size: 16px;
            margin-bottom: 5px;

            span {
              color: var(--p-color);
              margin-right: 5px;
              font-weight: 700;
              font-size: 18px;
            }
          }
        }
      }
    }
  }
  .box-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 5px;
    button {
      color: var(--p-color);
      background-color: var(--card-color);
      border-radius: 5px;
      cursor: pointer;
      border: 2px solid var(--p-color);
      font-family: var(--font-p);
    }
    button:disabled,
    button[disabled] {
      border: 1px solid #999999;
      background-color: #cccccc;
      color: #666666;
      cursor: default;
    }
    span {
      cursor: default;
    }
  }
  @media only screen and (max-width: 1200px) {
    .container {
      justify-content: center;
    }
  }
`;
