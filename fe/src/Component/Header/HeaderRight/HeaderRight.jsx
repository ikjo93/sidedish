import ButtonWrap from "./HeaderRight.styled";

const icons = [
  {
    id: 0,
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6667 14.6667H15.6133L15.24 14.3067C16.5918 12.7387 17.3348 10.7369 17.3333 8.66667C17.3333 6.95256 16.825 5.27695 15.8727 3.85172C14.9204 2.4265 13.5669 1.31567 11.9833 0.659711C10.3996 0.00375132 8.65706 -0.167878 6.97589 0.166528C5.29472 0.500933 3.75047 1.32635 2.53841 2.53841C1.32636 3.75046 0.500937 5.29471 0.166531 6.97588C-0.167874 8.65705 0.00375513 10.3996 0.659715 11.9833C1.31567 13.5669 2.4265 14.9204 3.85173 15.8727C5.27695 16.825 6.95257 17.3333 8.66667 17.3333C10.8133 17.3333 12.7867 16.5467 14.3067 15.24L14.6667 15.6133V16.6667L21.3333 23.32L23.32 21.3333L16.6667 14.6667V14.6667ZM8.66667 14.6667C5.34667 14.6667 2.66667 11.9867 2.66667 8.66667C2.66667 5.34667 5.34667 2.66667 8.66667 2.66667C11.9867 2.66667 14.6667 5.34667 14.6667 8.66667C14.6667 11.9867 11.9867 14.6667 8.66667 14.6667Z"
          fill="#1B1B1B"
        />
      </svg>
    ),
  },
  {
    id: 1,
    svg: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 11C13.9467 11 16.3334 8.61333 16.3334 5.66667C16.3334 2.72 13.9467 0.333334 11 0.333334C8.05337 0.333334 5.66671 2.72 5.66671 5.66667C5.66671 8.61333 8.05337 11 11 11ZM11 13.6667C7.44004 13.6667 0.333374 15.4533 0.333374 19V21.6667H21.6667V19C21.6667 15.4533 14.56 13.6667 11 13.6667Z"
          fill="#1B1B1B"
        />
      </svg>
    ),
  },
  {
    id: 2,
    svg: (
      <svg
        width="27"
        height="28"
        viewBox="0 0 27 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.33337 22C6.86671 22 5.68004 23.2 5.68004 24.6667C5.68004 26.1333 6.86671 27.3333 8.33337 27.3333C9.80004 27.3333 11 26.1333 11 24.6667C11 23.2 9.80004 22 8.33337 22ZM0.333374 0.666666V3.33333H3.00004L7.80004 13.4533L6.00004 16.72C5.78671 17.0933 5.66671 17.5333 5.66671 18C5.66671 19.4667 6.86671 20.6667 8.33337 20.6667H24.3334V18H8.89337C8.70671 18 8.56004 17.8533 8.56004 17.6667L8.60004 17.5067L9.80004 15.3333H19.7334C20.7334 15.3333 21.6134 14.7867 22.0667 13.96L26.84 5.30667C26.95 5.10318 27.0054 4.87464 27.0007 4.64337C26.996 4.4121 26.9313 4.18601 26.8131 3.98718C26.6949 3.78836 26.5271 3.6236 26.3262 3.50899C26.1252 3.39439 25.898 3.33387 25.6667 3.33333H5.94671L4.69337 0.666666H0.333374ZM21.6667 22C20.2 22 19.0134 23.2 19.0134 24.6667C19.0134 26.1333 20.2 27.3333 21.6667 27.3333C23.1334 27.3333 24.3334 26.1333 24.3334 24.6667C24.3334 23.2 23.1334 22 21.6667 22Z"
          fill="#1B1B1B"
        />
      </svg>
    ),
  },
];

const Buttons = () => {
  return icons.map((icon) => (
    <button type="button" key={icon.id}>
      {icon.svg}
    </button>
  ));
};

const HeaderRight = () => {
  return (
    <ButtonWrap>
      <Buttons />
    </ButtonWrap>
  );
};

export default HeaderRight;
