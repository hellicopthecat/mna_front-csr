import {ThemeProvider} from "styled-components";
import Layout from "./components/layout.tsx";
import GlobalStlye from "./libs/globalStyle.ts";
import {dark} from "./libs/theme.ts";
import Preview from "./page/beforeLogin/preview/preview.tsx";
function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStlye />
      <Layout>
        <Preview />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
