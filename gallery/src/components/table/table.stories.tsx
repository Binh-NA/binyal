import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex, Table, Tooltip, SpaceX, TableColumn, Icon } from 'binyal';
import { formatMoney } from '../../../../binyal/src/utils';

interface Coin {
  id: string;
  name: string;
  price: number;
  percent_24: number;
  percent_7d: number;
  type_24: 'up' | 'down';
  type_7d: 'up' | 'down';
  market_cap: number;
  volume: number;
  circulating_supply: number;
}

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    className: {
      name: 'ClassName',
      description: 'Set the class for config Toggle',
      defaultValue: undefined,
      type: 'string',
    },
    size: {
      name: 'Size',
      description: 'Set the size of Toggle',
      defaultValue: 'medium',
      options: ['small', 'medium', 'large'],
      control: {
        type: 'select',
      },
    },
    style: {
      name: 'Style',
      description: 'Set the style of Toggle',
      defaultValue: 'flat',
      options: ['flat', 'primary', 'warning', 'danger'],
      control: {
        type: 'select',
      },
    },
    height: {
      name: 'Height',
      description: 'Set height of table',
      defaultValue: false,
      type: 'string',
    },
    fill: {
      name: 'Fill',
      description: 'Option to fit Toggle width to its parent width',
      defaultValue: false,
      type: 'boolean',
    },
    striped: {
      name: 'Striped',
      description: 'Css a table is striped',
      defaultValue: false,
      type: 'boolean',
    },
    border: {
      name: 'Border',
      description: 'Css border for `tr` `td` of table',
      defaultValue: false,
      type: 'boolean',
    },
    shadow: {
      name: 'Shadow',
      description: 'Css a table is shadow',
      defaultValue: undefined,
      type: 'boolean',
    },
    rows: {
      name: 'Rows',
      description: 'Set rows data',
      defaultValue: undefined,
      type: 'symbol',
    },
    columns: {
      name: 'Columns',
      description: 'Set columns table',
      defaultValue: undefined,
      type: 'symbol',
    },
  },
} as ComponentMeta<typeof Table>;

const rows: Coin[] = [
  {
    id: 'btc',
    name: 'Bitcoin',
    price: 39070.45,
    percent_24: 0.82,
    percent_7d: 5.7,
    type_24: 'up',
    type_7d: 'down',
    market_cap: 742246728680,
    volume: 31502436335,
    circulating_supply: 18984593,
  },
  {
    id: 'eth',
    name: 'Ethereum',
    price: 2617.52,
    percent_24: 2.84,
    percent_7d: 3.44,
    type_24: 'up',
    type_7d: 'down',
    market_cap: 314532835961,
    volume: 15077743560,
    circulating_supply: 119978706,
  },
  {
    id: 'bnb',
    name: 'BNB',
    price: 368.7,
    percent_24: 0.61,
    percent_7d: 6.92,
    type_24: 'up',
    type_7d: 'down',
    market_cap: 60904777305,
    volume: 1541601658,
    circulating_supply: 165116761,
  },
  {
    id: 'xrp',
    name: 'XRP',
    price: 0.7603,
    percent_24: 0.2,
    percent_7d: 1.93,
    type_24: 'up',
    type_7d: 'up',
    market_cap: 36573945632,
    volume: 2098252100,
    circulating_supply: 48046106688,
  },
  {
    id: 'luna',
    name: 'Terra',
    price: 87.51,
    percent_24: 5.9,
    percent_7d: 5.92,
    type_24: 'down',
    type_7d: 'down',
    market_cap: 32532975877,
    volume: 235366472,
    circulating_supply: 370056827,
  },
  {
    id: 'ada',
    name: 'Cardano',
    price: 0.7959,
    percent_24: 0.32,
    percent_7d: 5.06,
    type_24: 'up',
    type_7d: 'down',
    market_cap: 26838756984,
    volume: 1029913298,
    circulating_supply: 33700550913,
  },
  {
    id: 'sol',
    name: 'Solana',
    price: 81.74,
    percent_24: 2.49,
    percent_7d: 6.9,
    type_24: 'up',
    type_7d: 'down',
    market_cap: 26195924245,
    volume: 1900427538,
    circulating_supply: 319775774,
  },
  {
    id: 'avax',
    name: 'Avalanche',
    price: 68.46,
    percent_24: 2.38,
    percent_7d: 12.16,
    type_24: 'up',
    type_7d: 'up',
    market_cap: 18200874549,
    volume: 1092685038,
    circulating_supply: 266556652,
  },
  {
    id: 'dot',
    name: 'Polkadot',
    price: 18.15,
    percent_24: 4.76,
    percent_7d: 2.83,
    type_24: 'up',
    type_7d: 'up',
    market_cap: 17850708565,
    volume: 874238235,
    circulating_supply: 987579315,
  },
  {
    id: 'doge',
    name: 'Dogecoin',
    price: 0.1128,
    percent_24: 0.33,
    percent_7d: 6.72,
    type_24: 'up',
    type_7d: 'down',
    market_cap: 14946168144,
    volume: 466914212,
    circulating_supply: 132670764300,
  },
  {
    id: 'Matic',
    name: 'Polygon',
    price: 1.36,
    percent_24: 0.81,
    percent_7d: 9.82,
    type_24: 'up',
    type_7d: 'down',
    market_cap: 10452559649,
    volume: 700154822,
    circulating_supply: 7690755023,
  },
];

