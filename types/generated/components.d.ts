import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
    icon: 'window-maximize';
    description: '';
  };
  attributes: {
    linkText: Attribute.String & Attribute.Required;
    linkTo: Attribute.Relation<
      'shared.button',
      'oneToOne',
      'api::section-id.section-id'
    >;
  };
}

export interface SharedCardA extends Schema.Component {
  collectionName: 'components_shared_card_as';
  info: {
    displayName: 'Card A';
    icon: 'id-card-alt';
    description: '';
  };
  attributes: {
    button: Attribute.Component<'shared.button'>;
    photo: Attribute.Media & Attribute.Required;
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 30;
      }>;
    withLink: Attribute.Relation<
      'shared.card-a',
      'oneToOne',
      'api::section-id.section-id'
    >;
    backgroundType: Attribute.Enumeration<['none', 'leaves', 'circles']> &
      Attribute.DefaultTo<'none'>;
    title: Attribute.String;
  };
}

export interface SharedCardGridB extends Schema.Component {
  collectionName: 'components_shared_card_grid_bs';
  info: {
    displayName: 'card grid B';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    showTitle: Attribute.Boolean & Attribute.Required;
    titleColor: Attribute.Enumeration<['grey', 'orange', 'blue']> &
      Attribute.DefaultTo<'grey'>;
    icon: Attribute.Media;
    iconFullSize: Attribute.Boolean & Attribute.Required;
  };
}

export interface SharedCard extends Schema.Component {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'CardLink';
    icon: 'address-card';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 10;
      }>;
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 35;
      }>;
    photo: Attribute.Media & Attribute.Required;
    cardLinkedTo: Attribute.Relation<
      'shared.card',
      'oneToOne',
      'api::section-id.section-id'
    >;
  };
}

export interface SharedCarouselSlide extends Schema.Component {
  collectionName: 'components_shared_carousel_slides';
  info: {
    displayName: 'Carousel slide';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    content: Attribute.RichText & Attribute.Required;
    linkText: Attribute.String;
    linkTo: Attribute.Relation<
      'shared.carousel-slide',
      'oneToOne',
      'api::section-id.section-id'
    >;
    photo: Attribute.Media & Attribute.Required;
  };
}

export interface SharedCarousel extends Schema.Component {
  collectionName: 'components_shared_carousels';
  info: {
    displayName: 'Carousel';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    subtitle: Attribute.String & Attribute.Required;
    background: Attribute.Media & Attribute.Required;
    slides: Attribute.Component<'shared.carousel-slide', true>;
  };
}

export interface SharedGridA extends Schema.Component {
  collectionName: 'components_shared_grid_as';
  info: {
    displayName: 'Grid A';
    icon: 'columns';
    description: 'Is a grid of two column, the text and title always shows, the second column can be a photo or slides';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
    button: Attribute.Component<'shared.button'>;
    backgroundType: Attribute.Enumeration<
      ['none', 'full', 'right', 'leaves', 'mixed leaves and right']
    > &
      Attribute.DefaultTo<'full'>;
    photo: Attribute.Media;
    show: Attribute.Enumeration<['cards', 'photo']> &
      Attribute.DefaultTo<'cards'>;
    photoColumn: Attribute.Enumeration<['first', 'second']>;
    withLink: Attribute.Relation<
      'shared.grid-a',
      'oneToOne',
      'api::section-id.section-id'
    >;
    cardLinks: Attribute.Component<'shared.card', true>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SharedGridBCard extends Schema.Component {
  collectionName: 'components_shared_grid_b_cards';
  info: {
    displayName: 'Grid B card';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    showTitle: Attribute.Boolean & Attribute.Required;
    titleColor: Attribute.Enumeration<['grey', 'orange', 'blue']> &
      Attribute.DefaultTo<'grey'>;
    icon: Attribute.Media;
    content: Attribute.RichText;
    subtitle: Attribute.String;
  };
}

export interface SharedGridB extends Schema.Component {
  collectionName: 'components_shared_grid_bs';
  info: {
    displayName: 'Grid B';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    withLink: Attribute.Relation<
      'shared.grid-b',
      'oneToOne',
      'api::section-id.section-id'
    >;
    size: Attribute.Enumeration<['Big', 'Small']>;
    cards: Attribute.Component<'shared.grid-b-card', true>;
  };
}

export interface SharedGridButton extends Schema.Component {
  collectionName: 'components_shared_grid_buttons';
  info: {
    displayName: 'Grid  Button';
    icon: 'apple-alt';
    description: '';
  };
  attributes: {
    content: Attribute.String;
    withLink: Attribute.Relation<
      'shared.grid-button',
      'oneToOne',
      'api::section-id.section-id'
    >;
    buttons: Attribute.Component<'shared.button', true>;
    title: Attribute.String;
  };
}

export interface SharedGridPhoto extends Schema.Component {
  collectionName: 'components_shared_grid_photos';
  info: {
    displayName: 'Grid Photo';
    icon: 'photo-video';
  };
  attributes: {
    photos: Attribute.Media & Attribute.Required;
  };
}

export interface SharedHero extends Schema.Component {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
    icon: 'chalkboard-teacher';
    description: '';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
        maxLength: 25;
      }>;
    subtitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 5;
        maxLength: 35;
      }>;
    content: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 180;
      }>;
    button: Attribute.Component<'shared.button'>;
    cover: Attribute.Media & Attribute.Required;
    showContent: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedServices extends Schema.Component {
  collectionName: 'components_shared_services';
  info: {
    displayName: 'Services';
    icon: 'qrcode';
    description: '';
  };
  attributes: {
    shopName: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
        maxLength: 30;
      }>;
    bookingAPI: Attribute.Enumeration<
      ['palma de majorca', 'turo park', "l'illa diagonal"]
    > &
      Attribute.Required;
  };
}

export interface SharedShopsInfo extends Schema.Component {
  collectionName: 'components_shared_shops_infos';
  info: {
    displayName: 'ShopsInfo';
    icon: 'warehouse';
    description: '';
  };
  attributes: {
    label: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.button': SharedButton;
      'shared.card-a': SharedCardA;
      'shared.card-grid-b': SharedCardGridB;
      'shared.card': SharedCard;
      'shared.carousel-slide': SharedCarouselSlide;
      'shared.carousel': SharedCarousel;
      'shared.grid-a': SharedGridA;
      'shared.grid-b-card': SharedGridBCard;
      'shared.grid-b': SharedGridB;
      'shared.grid-button': SharedGridButton;
      'shared.grid-photo': SharedGridPhoto;
      'shared.hero': SharedHero;
      'shared.services': SharedServices;
      'shared.shops-info': SharedShopsInfo;
    }
  }
}
