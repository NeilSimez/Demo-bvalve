import { LucideIcon } from "lucide-react";
import { CustomIcon } from "../CustomIcon";
import { CustomTooltip } from "../CustomTooltip";

interface Props {
  icon: LucideIcon;
  total: string;
  average: number;
  title: string;
  tooltiptext: string;
}

export default function CardSummary({
  icon: Icon,
  total,
  average,
  title,
  tooltiptext,
}: Props) {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition ">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <CustomIcon icon={Icon} />
          {title}
        </div>
        <CustomTooltip content={tooltiptext} />
      </div>
    </div>
  );
}
