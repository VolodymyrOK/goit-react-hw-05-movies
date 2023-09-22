import { toast } from 'react-hot-toast';

export const MessageToast = (typeError, message) => {
  let options = {};

  switch (typeError) {
    case 'errorfound': {
      options = {
        duration: 3000,
        position: 'top-center',
        style: {
          fontFamily: 'Segoe UI, sans-serif',
          color: '#ffffff',
          backgroundColor: '#ff0000',
        },
        icon: '😈',
      };
      break;
    }
    case 'foundok': {
      options = {
        duration: 3000,
        position: 'top-center',
        style: {
          fontFamily: 'Segoe UI, sans-serif',
          color: '#ffffff',
          backgroundColor: '#18b613',
        },
        icon: '😃',
      };
      break;
    }
    case 'errorloading': {
      options = {
        duration: 4000,
        position: 'top-center',
        style: {
          fontFamily: 'Segoe UI, sans-serif',
          color: '#ffffff',
          backgroundColor: '#b61e13',
        },
        icon: '😈',
      };
      break;
    }
    case 'emptysearch': {
      options = {
        duration: 3000,
        position: 'top-center',
        style: {
          fontFamily: 'Segoe UI, sans-serif',
          color: '#ffffff',
          backgroundColor: '#ffab26',
        },
        icon: '🤭',
      };
      break;
    }
    default: {
      throw new Error(`Unsupported variant prop value - ${typeError}`);
    }
  }
  toast(message, options);
};

// export const MessageToast = (typeError, message) => {
// let options = {};
// if (typeError === 'errorfound') {
//   options = {
//     duration: 3000,
//     position: 'top-center',
//     style: {
//       fontFamily: 'Segoe UI, sans-serif',
//       color: '#ffffff',
//       backgroundColor: '#ff0000',
//     },
//     icon: '😈',
//   };
// // }
// if (typeError === 'foundok') {
//   options = {
//     duration: 3000,
//     position: 'top-center',
//     style: {
//       fontFamily: 'Segoe UI, sans-serif',
//       color: '#ffffff',
//       backgroundColor: '#18b613',
//     },
//     icon: '😃',
//   };
// }
// if (typeError === 'errorloading') {
//   options = {
//     duration: 4000,
//     position: 'top-center',
//     style: {
//       fontFamily: 'Segoe UI, sans-serif',
//       color: '#ffffff',
//       backgroundColor: '#b61e13',
//     },
//     icon: '😈',
//   };
// }
// if (typeError === 'emptysearch') {
//   options = {
//     duration: 3000,
//     position: 'top-center',
//     style: {
//       fontFamily: 'Segoe UI, sans-serif',
//       color: '#ffffff',
//       backgroundColor: '#ffab26',
//     },
//     icon: '🤭',
//   };
// }
//   toast(message, options);
// };
