import '@vkontakte/vkui/dist/vkui.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  AppRoot,
  SplitLayout,
  PanelHeader,
  ConfigProvider,
  AdaptivityProvider,
} from '@vkontakte/vkui';

import { HomePage } from '../pages/home';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout header={<PanelHeader delimiter='none' />}>
            <HomePage />
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  </React.StrictMode>
);
