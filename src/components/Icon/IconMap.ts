import { BiDetail, BiExpandAlt } from "react-icons/bi";
import { BsListNested, BsTranslate } from "react-icons/bs";
import { CiFileOn } from "react-icons/ci";
import {
  FaArchive,
  FaBeer,
  FaImage,
  FaMoneyBillWave,
  FaRegEye,
  FaRegEyeSlash,
  FaRegQuestionCircle,
  FaRegTrashAlt,
  FaRegUserCircle,
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaSortNumericDown,
  FaSortNumericUp,
  FaUniversity,
  FaUserCheck,
  FaUserPlus,
  FaUsers,
} from "react-icons/fa";
import {
  FaCheck,
  FaCode,
  FaLock,
  FaPersonChalkboard,
  FaRegCopy,
  FaRotateRight,
  FaUserClock,
} from "react-icons/fa6";
import { GiTwoCoins } from "react-icons/gi";
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { GrUserAdmin } from "react-icons/gr";
import { HiLightningBolt, HiOutlineLightBulb } from "react-icons/hi";
import {
  IoIosAddCircleOutline,
  IoIosArrowBack,
  IoIosAttach,
  IoIosCheckmarkCircle,
  IoIosList,
  IoIosMail,
  IoIosShareAlt,
  IoMdSave,
  IoMdSettings,
  IoMdThumbsDown,
  IoMdThumbsUp,
} from "react-icons/io";
import {
  IoAddCircleOutline,
  IoAddOutline,
  IoChatbubbleEllipses,
  IoChevronDownOutline,
  IoChevronForward,
  IoClose,
  IoCloseOutline,
  IoCodeSlash,
  IoDocumentTextSharp,
  IoEyeOffOutline,
  IoEyeOutline,
  IoFilter,
  IoHome,
  IoSearch,
  IoWarning,
  IoWarningOutline,
} from "react-icons/io5";
import { IconType as ReactIconType } from "react-icons/lib";
import {
  LuDownload,
  LuExternalLink,
  LuGraduationCap,
  LuInfo,
  LuMenu,
  LuSendHorizontal,
  LuUpload,
} from "react-icons/lu";
import {
  MdCardMembership,
  MdError,
  MdFilterList,
  MdLink,
  MdLogout,
  MdOutlineCalendarToday,
  MdOutlinePersonPin,
  MdPreview,
  MdSpaceDashboard,
  MdThumbsUpDown,
} from "react-icons/md";
import { RiPlayCircleLine } from "react-icons/ri";
import { RxDotsHorizontal } from "react-icons/rx";
import { SlSettings } from "react-icons/sl";
import {
  TbAppWindowFilled,
  TbLayoutNavbar,
  TbMessageChatbotFilled,
} from "react-icons/tb";

import AnalyticsIcon from "./icons/analytics.svg";
import BulbIcon from "./icons/bulb.svg";
import ChatIcon from "./icons/chat.svg";
import EditIcon from "./icons/edit.svg";
import FaceIcon from "./icons/face.svg";
import FilledAnalyticsIcon from "./icons/filled-analytics.svg";
import FilledBulbIcon from "./icons/filled-bulb.svg";
import FilledChatIcon from "./icons/filled-chat.svg";
import FilledEditIcon from "./icons/filled-edit.svg";
import FilledFaceIcon from "./icons/filled-face.svg";
import FilledLayoutIcon from "./icons/filled-layout.svg";
import LanguageIcon from "./icons/language.svg";
import LayoutIcon from "./icons/layout.svg";
import PendingIcon from "./icons/pending.svg";
import ReceiptIcon from "./icons/receipt.svg";
import SparklesIcon from "./icons/sparkles.svg";
import StoreIcon from "./icons/store.svg";
import StoreActiveIcon from "./icons/store_active.svg";
import StudioIcon from "./icons/studio.svg";
import StudioActiveIcon from "./icons/studio_active.svg";
import VerticalEllipsisIcon from "./icons/vertical-ellipsis.svg";

