import { Spinner } from '@vkontakte/vkui';
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  usePlatform,
} from '@vkontakte/vkui';

const LoadingBlock = () => {
  const platform = usePlatform();
  return (
    <AppRoot>
      <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>Корзина</PanelHeader>
              <div className="loading-block">
                <div className="loading-block__inner">
                  <Spinner size="large" />
                  <p className="loading-block__text">Идет загрузка данных с сервера</p>
                </div>
              </div>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default LoadingBlock;
