import './scss/App.scss';
import '@vkontakte/vkui/dist/vkui.css';
import { useSelector } from 'react-redux';
import { selectCart } from './redux/cart/selectors';
import CartItem from './components/CartItem';
import { useAppDispatch } from './redux/store';
import { useEffect } from 'react';
import { fetchCartItems } from './redux/cart/asyncAction';
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  usePlatform,
} from '@vkontakte/vkui';
import ErrorBlock from './components/ErrorBlock';
import LoadingBlock from './components/LoadingBlock';

export type ItemType = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  count: number;
};

const App = () => {
  const platform = usePlatform();
  const { items, totalPrice, status } = useSelector(selectCart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCartItems());
  }, []);

  if (status === 'error') {
    return <ErrorBlock />
  } else if (status === 'loading') {
    return <LoadingBlock />
  } else {
    return (
      <AppRoot>
        <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}>
          <SplitCol autoSpaced>
            <View activePanel="main">
              <Panel id="main">
                <PanelHeader>Корзина</PanelHeader>
                <div className="main">
                  <Group className="left" header={<Header mode="secondary">Товары</Header>}>
                    <div className="cart-items">
                      {items.map((item: ItemType) => (
                        <CartItem key={item.id} {...item} />
                      ))}
                    </div>
                  </Group>
                  <Group className="right" header={<Header mode="secondary">Итог</Header>}>
                    <div className="cart-total">
                      <div className="cart-total__inner">
                        <p className="cart-total__top">
                          Итого <span>{totalPrice} ₽</span>
                        </p>
                      </div>
                    </div>
                  </Group>
                </div>
              </Panel>
            </View>
          </SplitCol>
        </SplitLayout>
      </AppRoot>
    );
  }
};

export default App;
