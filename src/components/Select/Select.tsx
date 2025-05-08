import React from 'react';
import ReactSelect, { GroupBase, MenuListProps } from 'react-select';
import { useTheme } from '@chakra-ui/react';

import { resolveStyle } from './_utils/resolveStyle';
import { VirtualizedMenuList } from './MenuList';
import { VirtualizedMenuListProvider } from './MenuList/VirtualizedMenuListContext';
import {
  controlStyles,
  getControlVariantStyles,
  menuStyles,
  optionStyles,
  placeholderStyles,
} from './Select.styles';
import { SelectProps } from './Select.types';

export const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  styles,
  variant = 'default',
  optionHeight = 35,
  onMenuScrollToBottom,
  ...rest
}: SelectProps<Option, IsMulti, Group>) => {
  const theme = useTheme();

  return (
    <VirtualizedMenuListProvider>
      <ReactSelect<Option, IsMulti, Group>
        closeMenuOnSelect
        closeMenuOnScroll
        isSearchable={false}
        tabIndex={0}
        components={{
          MenuList: (props: MenuListProps<Option, IsMulti, Group>) => (
            <VirtualizedMenuList<Option, IsMulti, Group>
              {...props}
              onMenuScrollToBottom={onMenuScrollToBottom}
              optionHeight={optionHeight}
            />
          ),
          ...rest.components,
        }}
        styles={{
          container: (base, state) => ({
            ...resolveStyle(
              {
                ...base,
                height: '100%',
              },
              styles?.container,
              state,
            ),
          }),
          placeholder: (base, state) => ({
            ...resolveStyle(
              {
                ...base,
                ...placeholderStyles,
              },
              styles?.placeholder,
              state,
            ),
          }),
          valueContainer: (base, state) => ({
            ...resolveStyle(
              {
                ...base,
                textAlign: 'left',
              },
              styles?.valueContainer,
              state,
            ),
          }),
          singleValue: (base, state) => ({
            ...resolveStyle(
              {
                ...base,
                margin: 0,
                color: theme.colors.gray[1000],
              },
              styles?.singleValue,
              state,
            ),
          }),
          menu: (base, state) => ({
            ...resolveStyle(
              {
                ...base,
                ...menuStyles,
              },
              styles?.menu,
              state,
            ),
          }),
          menuList: (base, state) => ({
            ...resolveStyle(
              {
                ...base,
                padding: `0px ${theme.spacing[4]}`,
                // Important for the virtualized list - DON'T override overflow
                // as we need the default 'auto' from react-select for scrolling to work
              },
              styles?.menuList,
              state,
            ),
          }),
          option: (base, state) => ({
            ...resolveStyle(
              {
                ...base,
                textAlign: 'left',
                padding: `${theme.spacing[2]} ${theme.spacing[4]}`,
                ...optionStyles(state),
              },
              styles?.option,
              state,
            ),
          }),
          menuPortal: (base, state) => ({
            ...resolveStyle(
              {
                ...base,
                zIndex: 9999,
              },
              styles?.menuPortal,
              state,
            ),
          }),
          control: (base, state) => ({
            ...resolveStyle(
              {
                ...base,
                ...controlStyles,
                ...getControlVariantStyles(state, variant),
                ...(state.isDisabled && {
                  bg: theme.colors.gray[50],
                }),
              },
              styles?.control,
              state,
            ),
          }),
          indicatorSeparator: (base, state) => ({
            ...resolveStyle(
              {
                ...base,
                display: 'none',
              },
              styles?.indicatorSeparator,
              state,
            ),
          }),
          dropdownIndicator: (base, state) => ({
            ...resolveStyle(
              {
                ...base,
                color: theme.colors.gray[800],
              },
              styles?.dropdownIndicator,
              state,
            ),
          }),
        }}
        {...rest}
      />
    </VirtualizedMenuListProvider>
  );
};
