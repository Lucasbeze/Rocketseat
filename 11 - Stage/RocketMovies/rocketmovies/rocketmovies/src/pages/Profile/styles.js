import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: ${({ theme }) => theme.COLORS.PINK_ONE};

    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 16px;
    

    padding: 0 124px;

    svg {
      margin-right: 8px;
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 16px;
    }

    a {
      color: ${({ theme }) => theme.COLORS.PINK};
      display: flex;
      align-items: center;
    }
  }
`;

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4){
    margin-top: 24px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  width: 186px;
  height: 186px;

  > img {
    height: 186px;
    width: 186px;
    border-radius:50%;
  }
  
  > label {
    width: 48px;
    height: 48px;

    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg{ 
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.COLOR_BUTTON};
    }
  }
`;