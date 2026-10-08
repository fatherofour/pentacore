/**
 * Site icon set — Phosphor Icons (https://phosphoricons.com).
 * Exported under the names the components already use, each with a default weight:
 *   duotone → feature / service icons, bold → arrows & chevrons, fill → checks & stars, regular → UI glyphs.
 * Uses the SSR entry so icons work in both server and client components.
 */
import type { ComponentType } from "react";
import type { IconProps, IconWeight } from "@phosphor-icons/react";
import {
  AppWindow as PAppWindow,
  ArrowLeft as PArrowLeft,
  ArrowRight as PArrowRight,
  ArrowUp as PArrowUp,
  Bank as PBank,
  Briefcase as PBriefcase,
  Building as PBuilding,
  Buildings as PBuildings,
  CalendarBlank as PCalendarBlank,
  CaretDown as PCaretDown,
  ChartBar as PChartBar,
  ChartLineUp as PChartLineUp,
  CheckCircle as PCheckCircle,
  CircleNotch as PCircleNotch,
  ClipboardText as PClipboardText,
  Clock as PClock,
  Cloud as PCloud,
  Code as PCode,
  Cpu as PCpu,
  Database as PDatabase,
  EnvelopeSimple as PEnvelopeSimple,
  Eye as PEye,
  Factory as PFactory,
  FileText as PFileText,
  Gear as PGear,
  GitBranch as PGitBranch,
  Globe as PGlobe,
  GraduationCap as PGraduationCap,
  Handshake as PHandshake,
  HardDrives as PHardDrives,
  Headset as PHeadset,
  Heart as PHeart,
  Lightbulb as PLightbulb,
  Lightning as PLightning,
  List as PList,
  ListMagnifyingGlass as PListMagnifyingGlass,
  LockKey as PLockKey,
  MagnifyingGlass as PMagnifyingGlass,
  MapPin as PMapPin,
  Medal as PMedal,
  Monitor as PMonitor,
  Moon as PMoon,
  PaperPlaneTilt as PPaperPlaneTilt,
  Phone as PPhone,
  PhoneCall as PPhoneCall,
  Play as PPlay,
  RocketLaunch as PRocketLaunch,
  ShieldCheck as PShieldCheck,
  ShoppingBag as PShoppingBag,
  Star as PStar,
  Sun as PSun,
  Target as PTarget,
  TrendDown as PTrendDown,
  TrendUp as PTrendUp,
  UsersThree as PUsersThree,
  X as PX,
} from "@phosphor-icons/react/dist/ssr";

export type IconType = ComponentType<IconProps>;

function withWeight(Base: IconType, weight: IconWeight, name: string): IconType {
  const Wrapped = (props: IconProps) => <Base weight={weight} {...props} />;
  Wrapped.displayName = name;
  return Wrapped;
}

// ── feature / service icons (duotone) ─────────────────────────────
export const Activity = withWeight(PChartLineUp, "duotone", "Activity");
export const AppWindow = withWeight(PAppWindow, "duotone", "AppWindow");
export const Award = withWeight(PMedal, "duotone", "Award");
export const BarChart3 = withWeight(PChartBar, "duotone", "BarChart3");
export const Briefcase = withWeight(PBriefcase, "duotone", "Briefcase");
export const Building = withWeight(PBuilding, "duotone", "Building");
export const Building2 = withWeight(PBuildings, "duotone", "Building2");
export const Calendar = withWeight(PCalendarBlank, "duotone", "Calendar");
export const ClipboardCheck = withWeight(PClipboardText, "duotone", "ClipboardCheck");
export const Clock = withWeight(PClock, "duotone", "Clock");
export const Cloud = withWeight(PCloud, "duotone", "Cloud");
export const Code2 = withWeight(PCode, "duotone", "Code2");
export const Cog = withWeight(PGear, "duotone", "Cog");
export const Cpu = withWeight(PCpu, "duotone", "Cpu");
export const Database = withWeight(PDatabase, "duotone", "Database");
export const Eye = withWeight(PEye, "duotone", "Eye");
export const Factory = withWeight(PFactory, "duotone", "Factory");
export const FileText = withWeight(PFileText, "duotone", "FileText");
export const GitBranch = withWeight(PGitBranch, "duotone", "GitBranch");
export const Globe = withWeight(PGlobe, "duotone", "Globe");
export const GraduationCap = withWeight(PGraduationCap, "duotone", "GraduationCap");
export const Headphones = withWeight(PHeadset, "duotone", "Headphones");
export const Heart = withWeight(PHeart, "duotone", "Heart");
export const HeartHandshake = withWeight(PHandshake, "duotone", "HeartHandshake");
export const Landmark = withWeight(PBank, "duotone", "Landmark");
export const Lightbulb = withWeight(PLightbulb, "duotone", "Lightbulb");
export const Lock = withWeight(PLockKey, "duotone", "Lock");
export const Monitor = withWeight(PMonitor, "duotone", "Monitor");
export const PhoneCall = withWeight(PPhoneCall, "duotone", "PhoneCall");
export const Rocket = withWeight(PRocketLaunch, "duotone", "Rocket");
export const SearchCheck = withWeight(PListMagnifyingGlass, "duotone", "SearchCheck");
export const Server = withWeight(PHardDrives, "duotone", "Server");
export const Shield = withWeight(PShieldCheck, "duotone", "Shield");
export const ShoppingBag = withWeight(PShoppingBag, "duotone", "ShoppingBag");
export const Target = withWeight(PTarget, "duotone", "Target");
export const TrendingDown = withWeight(PTrendDown, "duotone", "TrendingDown");
export const TrendingUp = withWeight(PTrendUp, "duotone", "TrendingUp");
export const Users = withWeight(PUsersThree, "duotone", "Users");
export const Zap = withWeight(PLightning, "duotone", "Zap");

// ── arrows & chevrons (bold) ──────────────────────────────────────
export const ArrowLeft = withWeight(PArrowLeft, "bold", "ArrowLeft");
export const ArrowRight = withWeight(PArrowRight, "bold", "ArrowRight");
export const ArrowUp = withWeight(PArrowUp, "bold", "ArrowUp");
export const ChevronDown = withWeight(PCaretDown, "bold", "ChevronDown");
export const Loader2 = withWeight(PCircleNotch, "bold", "Loader2");

// ── checks, stars, play (fill) ────────────────────────────────────
export const CheckCircle = withWeight(PCheckCircle, "fill", "CheckCircle");
export const CheckCircle2 = withWeight(PCheckCircle, "fill", "CheckCircle2");
export const Play = withWeight(PPlay, "fill", "Play");
export const Star = withWeight(PStar, "fill", "Star");

// ── UI glyphs (regular) ───────────────────────────────────────────
export const Mail = withWeight(PEnvelopeSimple, "regular", "Mail");
export const MapPin = withWeight(PMapPin, "regular", "MapPin");
export const Menu = withWeight(PList, "regular", "Menu");
export const Moon = withWeight(PMoon, "regular", "Moon");
export const Phone = withWeight(PPhone, "regular", "Phone");
export const Search = withWeight(PMagnifyingGlass, "regular", "Search");
export const Send = withWeight(PPaperPlaneTilt, "regular", "Send");
export const Sun = withWeight(PSun, "regular", "Sun");
export const X = withWeight(PX, "regular", "X");
