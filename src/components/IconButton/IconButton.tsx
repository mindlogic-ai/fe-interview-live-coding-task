import { ForwardedRef, forwardRef } from 'react';
import { IconButton as ChakraIconButton } from '@chakra-ui/react';

import { variantStyles } from './IconButton.styles';
import { IconButtonProps } from './IconButton.types';

export const IconButton = forwardRef(
  (
    { variant = 'link', ...rest }: IconButtonProps,
    ref?: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <ChakraIconButton
        border="1px solid"
        borderRadius="full"
        background="transparent"
        {...variantStyles[variant]}
        {...rest}
        ref={ref}
      />
    );
  },
);

IconButton.displayName = 'IconButton';
