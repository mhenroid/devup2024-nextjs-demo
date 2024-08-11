import Navigation from "next/navigation";
import Autorefresh from "./autorefresh";

export default async function Home() {
  const date = new Date().toJSON();
  return (
    <>
      Server Time: {date}
      <Autorefresh />
    </>
  );
}