export const REACT_ICONS_MAP: { [key: string]: ReactIconType } = {
  BiDetail,
  BiExpandAlt,
  BsListNested,
  BsTranslate,
  CiFileOn,
  FaArchive,
  FaBeer,
  FaMoneyBillWave,
  FaCheck,
  FaCode,
  FaImage,
  FaLock,
  FaPersonChalkboard,
  FaRegQuestionCircle,
  FaRegCopy,
  FaRegTrashAlt,
  FaRegUserCircle,
  FaRegEye,
  FaRegEyeSlash,
  FaRotateRight,
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaSortNumericDown,
  FaSortNumericUp,
  FaUniversity,
  FaUserCheck,
  FaUserClock,
  FaUserPlus,
  FaUsers,
  GiTwoCoins,
  GoArrowUpRight,
  GoArrowDownRight,
  GrUserAdmin,
  HiLightningBolt,
  HiOutlineLightBulb,
  IoAddCircleOutline,
  IoAddOutline,
  IoChatbubbleEllipses,
  IoChevronDownOutline,
  IoChevronForward,
  IoCodeSlash,
  IoClose,
  IoCloseOutline,
  IoDocumentTextSharp,
  IoIosList,
  IoMdSave,
  IoMdThumbsUp,
  IoMdThumbsDown,
  IoEyeOutline,
  IoEyeOffOutline,
  IoFilter,
  IoHome,
  IoIosArrowBack,
  IoIosAttach,
  IoIosCheckmarkCircle,
  IoIosAddCircleOutline,
  IoIosMail,
  IoIosShareAlt,
  IoMdSettings,
  IoWarningOutline,
  IoSearch,
  IoWarning,
  LuExternalLink,
  LuDownload,
  MdFilterList,
  LuGraduationCap,
  LuInfo,
  LuMenu,
  LuSendHorizontal,
  LuUpload,
  MdCardMembership,
  MdError,
  MdLink,
  MdLogout,
  MdOutlineCalendarToday,
  MdOutlinePersonPin,
  MdPreview,
  MdSpaceDashboard,
  MdThumbsUpDown,
  RiPlayCircleLine,
  RxDotsHorizontal,
  SlSettings,
  TbAppWindowFilled,
  TbMessageChatbotFilled,
  TbLayoutNavbar,
};

/**
 * Map of icon names to SVGs. Records named as {iconName}: {iconName}Icon.
 *
 * Sorted alphabetically.
 */
export const CUSTOM_ICON_MAP: {
  [key: string]: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
} = {
  Analytics: AnalyticsIcon,
  Bulb: BulbIcon,
  Chat: ChatIcon,
  Edit: EditIcon,
  Face: FaceIcon,
  Language: LanguageIcon,
  Layout: LayoutIcon,
  FilledAnalytics: FilledAnalyticsIcon,
  FilledBulb: FilledBulbIcon,
  FilledChat: FilledChatIcon,
  FilledEdit: FilledEditIcon,
  FilledFace: FilledFaceIcon,
  FilledLayout: FilledLayoutIcon,
  Pending: PendingIcon,
  Sparkles: SparklesIcon,
  Studio: StudioIcon,
  StudioActive: StudioActiveIcon,
  Store: StoreIcon,
  StoreActive: StoreActiveIcon,
  Receipt: ReceiptIcon,
  VerticalEllipsis: VerticalEllipsisIcon,
} as const;

export type IconType =
  | keyof typeof CUSTOM_ICON_MAP
  | keyof typeof REACT_ICONS_MAP;

/**
 * Convert map of SVGs to a const of strings only to minimize import size
 */
export const IconTypes: { [K in IconType]: IconType } = Object.keys({
  // ...CUSTOM_ICON_MAP,
  ...REACT_ICONS_MAP,
}).reduce((prevVal, currVal) => {
  prevVal[currVal] = currVal;
  return prevVal;
}, {} as { [K in IconType]: IconType });
