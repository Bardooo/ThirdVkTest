import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  usePlatform,
} from '@vkontakte/vkui';

const EmptyCart = () => {
  const platform = usePlatform();

  return (
    <AppRoot>
      <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>Корзина</PanelHeader>
              <div className="cart__empty">
                <h2>Корзина пустая:(</h2>
                <p>Скорее всего, вы еще ничего не выбрали</p>
              </div>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default EmptyCart;
