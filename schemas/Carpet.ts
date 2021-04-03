import {
  integer,
  select,
  text,
  relationship,
  virtual,
} from '@keystone-next/fields';
import { list } from '@keystone-next/keystone/schema';
import { isSignedIn, rules } from '../access';
import formatMoney from '../lib/formatMoney';

export const Carpet = list({
  access: {
    create: isSignedIn,
    // read: rules.canOrder,
    update: isSignedIn,
    delete: isSignedIn,
  },
  fields: {
    // label: 'Carpet',
    name: text(),
    address: text(),
    phoneNumber: text(),
    message: text(),
    user: relationship({
      ref: 'User.carpets',
      defaultValue: ({ context }) => ({
        connect: { id: context.session.itemId },
      }),
    }),
    photo: relationship({
      ref: 'CarpetImage.carpet',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    status: select({
      options: [
        { label: 'Ordered', value: 'ORDERED' },
        { label: 'In Operation', value: 'IN_OPERATION' },
        { label: 'Delivered', value: 'DELIVERED' },
      ],
      defaultValue: 'ORDERED',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },
    }),
    city: select({
      options: [
        { label: 'Maribor', value: 'MARIBOR' },
        { label: 'Ljubljana', value: 'LJUBLJANA' },
      ],
      defaultValue: 'MARIBOR',
      ui: {
        displayMode: 'segmented-control',
      },
    }),
  },
});
