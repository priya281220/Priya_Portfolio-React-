import styled from "styled-components";
// import _default from "../../themes/default";

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end; /* Center the background content */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  background: linear-gradient(45deg,rgb(2, 20, 34),rgb(1, 5, 28));

  background-size: 200% 200%;
  animation: moveBackground 5s ease-in-out infinite;

  @keyframes moveBackground {
    0% {
      background-position: 200% 0;
    }
    50% {
      background-position: 0 100%;
    }
    100% {
      background-position: 200% 0;
    }
  }

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  padding: 50px 0; /* Add vertical spacing */

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center; /* Center-align content on smaller screens */
    padding: 30px 0;
  }

  h1 {
    font-size: 3rem;
    color: white;
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Add a subtle text shadow for depth */
    transition: transform 0.3s ease-in-out;
    
    @media (max-width: 960px) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: white;
    max-width: 600px;
    text-align: center;
    margin-top: 20px;
    line-height: 1.6;
    opacity: 0.8;
  }

  .cta-button {
    margin-top: 30px;
    padding: 15px 30px;
    background-color:rgb(229, 233, 235); /* Button background */
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color:rgb(206, 110, 26); /* Hover effect on button */
    }
  }
`;


export const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;
export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 350px;  /* Increased size */
  max-height: 450px; /* Increased height */
  border-radius: 50%; /* Circular shape */
  border: 3px solid ${({ theme }) => theme.midnightblue}; /* Subtle border around the circle */
  transition: box-shadow 0.3s ease-in-out, transform 0.3s ease, border-color 0.3s ease;

  /* Shift the image to the left */
  margin-left: -40px;  /* Further shift to the left for more dynamic positioning */

  /* Hover effect */
  &:hover {
    box-shadow: 0 0 20px ${({ theme }) => theme.white};
    transform: scale(1.05); /* Slight zoom on hover */
    border-color: ${({ theme }) => theme.CharcoalBlue}; /* Change border color on hover */
  }

  /* Responsive styles */
  @media (max-width: 768px) {
    max-width: 320px; /* Larger size for medium screens */
    max-height: 320px; /* Larger height for medium screens */
  }

  @media (max-width: 640px) {
    max-width: 280px; /* Slightly reduced size for small screens */
    max-height: 280px; /* Slightly reduced height for small screens */
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 16px;
    line-height: 32px;
  }
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;
