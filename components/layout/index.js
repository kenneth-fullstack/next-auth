// Components
import Header from "./Header";

function CoreLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
}

export default CoreLayout;
