import { FlexProps } from '@chakra-ui/react';

export interface PaginationProps extends FlexProps {
  /**
   * Current page index
   */
  currentPage?: number;
  /**
   * Callback function when current page index is changed
   */
  onCurrentPageChange?: (page: number) => void;
  /**
   * Callback function when back button is clicked
   */
  onBack?: () => void;
  /**
   * Callback function when next button is clicked
   */
  onNext?: () => void;
  /**
   * Total number of items
   */
  numTotalItems: number;
  /**
   * Options for the select component to control items per page
   */
  itemsPerPageOptions?: Array<number>;
  /**
   * Current items per page
   */
  itemsPerPage: number;
  /**
   * Callback function when the select component to control items per page is changed
   */
  onItemsPerPageOptionChange?: (option: number) => void;
}
