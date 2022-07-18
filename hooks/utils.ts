import { AlertStatus, useToast } from "@chakra-ui/react";

const useUtils = () => {

  const toaster = (toast: any, message: string, statusMessage: AlertStatus) => {
    toast({
      title: message,
      status: statusMessage,
      isClosable: true,
      position: "top",
    });
  };

  return {
    toaster
  }
};

export { useUtils };
