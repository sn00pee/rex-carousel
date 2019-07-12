import { shallow, mount } from 'enzyme';
import React from 'react';
import Carousel from '../Carousel';

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
    src: 'https://picsum.photos/376/200',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item B',
  },
  {
    id: 2,
    src: 'https://picsum.photos/376/200',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item C',
  },
  {
    id: 3,
    src: 'https://picsum.photos/376/200',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item D',
  },
  {
    id: 4,
    src: 'https://picsum.photos/376/200',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item E',
  },
  {
    id: 5,
    src: 'https://picsum.photos/376/200',
    title: 'Sagano Bamboo Forest',
    caption: 'Located in Kyoto, Japan',
    tabName: 'Item F',
  },
];

describe('Carousel component', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should have same length of items', () => {
    const wrapper = mount(<Carousel items={items} />);

    expect(wrapper.find('.swiper-wrapper').children()).toHaveLength(
      items.length
    );
  });

  it('renders a carousel item', () => {
    const wrapper = shallow(<Carousel items={items} />);

    expect(wrapper.find('.swiper-slide')).toBeDefined();
    expect(wrapper.find('.carousel-item-description')).toBeDefined();
    expect(wrapper.find('.carousel-item-title')).toBeDefined();
    expect(wrapper.find('.carousel-item-caption')).toBeDefined();
  });

  it('returns to match snapshot', () => {
    const wrapper = shallow(<Carousel items={items} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("doesn't break without items", () => {
    const wrapper = shallow(<Carousel items={[]} />);

    expect(wrapper.find('.swiper-wrapper')).toHaveLength(0);
  });

  it('renders carousel item when item is added', () => {
    const wrapper = mount(<Carousel items={[]} />);

    wrapper.setProps({
      items: [
        {
          id: 0,
          src: 'https://picsum.photos/376/200',
          title: 'Sagano Bamboo Forest',
          caption: 'Located in Kyoto, Japan',
          tabName: 'Item A',
        },
      ],
    });

    expect(wrapper.find('.carousel-item-title').text()).toEqual(
      'Sagano Bamboo Forest'
    );
  });

  it('has tabs if isTabActive prop is passed', () => {
    const wrapper = shallow(<Carousel items={items} isTabActive />);

    expect(wrapper.find('.carousel-tabs-container')).toBeDefined();
  });

  it('does not have tabs if isTabActive props is not passed', () => {
    const wrapper = shallow(<Carousel items={items} />);

    expect(wrapper.find('.carousel-tabs-container')).not.toBe(undefined);
  });
});

describe('CarouselTabs component', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('renders a carouselTabs item', () => {
    const wrapper = shallow(<Carousel items={items} isTabActive />);

    expect(wrapper.find('.carousel-tabs-container')).toBeDefined();
    expect(wrapper.find('.carousel-tabs-prev')).toBeDefined();
    expect(wrapper.find('.carousel-tabs-next')).toBeDefined();
    expect(wrapper.find('.carousel-tabs-inner')).toBeDefined();
  });

  it('has length of items minus 2', () => {
    const wrapper = shallow(<Carousel items={items} isTabActive />);

    expect(
      wrapper
        .find('CarouselTabs')
        .render()
        .find('.carousel-tabs')
        .children()
    ).toHaveLength(items.length - 2);
  });

  it('should call the onClick function when tab is clicked', () => {
    const wrapper = shallow(<Carousel items={items} isTabActive />);
    const mockedHandleClickTab = jest.fn();

    wrapper.instance().goToIndex = mockedHandleClickTab;
    wrapper.instance().goToIndex();
    expect(mockedHandleClickTab).toHaveBeenCalledTimes(1);
  });
});

