import { SplitCol, Panel, View, PanelHeader } from '@vkontakte/vkui';

import FactBlock from '../../entities/fact-block/ui';
import FormName from '../../entities/form/ui';

export const HomePage = () => {
  return (
    <SplitCol autoSpaced>
      <View activePanel='main'>
        <Panel id='main'>
          <PanelHeader>VKTest</PanelHeader>
          <FactBlock />
          <FormName />
        </Panel>
      </View>
    </SplitCol>
  );
};
