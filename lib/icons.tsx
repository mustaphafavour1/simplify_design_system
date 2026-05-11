/**
 * Phosphor Icon Resolver
 * Maps string icon names (stored in Sanity) to actual Phosphor components.
 * Editors pick from the curated list defined in sanity/schemas/product.ts
 */
import {
  ArrowsLeftRight, Receipt, Bank, ChartBar, ChartLine, ChartPie,
  Code, ShieldCheck, ShieldStar, CurrencyNgn, Users, User,
  FileText, FilePdf, Gear, House, Bell, MagnifyingGlass,
  ArrowRight, ArrowLeft, ArrowDown, ArrowUp, ArrowUpRight,
  Plus, Minus, Trash, PencilSimple, Copy, Download, Upload,
  Eye, EyeSlash, Lock, Key, CheckCircle, XCircle, Warning,
  Info, Question, Wallet, CreditCard, Money, Coins, Handshake,
  Buildings, Factory, Globe, MapPin, Phone, Envelope, Calendar,
  CalendarBlank, Clock, Timer, Lightning, Star, Heart, Bookmark,
  Tag, Funnel, SortAscending, SortDescending, DotsThree,
  SquaresFour, GridFour, List, Table, Rows, Columns,
  PaperPlaneTilt, Package, Cube, Stack, Laptop, DeviceMobile,
  Monitor, Database, CloudArrowUp, CloudArrowDown,
  PlugsConnected, LinkSimple, QrCode, Barcode,
  SignIn, SignOut, UserCircle, UserPlus, UsersThree,
  Certificate, Clipboard, ClipboardText, Note, NotePencil,
  Wrench, SlidersHorizontal, ToggleLeft, ToggleRight,
  CaretDown, CaretUp, CaretLeft, CaretRight,
  ArrowLineDown, ArrowLineUp, ArrowClockwise,
  CheckSquare, XSquare, MinusSquare,
  IdentificationCard, IdentificationBadge,
  Headset, ChatsCircle, ChatText,
  TrendUp, TrendDown,
} from '@phosphor-icons/react'

export const iconMap: Record<string, React.ComponentType<any>> = {
  ArrowsLeftRight, Receipt, Bank, ChartBar, ChartLine, ChartPie,
  Code, ShieldCheck, ShieldStar, CurrencyNgn, Users, User,
  FileText, FilePdf, Gear, House, Bell, MagnifyingGlass,
  ArrowRight, ArrowLeft, ArrowDown, ArrowUp, ArrowUpRight,
  Plus, Minus, Trash, PencilSimple, Copy, Download, Upload,
  Eye, EyeSlash, Lock, Key, CheckCircle, XCircle, Warning,
  Info, Question, Wallet, CreditCard, Money, Coins, Handshake,
  Buildings, Factory, Globe, MapPin, Phone, Envelope, Calendar,
  CalendarBlank, Clock, Timer, Lightning, Star, Heart, Bookmark,
  Tag, Funnel, SortAscending, SortDescending, DotsThree,
  SquaresFour, GridFour, List, Table, Rows, Columns,
  PaperPlaneTilt, Package, Cube, Stack, Laptop, DeviceMobile,
  Monitor, Database, CloudArrowUp, CloudArrowDown,
  PlugsConnected, LinkSimple, QrCode, Barcode,
  SignIn, SignOut, UserCircle, UserPlus, UsersThree,
  Certificate, Clipboard, ClipboardText, Note, NotePencil,
  Wrench, SlidersHorizontal, ToggleLeft, ToggleRight,
  CaretDown, CaretUp, CaretLeft, CaretRight,
  ArrowLineDown, ArrowLineUp, ArrowClockwise,
  CheckSquare, XSquare, MinusSquare,
  IdentificationCard, IdentificationBadge,
  Headset, ChatsCircle, ChatText,
  TrendUp, TrendDown,
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

// Curated list for Sanity dropdown — copy these values into the schema
export const ICON_OPTIONS = Object.keys(iconMap).sort().map(k => ({ value: k, title: k }))