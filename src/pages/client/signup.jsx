import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const SignUp = () => {
  const [shake, setShake] = useState(false);

  const handleShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 400); // Reset sau animation
  };
  return (
    <Wrapper>
      <div className="container">
        <div className="image-section flex flex-col items-center justify-center p-6">
          <h2 className="text-center text-xl font-light text-gray-700 italic leading-snug mb-6 font-poppins tracking-wide mt-4">
            Because little something <br />
            makes everything
          </h2>

          <img
            src="/bg.png"
            alt="Login Illustration"
            onClick={handleShake}
            onFocus={handleShake}
            tabIndex={0}
            className={`max-h-[400px] object-contain transition-transform duration-300 hover:scale-105 ${
              shake ? "animate-shake" : ""
            }`}
          />
        </div>

        {/* Right form */}
        <div className="form-section">
          <h1>Sign Up</h1>
          <form>
            <InputContainer>
              <input type="text" id="name" required />
              <label htmlFor="name">Name</label>
              <div className="underline" />
            </InputContainer>

            <InputContainer>
              <input type="email" id="email" required />
              <label htmlFor="email">Email</label>
              <div className="underline" />
            </InputContainer>

            <InputContainer>
              <input type="password" id="password" required />
              <label htmlFor="password">Password</label>
              <div className="underline" />
            </InputContainer>

            <InputContainer>
              <input type="password" id="confirm-password" required />
              <label htmlFor="confirm-password">Confirm Password</label>
              <div className="underline" />
            </InputContainer>

            <StyledWrapper>
              <button className="button">Sign Up</button>
            </StyledWrapper>
          </form>
          <SocialContainer>
            <p className="or-text">or sign up with</p>
            <div className="social-buttons">
              <button className="google">
                <img src="google.png" alt="" />
                Google
              </button>

              <button className="facebook">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
                Facebook
              </button>
              <button className="twitter">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
                Twitter
              </button>
            </div>
          </SocialContainer>
          <p>
            Already have an account? <a href="#">Login</a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignUp;

// ================= Styled Components =================

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  padding: 20px;

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 900px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    overflow: hidden;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  .image-section {
    display: none;
    background: white;
    justify-content: center;
    align-items: center;
    padding: 30px;

    @media (min-width: 768px) {
      display: flex;
      width: 50%;
    }

    img {
      max-height: 400px;
      object-fit: contain;
    }
  }

  .form-section {
    width: 100%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (min-width: 768px) {
      width: 50%;
    }

    h1 {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 30px;
      text-align: center;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    button {
      padding: 12px;
      background: black;
      color: white;
      font-weight: 600;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        background: #333;
      }
    }

    p {
      margin-top: 20px;
      text-align: center;
      color: #777;

      a {
        color: black;
        text-decoration: underline;
      }
    }
  }
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;

  input {
    font-size: 18px;
    width: 100%;
    border: none;
    border-bottom: 2px solid #ccc;
    padding: 8px 0;
    background: transparent;
    outline: none;
  }

  label {
    position: absolute;
    top: 8px;
    left: 0;
    color: #aaa;
    pointer-events: none;
    transition: all 0.2s ease;
  }

  input:focus ~ label,
  input:valid ~ label {
    top: -20px;
    font-size: 14px;
    color: #000;
  }

  .underline {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background: #000;
    transform: scaleX(0);
    transition: all 0.3s ease;
  }

  input:focus ~ .underline,
  input:valid ~ .underline {
    transform: scaleX(1);
  }
`;
const StyledWrapper = styled.div`
  width: 100%;

  .button {
    --black: #000000;
    --ch-black: #141414;
    --eer-black: #1b1b1b;
    --night-rider: #2e2e2e;
    --white: #ffffff;
    --ch-white: #e1e1e1;

    width: 100%; /* 👈 Full width of parent */
    padding: 14px;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 700;
    color: var(--white);
    background-color: var(--ch-black);
    position: relative;
    cursor: pointer;
    z-index: 1;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
    }
  }

  .button::before,
  .button::after {
    content: "";
    position: absolute;
    left: -2px;
    top: -2px;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    border-radius: 12px;
    background: linear-gradient(
      45deg,
      var(--ch-black),
      var(--eer-black),
      var(--night-rider),
      var(--ch-white),
      var(--night-rider),
      var(--eer-black),
      var(--ch-black)
    );
    background-size: 400%;
    z-index: -2;
    animation: steam 12s linear infinite;
  }

  .button::after {
    filter: blur(30px);
    z-index: -3;
  }

  @keyframes steam {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
const SocialContainer = styled.div`
  margin-top: 10px;
  text-align: center;

  .or-text {
    font-size: 14px;
    color: #999;
    margin-bottom: 16px;
  }

  .social-buttons {
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (min-width: 500px) {
      flex-direction: row;
      justify-content: space-between;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 100%;
      max-width: 140px; /* 👈 Giới hạn chiều rộng */
      padding: 8px 12px; /* 👈 Giảm padding */
      font-size: 14px; /* 👈 Nhỏ text hơn */
      font-weight: 500;
      border: 2px solid #000;
      border-radius: 999px;
      cursor: pointer;
      background-color: white;
      color: #000;
      transition: all 0.2s ease;

      img,
      svg {
        width: 18px;
        height: 18px;
      }

      &:hover {
        background-color: #000;
        color: #fff;

        svg {
          color: #fff;
        }

        img {
          filter: brightness(0) invert(1);
        }
      }
    }

    .facebook,
    .twitter {
      color: #000;
    }
  }
`;
