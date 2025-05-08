import { Box } from "@chakra-ui/react";
import Image from "next/image";
import emptyStateSvg from "../../../public/empty-state.svg";

export const EmptyState = () => {
  return (
    <Box>
      <Image src={emptyStateSvg} alt="Empty state" />
    </Box>
  );
};
