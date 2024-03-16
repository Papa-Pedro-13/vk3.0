import '@vkontakte/vkui/dist/vkui.css';

import {
  AppRoot,
  SplitLayout,
  PanelHeader,
  usePlatform,
} from '@vkontakte/vkui';

import { HomePage } from './pages/home';

function App() {
  const platform = usePlatform();

  return (
    <>
      <AppRoot>
        <SplitLayout
          header={platform !== 'vkcom' && <PanelHeader delimiter='none' />}
        >
          <HomePage />
        </SplitLayout>
      </AppRoot>
    </>
  );
}

export default App;
