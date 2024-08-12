import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useNavigate } from "react-router-dom";
type sidebarItemProps = {
  text: string;
  children: React.ReactNode;
  to: string;
  onEnterPress?: ()=>void
};

function SideBarItem({ text, children, to, onEnterPress:onEnter }: sidebarItemProps) {
  const navigate = useNavigate();
  const onEnterPress = () => {
    if (onEnter !== undefined) return onEnter()
    navigate(to);
  };

  const { ref, focused } = useFocusable({ onEnterPress });

  return (
    <li>
      <div
        ref={ref}
        className={focused ? "a active" : " a"}
        onClick={() => onEnterPress()}
      >
        <i>{children}</i>
        <span className="tooltip">{text}</span>
      </div>
    </li>
  );
}

export default SideBarItem;