const columns: TableColumn<Coin>[] = [
  {
    title: '#',
    render: (_, index) => index + 1,
  },
  {
    title: 'Name',
    render: 'name',
  },
  {
    title: 'Price',
    align: 'right',
    render: (coin) => `$${formatMoney(coin.price)}`,
  },
  {
    title: '24h %',
    align: 'right',
    render: (coin) => (
      <span style={{ color: coin.type_24 === 'up' ? '#16c784' : '#ea3943' }}>
        {`${formatMoney(coin.percent_24)}%`}
      </span>
    ),
  },
  {
    title: '7d %',
    align: 'right',
    render: (coin) => (
      <span style={{ color: coin.type_7d === 'up' ? '#16c784' : '#ea3943' }}>
        {`${formatMoney(coin.percent_7d)}%`}
      </span>
    ),
  },
  {
    title: (
      <Flex justifyContent={Flex.align.end} alignItems={Flex.align.center}>
        <span>Market Cap</span>
        <SpaceX size={8} />
        <Tooltip
          style="flat"
          title={
            <div style={{ padding: '6px 12px', maxWidth: 400 }}>
              <p>
                The total market value of a cryptocurrency's circulating supply.
              </p>
              <p>
                It is analogous to the free-float capitalization in the stock
                market.
              </p>
              <p>Market Cap = Current Price x Circulating Supply.</p>
            </div>
          }
          placement={Tooltip.placement.bottom}
        >
          <Icon symbol="info" />
        </Tooltip>
      </Flex>
    ),
    align: 'right',
    render: (coin) => `$${formatMoney(coin.market_cap)}`,
  },
  {
    title: (
      <Flex justifyContent={Flex.align.end} alignItems={Flex.align.center}>
        <span>Volume (24h)</span>
        <SpaceX size={8} />
        <Tooltip
          style="flat"
          title={
            <div style={{ padding: '6px 12px', maxWidth: 400 }}>
              <p>A measure of how much of a cryptocurrency</p>
              <p>was traded in the last 24 hours.</p>
            </div>
          }
          placement={Tooltip.placement.bottom}
        >
          <Icon symbol="info" />
        </Tooltip>
      </Flex>
    ),
    align: 'right',
    render: (coin) => `$${formatMoney(coin.volume)}`,
  },
  {
    title: (
      <Flex justifyContent={Flex.align.end} alignItems={Flex.align.center}>
        <span>Circulating Supply</span>
        <SpaceX size={8} />
        <Tooltip
          style="flat"
          title={
            <div style={{ padding: '6px 12px', maxWidth: 400 }}>
              <p>
                The amount of coins that are circulating in the market and are
                in public hands.
              </p>
              <p>It is analogous to the flowing shares in the stock market.</p>
            </div>
          }
          placement={Tooltip.placement.bottomEnd}
        >
          <Icon symbol="info" />
        </Tooltip>
      </Flex>
    ),
    align: 'right',
    render: (coin) => (
      <span style={{ textTransform: 'uppercase' }}>{`${formatMoney(
        coin.circulating_supply,
      )} ${coin.id}`}</span>
    ),
  },
];

const Template: ComponentStory<typeof Table> = (args) => (
  <div style={{ whiteSpace: 'nowrap' }}>
    <Table<Coin> {...args} columns={columns} rows={rows} />
  </div>
);

export const Simple = Template.bind({});
Simple.args = {
  border: true,
};

export const Flat = Template.bind({});
Flat.args = {
  shadow: true,
};

export const Fill = Template.bind({});
Fill.args = {
  shadow: true,
  fill: true,
};

export const Striped = Template.bind({});
Striped.args = {
  shadow: true,
  fill: true,
  striped: true,
};

export const Height = Template.bind({});
Height.args = {
  shadow: true,
  fill: true,
  height: 'calc(100vh - 300px)',
};

