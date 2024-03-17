import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  usePlatform,
} from '@vkontakte/vkui';

const ErrorBlock = () => {
  const platform = usePlatform();

  return (
    <AppRoot>
      <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>Корзина</PanelHeader>
              <div className='error-block'>
                <div className="error-block__inner">
                  <h4 className="error-block__title">Непредвиденные неполадки:&#40;</h4>
                  <p className="error-block__text">Произошла ошибка при получении данных</p>
                  <p className="error-block__text">Попробуйте перезагрузить страницу</p>
                </div>
              </div>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  )
}

export default ErrorBlock
