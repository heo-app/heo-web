export interface HeaderControllerProps {
  title: string;
  onHamburgerButtonClick: () => void;
  height?: number;
}
export interface HeaderViewProps {
  title: string;
  onHamburgerButtonClick: () => void;
  height?: number;
  onProfileIconClick: () => void;
  onLogoutClick: () => void;
}
