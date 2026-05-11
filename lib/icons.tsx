/**
 * Phosphor Icon Resolver — SSR safe
 * Imports from /dist/ssr so this works in both Server and Client Components.
 */
import {
  ArrowsLeftRight, Receipt, Bank, ChartBar, ChartLine, ChartPie,
  Code, ShieldCheck, ShieldStar, CurrencyNgn, Users, User,
  FileText, Gear, House, Bell, MagnifyingGlass,
  ArrowRight, ArrowLeft, ArrowDown, ArrowUp, ArrowUpRight,
  Plus, Minus, Trash, PencilSimple, Copy, Download, Upload,
  Eye, EyeSlash, Lock, Key, CheckCircle, XCircle, Warning,
  Info, Wallet, CreditCard, Money, Coins, Handshake,
  Buildings, Globe, MapPin, Envelope, Calendar,
  CalendarBlank, Clock, Timer, Lightning, Star, Bookmark,
  Tag, Funnel, DotsThree, SquaresFour, GridFour, List,
  Table, PaperPlaneTilt, Package, Cube, Stack, Laptop,
  DeviceMobile, Monitor, Database, CloudArrowUp, CloudArrowDown,
  PlugsConnected, LinkSimple, UserCircle, UserPlus, UsersThree,
  Certificate, Clipboard, ClipboardText, Note, Wrench,
  SlidersHorizontal, CaretDown, CaretUp, CaretLeft, CaretRight,
  ArrowLineDown, ArrowLineUp, ArrowClockwise,
  IdentificationCard, IdentificationBadge, Headset, ChatText,
  TrendUp, TrendDown, Question, FilePdf, NotePencil,
  ToggleLeft, ToggleRight, CheckSquare, XSquare,
} from '@phosphor-icons/react/dist/ssr'

export const iconMap: Record<string, React.ComponentType<any>> = {
  ArrowsLeftRight, Receipt, Bank, ChartBar, ChartLine, ChartPie,
  Code, ShieldCheck, ShieldStar, CurrencyNgn, Users, User,
  FileText, Gear, House, Bell, MagnifyingGlass,
  ArrowRight, ArrowLeft, ArrowDown, ArrowUp, ArrowUpRight,
  Plus, Minus, Trash, PencilSimple, Copy, Download, Upload,
  Eye, EyeSlash, Lock, Key, CheckCircle, XCircle, Warning,
  Info, Wallet, CreditCard, Money, Coins, Handshake,
  Buildings, Globe, MapPin, Envelope, Calendar,
  CalendarBlank, Clock, Timer, Lightning, Star, Bookmark,
  Tag, Funnel, DotsThree, SquaresFour, GridFour, List,
  Table, PaperPlaneTilt, Package, Cube, Stack, Laptop,
  DeviceMobile, Monitor, Database, CloudArrowUp, CloudArrowDown,
  PlugsConnected, LinkSimple, UserCircle, UserPlus, UsersThree,
  Certificate, Clipboard, ClipboardText, Note, Wrench,
  SlidersHorizontal, CaretDown, CaretUp, CaretLeft, CaretRight,
  ArrowLineDown, ArrowLineUp, ArrowClockwise,
  IdentificationCard, IdentificationBadge, Headset, ChatText,
  TrendUp, TrendDown, Question, FilePdf, NotePencil,
  ToggleLeft, ToggleRight, CheckSquare, XSquare,
}

type Props = {
  name: string
  size?: number
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
  color?: string
}

export function PhosphorIcon({ name, size = 20, weight = 'duotone', color }: Props) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon size={size} weight={weight} color={color} />
}

export const ICON_OPTIONS = Object.keys(iconMap).sort().map(k => ({ value: k, title: k }))