import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
}

export const CustomIcon = ({ icon: Icon }: Props) => {
  return (
    <div className="p-2 bg-slated-400/20 rounded-lg">
      <Icon strokeWidth={1} className="w-4 h-4" />
    </div>
  );
};
