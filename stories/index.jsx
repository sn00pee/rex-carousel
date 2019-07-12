/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { checkA11y } from '@storybook/addon-a11y';
import { withInspectHtml } from 'storybook-inspecthtml';
import CenterDecorator from '../.storybook/centerDecorator';
import 'rex-core';

const { default: Carousel } =
  process.env.NODE_ENV === 'production'
    ? require('@rakuten-rex/rex-carousel')
    : require('../src/Carousel');

const stories = storiesOf('Carousel', module);
stories.addDecorator(withInspectHtml);
stories.addDecorator(CenterDecorator);
stories.addDecorator(checkA11y);
stories.addDecorator(withKnobs);

const items = [
  {
    id: 0,
    src: 'https://picsum.photos/376/200',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item A',
  },
  {
    id: 1,
    src: 'https://img.travel.rakuten.co.jp/select/hokkaido/201906-2/images/149357_1.jpg',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item B',
  },
  {
    id: 2,
    src: 'https://img.travel.rakuten.co.jp/select/hokkaido/201906-2/images/104743_1.jpg',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item C',
  },
  {
    id: 3,
    src: 'https://img.travel.rakuten.co.jp/select/hokkaido/201906-2/images/50746_1.jpg',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item D',
  },
  {
    id: 4,
    src: 'https://img.travel.rakuten.co.jp/select/hokkaido/201906-2/images/153500_1.jpg',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item E',
  },
  {
    id: 5,
    src: 'https://img.travel.rakuten.co.jp/select/hokkaido/201906-2/images/1430_1.jpg',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item F',
  },
  {
    id: 6,
    src: 'https://trvimg.r10s.jp/share/image_up/1430/LARGE/8eaa7015d5208c9e3923afcca942c87aefbb6fea.47.1.26.2.jpg',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item G',
  },
  {
    id: 7,
    src: 'https://img.travel.rakuten.co.jp/select/hokkaido/201906-2/images/139991_1.jpg',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item H',
  },
  {
    id: 8,
    src: 'https://img.travel.rakuten.co.jp/mytrip/content/ranking/sightseeing-shanghai/images/02_01.jpg',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item I',
  },
  {
    id: 9,
    src: 'https://img.travel.rakuten.co.jp/mytrip/content/ranking/sightseeing-shanghai/images/07_01_2.jpg',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item J',
  },
  {
    id: 10,
    src: 'https://img.travel.rakuten.co.jp/mytrip/content/ranking/sightseeing-shanghai/images/05_02.jpg',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item K',
  },
  {
    id: 11,
    src: 'https://img.travel.rakuten.co.jp/mytrip/content/ranking/sightseeing-shanghai/images/10_02.jpg',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item L',
  },
  {
    id: 12,
    src: 'https://img.travel.rakuten.co.jp/mytrip/content/howto/glamping/images/19-3.jpg',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item M',
  },
  {
    id: 13,
    src: 'https://img.travel.rakuten.co.jp/mytrip/content/howto/glamping/images/17-1.jpg',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item N',
  },
];

// Stories
stories.add('default Carousel', () => <Carousel items={items} />);
stories.add('withTabs Carousel', () => <Carousel items={items} isTabActive />);
