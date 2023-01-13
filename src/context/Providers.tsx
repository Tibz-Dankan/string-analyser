import { NotificationProvider } from "./NotificationContext";
import { StringProvider } from "./StringContext";

interface ProviderProps {
  children: JSX.Element;
}

export const Providers: React.FC<ProviderProps> = (props): JSX.Element => {
  return (
    <NotificationProvider>
      <StringProvider>{props.children}</StringProvider>
    </NotificationProvider>
  );
};
