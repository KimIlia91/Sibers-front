"use client";
import { store } from "@/store/store";
import { Provider} from "react-redux";

const App = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  
  return (
    <main>
      <Provider store={store}>{children}</Provider>
    </main>
  );
};

export default App;