const stickyColumns: TableColumn<Coin>[] = [
  {
    title: '#',
    render: (_, index) => index + 1,
    fixed: {
      left: true,
    },
  },
  {
    title: 'Name',
    render: 'name',
  },
  {
    title: 'Price',
    align: 'right',
    render: (coin) => `$${formatMoney(coin.price)}`,
    fixed: {
      left: true,
    },
  },
  {
    title: '24h %',
    align: 'right',
    render: (coin) => (
      <span style={{ color: coin.type_24 === 'up' ? '#16c784' : '#ea3943' }}>
        {`${formatMoney(coin.percent_24)}%`}
      </span>
    ),
  },
  {
    title: '7d %',
    align: 'right',
    render: (coin) => (
      <span style={{ color: coin.type_7d === 'up' ? '#16c784' : '#ea3943' }}>
        {`${formatMoney(coin.percent_7d)}%`}
      </span>
    ),
  },
  {
    title: '24h %',
    align: 'right',
    render: (coin) => (
      <span style={{ color: coin.type_24 === 'up' ? '#16c784' : '#ea3943' }}>
        {`${formatMoney(coin.percent_24)}%`}
      </span>
    ),
  },
  {
    title: '7d %',
    align: 'right',
    render: (coin) => (
      <span style={{ color: coin.type_7d === 'up' ? '#16c784' : '#ea3943' }}>
        {`${formatMoney(coin.percent_7d)}%`}
      </span>
    ),
  },
  {
    title: '24h %',
    align: 'right',
    render: (coin) => (
      <span style={{ color: coin.type_24 === 'up' ? '#16c784' : '#ea3943' }}>
        {`${formatMoney(coin.percent_24)}%`}
      </span>
    ),
  },
  {
    title: '7d %',
    align: 'right',
    render: (coin) => (
      <span style={{ color: coin.type_7d === 'up' ? '#16c784' : '#ea3943' }}>
        {`${formatMoney(coin.percent_7d)}%`}
      </span>
    ),
  },
  {
    title: '24h %',
    align: 'right',
    render: (coin) => (
      <span style={{ color: coin.type_24 === 'up' ? '#16c784' : '#ea3943' }}>
        {`${formatMoney(coin.percent_24)}%`}
      </span>
    ),
  },
  {
    title: '7d %',
    align: 'right',
    render: (coin) => (
      <span style={{ color: coin.type_7d === 'up' ? '#16c784' : '#ea3943' }}>
        {`${formatMoney(coin.percent_7d)}%`}
      </span>
    ),
  },
  {
    title: '24h %',
    align: 'right',
    render: (coin) => (
      <span style={{ color: coin.type_24 === 'up' ? '#16c784' : '#ea3943' }}>
        {`${formatMoney(coin.percent_24)}%`}
      </span>
    ),
  },
  {
    title: '7d %',
    align: 'right',
    render: (coin) => (
      <span style={{ color: coin.type_7d === 'up' ? '#16c784' : '#ea3943' }}>
        {`${formatMoney(coin.percent_7d)}%`}
      </span>
    ),
  },
  {
    title: (
      <Flex justifyContent={Flex.align.end} alignItems={Flex.align.center}>
        <span>Market Cap</span>
        <SpaceX size={8} />
        <Tooltip
          style="flat"
          title={
            <div style={{ padding: '6px 12px', maxWidth: 400 }}>
              <p>
                The total market value of a cryptocurrency's circulating supply.
              </p>
              <p>
                It is analogous to the free-float capitalization in the stock
                market.
              </p>
              <p>Market Cap = Current Price x Circulating Supply.</p>
            </div>
          }
          placement={Tooltip.placement.bottom}
        >
          <Icon symbol="info" />
        </Tooltip>
      </Flex>
    ),
    align: 'right',
    render: (coin) => `$${formatMoney(coin.market_cap)}`,
  },
  {
    title: (
      <Flex justifyContent={Flex.align.end} alignItems={Flex.align.center}>
        <span>Volume (24h)</span>
        <SpaceX size={8} />
        <Tooltip
          style="flat"
          title={
            <div style={{ padding: '6px 12px', maxWidth: 400 }}>
              <p>A measure of how much of a cryptocurrency</p>
              <p>was traded in the last 24 hours.</p>
            </div>
          }
          placement={Tooltip.placement.bottom}
        >
          <Icon symbol="info" />
        </Tooltip>
      </Flex>
    ),
    align: 'right',
    render: (coin) => `$${formatMoney(coin.volume)}`,
  },
  {
    title: (
      <Flex justifyContent={Flex.align.end} alignItems={Flex.align.center}>
        <span>Circulating Supply</span>
        <SpaceX size={8} />
        <Tooltip
          style="flat"
          title={
            <div style={{ padding: '6px 12px', maxWidth: 400 }}>
              <p>
                The amount of coins that are circulating in the market and are
                in public hands.
              </p>
              <p>It is analogous to the flowing shares in the stock market.</p>
            </div>
          }
          placement={Tooltip.placement.bottomEnd}
        >
          <Icon symbol="info" />
        </Tooltip>
      </Flex>
    ),
    align: 'right',
    fixed: { right: true },
    render: (coin) => (
      <span style={{ textTransform: 'uppercase' }}>{`${formatMoney(
        coin.circulating_supply,
      )} ${coin.id}`}</span>
    ),
  },
];

const TemplateSticky: ComponentStory<typeof Table> = (args) => (
  <div style={{ whiteSpace: 'nowrap' }}>
    <Table<Coin> {...args} columns={stickyColumns} rows={rows} />
  </div>
);

export const Sticky = TemplateSticky.bind({});
Sticky.args = {
  shadow: true,
  fill: true,
  height: 'calc(100vh - 100px)',
};
